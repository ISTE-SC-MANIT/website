import React, { useState, useEffect } from "react";
import {
    makeStyles,
    Theme,
    Container,
    Typography,
    Card,
    CardHeader,
    Button,
    CardContent,
    TextField,
    Box,
    CircularProgress,
    Grid,
    fade
} from "@material-ui/core";
import { NextPage } from "next";
import { MegatreopuzPageProps } from "../../_app";
import {
    QueryRenderer,
    graphql,
    createRefetchContainer,
    RelayRefetchProp
} from "react-relay";
import { commit } from "../../../components/megatreopuz/relay/mutations/answerQuestion";
import LoadingScreen from "../../../components/loading";
import { contestQuery } from "../../../components/megatreopuz/relay/__generated__/contestQuery.graphql";
import { contest_question } from "../../../components/megatreopuz/relay/__generated__/contest_question.graphql";
const useStyles = makeStyles(() => ({
    container: {
        position: "absolute",
        overflow: "auto",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    containerMessage: {
        position: "absolute",
        overflow: "auto",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}));

interface QuestionProps {
    question: contest_question;
    relay: RelayRefetchProp;
    setMainLoading: (b: boolean) => void;
    showErrorOutlet: (e: Error) => void;
    submitAnswer: (
        answer: string,
        setError: (s: string) => void,
        setSuccess: () => void
    ) => void;
}

const useQuestionStyles = makeStyles((theme: Theme) => ({
    figure: {
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },
    image: {
        maxWidth: "50%"
    },
    spinner: {
        position: "absolute",
        background: fade(theme.palette.common.white, 0.5),
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}));

const Question: React.FunctionComponent<QuestionProps> = ({
    question,
    submitAnswer,
    setMainLoading,
    showErrorOutlet,
    relay: { refetch }
}) => {
    const classes = useQuestionStyles();
    const [img, setImg] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [helper, setHelper] = useState<string>(" ");
    const [success, setSuccess] = useState<boolean>(false);

    function setErrorState(s: string) {
        setError(true);
        setHelper(s);
    }

    function resetErrorState() {
        if (error) {
            setError(false);
            setHelper(" ");
        }
    }

    function setSuccessState() {
        setError(false);
        setHelper("Correct answer. Well done!");
        setSuccess(true);
    }

    function resetSuccessState() {
        setHelper(" ");
        setSuccess(false);
    }

    useEffect(() => {
        setLoading(true);
        setImg(`/megatreopuz/${question.imgUrl}`);
    }, [question.imgUrl]);

    useEffect(() => {
        setMainLoading(false);
        resetSuccessState();
        setAnswer("");
    }, [question.id, setMainLoading]);

    return (
        <Container maxWidth="sm">
            <Card elevation={5}>
                <CardHeader
                    title={question.description}
                    titleTypographyProps={{
                        align: "center",
                        variant: "h5",
                        component: "h2"
                    }}
                />
                <CardContent>
                    <figure className={classes.figure}>
                        {loading && (
                            <div className={classes.spinner}>
                                <CircularProgress />
                            </div>
                        )}
                        <img
                            className={classes.image}
                            src={img}
                            onLoad={() => setLoading(false)}
                        ></img>
                    </figure>
                    <Box ml={2} mr={2} mt={4}>
                        <TextField
                            variant="outlined"
                            error={error}
                            helperText={helper}
                            label="Enter your answer"
                            fullWidth
                            value={answer}
                            onChange={e => {
                                resetErrorState();
                                setAnswer(e.target.value);
                            }}
                        />
                    </Box>
                    <Box p={2}>
                        <Grid
                            alignItems="center"
                            justify="center"
                            item
                            container
                        >
                            {success ? (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        setMainLoading(true);
                                        refetch(
                                            {},
                                            null,
                                            (
                                                error: Error | null | undefined
                                            ) => {
                                                if (error) {
                                                    showErrorOutlet(error);
                                                }
                                            },
                                            { force: true }
                                        );
                                    }}
                                >
                                    Next
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                        submitAnswer(
                                            answer,
                                            (s: string) => setErrorState(s),
                                            () => setSuccessState()
                                        )
                                    }
                                >
                                    Submit
                                </Button>
                            )}
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

const QuestionComponent = createRefetchContainer(
    Question,
    {
        question: graphql`
            fragment contest_question on Question {
                id
                questionNo
                imgUrl
                description
            }
        `
    },
    graphql`
        query contestRefetchQuery {
            nextQuestion {
                ...contest_question
            }
        }
    `
);

const AnswerPage: NextPage<MegatreopuzPageProps> = ({
    environment,
    viewer,
    state,

    showError,
    setLoading
}) => {
    const classes = useStyles();

    const submitAnswer = React.useMemo(
        () => (
            answer: string,
            setError: (s: string) => void,
            setSuccess: () => void
        ) => {
            setLoading(true);
            if (!environment) return;
            commit(environment, viewer.id, answer, {
                onError: showError,
                onCompleted: (response: any) => {
                    if (
                        !response ||
                        !response.answerQuestion ||
                        !response.answerQuestion.valid
                    ) {
                        setLoading(false);
                        setError("The answer is invalid");
                    } else {
                        setLoading(false);
                        setSuccess();
                    }
                }
            });
        },
        [environment, setLoading, showError, viewer.id]
    );

    if (!environment) return null;
    if (!state.active)
        return (
            <section className={classes.containerMessage}>
                <Typography variant="h3" component="h2" align="center">
                    The contest has been suspended
                </Typography>
            </section>
        );

    return (
        <Container maxWidth="md" className={classes.container}>
            <QueryRenderer<contestQuery>
                environment={environment}
                query={graphql`
                    query contestQuery {
                        nextQuestion {
                            ...contest_question
                        }
                    }
                `}
                variables={{}}
                render={({ error, props }) => {
                    if (error) {
                        showError(error);
                        return null;
                    }
                    if (props) {
                        if (props.nextQuestion)
                            return (
                                <QuestionComponent
                                    showErrorOutlet={showError}
                                    setMainLoading={setLoading}
                                    submitAnswer={submitAnswer}
                                    question={props.nextQuestion}
                                />
                            );
                        else {
                            setLoading(false);
                            return (
                                <section className={classes.containerMessage}>
                                    <Typography
                                        variant="h3"
                                        component="h2"
                                        align="center"
                                    >
                                        That's all for now. Tune in later for
                                        more question
                                    </Typography>
                                </section>
                            );
                        }
                    }
                    return <LoadingScreen loading={true} />;
                }}
            ></QueryRenderer>
        </Container>
    );
};
export default AnswerPage;
