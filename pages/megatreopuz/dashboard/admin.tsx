import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
    Button,
    Grid,
    FormControlLabel,
    Switch,
    Modal,
    Backdrop,
    Fade,
    Box,
    IconButton,
    Divider
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { commit } from "../../../components/megatreopuz/relay/mutations/createQuestion";
import { DeleteCommit } from "../../../components/megatreopuz/relay/mutations/deleteQuestion";
import LoadingScreen from "../../../components/loading";
import { getAllQuestionQueryResponse } from "../../../components/megatreopuz/relay/__generated__/getAllQuestionQuery.graphql";
import query from "../../../components/megatreopuz/relay/queries/getAllQuestionQuery";
import { NextPage } from "next";
import { MegatreopuzPageProps } from "../../_app";
import { QuestionInput } from "../../../components/megatreopuz/relay//__generated__/createQuestionMutation.graphql";
import { admin_questions } from "../../../components/megatreopuz/relay//__generated__/admin_questions.graphql";
import { commitState } from "../../../components/megatreopuz/relay/mutations/updateState";
import {
    QueryRenderer,
    createRefetchContainer,
    graphql,
    RelayRefetchProp
} from "react-relay";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { updateQuestionCommit } from "../../../components/megatreopuz/relay/mutations/updateQuestion";
import { QuestionNumberInput } from "../../../components/megatreopuz/relay/__generated__/deleteQuestionMutation.graphql";

interface AdminPanelProps extends MegatreopuzPageProps {
    questions: admin_questions;
    relay: RelayRefetchProp;
}

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white
        },
        body: {
            fontSize: 14
        }
    })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            "&:nth-of-type(odd)": {
                backgroundColor: theme.palette.background.default
            }
        }
    })
)(TableRow);

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch"
        }
    },
    table: {
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    table1: {
        padding: "5px"
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        backgroundColor: theme.palette.background.paper,

        width: "70%",
        padding: theme.spacing(2, 4, 3)
    },
    mTextfield: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    Textfield: {
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    successMessage: {
        position: "fixed",
        right: "0",
        left: "0",
        marginRight: "auto",
        marginLeft: "auto",
        minHeight: "10em",
        width: "max-content"
    },
    fieldContainer: {
        width: "75%",

        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px"
    },
    mHead: {
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px"
    },
    Head: {
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px",
        textAlign: "center"
    },
    switch: {
        width: "max-content",
        marginLeft: "auto",
        marginRight: "auto"
    },
    pHead: {
        width: "max-content",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "0px",
        marginTop: "0px"
    },
    mButtonGroup: {
        width: "max-content",
        margin: "auto"
    }
}));

const AdminPanel: NextPage<AdminPanelProps> = ({
    environment,
    viewer,
    state,
    showError,
    setLoading,
    questions,
    relay
}) => {
    if (!environment) return null;
    const classes = useStyles();
    const [quiz, setQuiz] = React.useState(false);
    const [questionNo, setQuestionNo] = React.useState(Number);
    const [imgUrl, setImgUrl] = React.useState("");
    const [answer, setAnswer] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [success, setSuccess] = React.useState(false);
    const [update, setUpdate] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState("");
    const [delOpen, setDelOpen] = React.useState(false);

    React.useEffect(() => {
        setQuiz(state.active);
    }, [state]);

    setLoading(false);

    const onClose = () => {
        setOpen(false);
    };

    const AdminSuccessMessageComponent = () => {
        return (
            <div className={classes.successMessage}>
                <Alert variant="filled" severity="info">
                    {successMessage} &nbsp;&nbsp;&nbsp;&nbsp;
                    <IconButton
                        aria-label="delete"
                        color="inherit"
                        onClick={() => {
                            setSuccess(false);
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Alert>
            </div>
        );
    };

    const UpdateConatainer = () => {
        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={onClose}
                    closeAfterTransition
                    // BackdropComponent={Backdrop}
                    // BackdropProps={{
                    //     timeout: 500
                    // }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2 className={classes.mHead}>Update Question</h2>
                            <form
                                className={classes.root}
                                noValidate
                                autoComplete="off"
                            >
                                <div className={classes.fieldContainer}>
                                    <TextField
                                        disabled
                                        id="outlined-basic"
                                        label="Enter Question No"
                                        value={questionNo}
                                        className={classes.mTextfield}
                                        variant="outlined"
                                    />
                                </div>
                                <div className={classes.fieldContainer}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Answer"
                                        variant="outlined"
                                        value={answer}
                                        className={classes.mTextfield}
                                        onChange={e =>
                                            setAnswer(e.target.value)
                                        }
                                        helperText="If you don't want to update the answer, then please leave this filed empty, your answer will remain unchanged"
                                    />
                                </div>
                                <div className={classes.fieldContainer}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Image URL"
                                        variant="outlined"
                                        value={imgUrl}
                                        className={classes.mTextfield}
                                        onChange={e =>
                                            setImgUrl(e.target.value)
                                        }
                                    />
                                </div>
                                <div className={classes.fieldContainer}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Description"
                                        variant="outlined"
                                        value={description}
                                        className={classes.mTextfield}
                                        onChange={e => {
                                            e.preventDefault();
                                            setDescription(e.target.value);
                                        }}
                                    />
                                </div>
                            </form>
                            <div className={classes.mButtonGroup}>
                                {" "}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleUpdate}
                                >
                                    Update
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    };

    const handleDelClose = () => {
        setDelOpen(false);
    };

    const ConfirmConatainer = () => {
        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className={classes.modal}
                    open={true}
                    onClose={handleDelClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500
                    }}
                >
                    <Fade in={delOpen}>
                        <div className={classes.paper}>
                            <h4 className={classes.mHead}>
                                Are you sure you want to delete this Question
                            </h4>

                            <div className={classes.mButtonGroup}>
                                {" "}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleDelClose}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        commitState(environment, !quiz, {
            onError: showError,
            onCompleted: (response: any) => {
                setSuccessMessage("State was Successfully updated!");
                setSuccess(true);
            }
        });
        setQuiz(!quiz);
    };

    const variables: QuestionInput = {
        questionNo,
        imgUrl,
        answer,
        description
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = () => {
        updateQuestionCommit(environment, variables, {
            onError: showError,
            onCompleted: (response: any) => {
                setSuccessMessage("Question Was Successfully Updated");
                setSuccess(true);

                setQuestionNo(0);
                setAnswer("");
                setDescription("");
                setImgUrl("");
                setUpdate(!update);
                handleClose();
            }
        });
    };
    const handleSubmit = () => {
        commit(environment, viewer.id, variables, {
            onError: showError,
            onCompleted: (response: any) => {
                setLoading(false);
                setSuccessMessage("Question Was Successfully Updated");
                setSuccess(true);

                setQuestionNo(0);
                setAnswer("");
                setDescription("");
                setImgUrl("");
                setUpdate(!update);
            }
        });
    };

    const variables2: QuestionNumberInput = {
        questionNo
    };

    const handleDelete = () => {
        DeleteCommit(environment, variables2, {
            onError: showError,
            onCompleted: (response: any) => {
                setLoading(false);
                handleDelClose();
                setSuccessMessage("Question Was Successfully Deleted");
                setSuccess(true);

                setQuestionNo(0);
                setAnswer("");
                setDescription("");
                setImgUrl("");
                setUpdate(!update);
            }
        });
    };
    if (viewer.admin) {
        return (
            <div>
                {<UpdateConatainer />}
                {delOpen && <ConfirmConatainer />}
                {success && <AdminSuccessMessageComponent />}

                <h1 className={classes.Head}>
                    Welcome To Megatreoupuz Admin Panel, {viewer.name}
                </h1>
                <p className={classes.Head}> Manage Megatropuz from here </p>
                <div>
                    <br></br>
                    <br></br>
                    <h3 className={classes.pHead}>State Manager</h3>
                    <p className={classes.pHead}>
                        {" "}
                        Manage the State of contest from here{" "}
                    </p>
                    <div className={classes.switch}>
                        {" "}
                        <Grid
                            component="label"
                            container
                            alignItems="center"
                            spacing={1}
                        >
                            <Grid item>State</Grid>
                            <Grid item>Off</Grid>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={quiz}
                                            onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label={"On"}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <br></br>
                    <br></br>
                    <h3 className={classes.pHead}>Create Question Section</h3>
                    <p className={classes.pHead}>
                        Create the Questions for Contest from here.
                    </p>
                    <div>
                        {" "}
                        <form
                            className={classes.root}
                            noValidate
                            autoComplete="off"
                        >
                            <div className={classes.fieldContainer}>
                                <TextField
                                    id="outlined-basic"
                                    label="Enter Question No"
                                    variant="outlined"
                                    className={classes.mTextfield}
                                    onChange={e =>
                                        setQuestionNo(parseInt(e.target.value))
                                    }
                                />
                            </div>
                            <div className={classes.fieldContainer}>
                                <TextField
                                    className={classes.mTextfield}
                                    id="standard-basic"
                                    label="Enter Answer"
                                    variant="outlined"
                                    onChange={e => setAnswer(e.target.value)}
                                />
                            </div>
                            <div className={classes.fieldContainer}>
                                <TextField
                                    className={classes.mTextfield}
                                    id="standard-basic"
                                    label="Enter Image URL"
                                    variant="outlined"
                                    onChange={e => setImgUrl(e.target.value)}
                                />
                            </div>
                            <div className={classes.fieldContainer}>
                                <TextField
                                    className={classes.mTextfield}
                                    id="standard-basic"
                                    label="Enter Description"
                                    variant="outlined"
                                    onChange={e =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </div>
                        </form>
                        <div className={classes.Head}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                            >
                                Create Question
                            </Button>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <br></br>
                    <br></br>
                    <h3 className={classes.pHead}>Update Question Section</h3>
                    <p className={classes.pHead}>
                        Manage (Update or Delete) your Questions from here
                    </p>
                    <QueryRenderer
                        environment={environment}
                        query={query}
                        variables={{ update: update }}
                        render={({
                            error,
                            props
                        }: {
                            error: Error | null;
                            props: any;
                        }) => {
                            if (error) {
                                return null;
                            } else if (props) {
                                const questions = props.getAllQuestion;
                                return (
                                    <div className={classes.table1}>
                                        <TableContainer>
                                            <Table
                                                className={classes.table}
                                                aria-label="customized table"
                                            >
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell align="center">
                                                            Question No.
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            Image URL
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            Description
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            Actions
                                                        </StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {questions.map(
                                                        (
                                                            question: any,
                                                            i: any
                                                        ) => (
                                                            <StyledTableRow
                                                                key={i}
                                                            >
                                                                <StyledTableCell align="center">
                                                                    {
                                                                        question.questionNo
                                                                    }
                                                                </StyledTableCell>
                                                                <StyledTableCell align="center">
                                                                    {
                                                                        question.imgUrl
                                                                    }
                                                                </StyledTableCell>
                                                                <StyledTableCell align="center">
                                                                    {
                                                                        question.description
                                                                    }
                                                                </StyledTableCell>
                                                                <StyledTableCell align="center">
                                                                    <Button
                                                                        variant="contained"
                                                                        color="primary"
                                                                        onClick={e => {
                                                                            e.preventDefault();
                                                                            setDescription(
                                                                                question.description
                                                                            );
                                                                            setImgUrl(
                                                                                question.imgUrl
                                                                            );
                                                                            setQuestionNo(
                                                                                question.questionNo
                                                                            );
                                                                            setOpen(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        Update
                                                                    </Button>
                                                                    &nbsp;&nbsp;&nbsp;
                                                                    <Button
                                                                        variant="contained"
                                                                        color="secondary"
                                                                        onClick={() => {
                                                                            setQuestionNo(
                                                                                question.questionNo
                                                                            );

                                                                            setDelOpen(
                                                                                true
                                                                            );
                                                                        }}
                                                                    >
                                                                        Delete
                                                                    </Button>
                                                                </StyledTableCell>
                                                            </StyledTableRow>
                                                        )
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                );
                            } else {
                                <CircularProgress />;
                            }
                        }}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                Acess Denied !!!!! <br></br> You are not admin
            </div>
        );
    }
};

export default AdminPanel;

createRefetchContainer(
    AdminPanel,
    {
        questions: graphql`
            fragment admin_questions on Question {
                questionNo
                imgUrl
                description
            }
        `
    },
    graphql`
        query adminQuery {
            getAllQuestion {
                questionNo
                imgUrl
                description
            }
        }
    `
);
