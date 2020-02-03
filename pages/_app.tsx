import React, { useEffect } from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {
    ThemeProvider,
    CssBaseline,
    LinearProgress,
    Snackbar,
    Typography,
    Paper
} from "@material-ui/core";
import { useRouter, Router } from "next/router";
import LoadingScreen from "../components/loading";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { QueryRenderer, graphql, Environment } from "react-relay";
import {
    AppViewerQuery,
    AppViewerQueryResponse
} from "../components/megatreopuz/relay/__generated__/AppViewerQuery.graphql";
const useStyles = makeStyles((theme: Theme) => ({
    linearLoading: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.modal + 1
    },
    error: {
        background: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        padding: theme.spacing(1, 3)
    }
}));

export interface PageProps {
    loading: boolean;
    showError: (e: Error) => void;
    setLoading: (b: boolean) => void;
    pathLoading: boolean;
    setEnvironment?: (e: Environment) => void;
}

export interface MegatreopuzPageProps extends PageProps {
    environment: Environment | null;
    contestActive: boolean;
}

const Dummy: React.FunctionComponent = () => {
    useEffect(() => {
        window.open("/megatreopuz/signIn", "_self");
    }, []);
    return null;
};

const MyApp = ({
    Component,
    pageProps
}: {
    Component: any;
    pageProps: any;
}) => {
    const [theme, setTheme] = React.useState<Theme>(() => createMuiTheme());
    const router = useRouter();
    const classes = useStyles();
    const paths = router.route.split("/");
    const first = paths[1];
    const second = paths[2];

    /* Loading theme */
    React.useEffect(() => {
        switch (first) {
            case "":
                import("../components/index/theme")
                    .then(theme => setTheme(theme.default))
                    .catch(err => console.error(err.message));
                break;
            case "chimera":
                import("../components/Chimera/theme")
                    .then(theme => setTheme(theme.default))
                    .catch(err => console.error(err.message));
                break;
            case "megatreopuz":
                import("../components/megatreopuz/theme")
                    .then(theme => setTheme(theme.default))
                    .catch(err => console.error(err.message));
                break;
        }
    }, [first]);
    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

    /* Relay and Graphql */
    const [useMegatreopuz, setMegatreopuz] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (first === "megatreopuz" && second === "dashboard")
            setMegatreopuz(true);
    }, [first, second]);

    /* Page loading animation */
    const [routeChange, setRouteChange] = React.useState<boolean>(false);
    Router.events.on("routeChangeStart", () => setRouteChange(true));
    Router.events.on("routeChangeComplete", () => setRouteChange(false));
    Router.events.on("routeChangeError", () => setRouteChange(false));
    const [loading, setLoading] = React.useState<boolean>(false);
    const [environment, setEnv] = React.useState<Environment | null>(null);
    const [error, setError] = React.useState<boolean>(false);
    const [errMsg, setErrMsg] = React.useState<React.ReactNode>("");

    const showError = (error: Error) => {
        setError(true);
        setErrMsg(error.message);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Top Progress bar */}
            {routeChange && (
                <LinearProgress
                    color="secondary"
                    className={classes.linearLoading}
                />
            )}
            {/* Loading screen */}
            <LoadingScreen loading={loading} />
            {/* Error Snackbar */}
            <Snackbar
                open={error}
                autoHideDuration={6000}
                onClose={() => setError(false)}
            >
                <Paper elevation={3} className={classes.error}>
                    <Typography>{errMsg}</Typography>
                </Paper>
            </Snackbar>
            {!useMegatreopuz ? (
                <Component
                    setEnvironment={setEnv}
                    {...pageProps}
                    {...{ loading, setLoading, pathLoading: routeChange }}
                />
            ) : environment ? (
                <QueryRenderer<AppViewerQuery>
                    environment={environment}
                    query={graphql`
                        query AppViewerQuery {
                            active: getState
                            viewer {
                                id
                                userName
                                name
                                email
                                phone
                                college
                                year
                                lastAnsweredQuestionTime
                                country
                                admin
                                lastAnsweredQuestion
                                totalQuestionsAnswered
                                rank
                            }
                        }
                    `}
                    variables={{}}
                    render={({
                        error,
                        props
                    }: {
                        error: Error | null;
                        props: AppViewerQuery["response"] | null;
                    }) => {
                        if (error) {
                            showError(error);
                            return null;
                        } else if (props) {
                            return (
                                <Component
                                    contestActive={props.active}
                                    setEnvironment={setEnv}
                                    viewer={props.viewer}
                                    environment={environment}
                                    showError={showError}
                                    {...pageProps}
                                    {...{
                                        loading,
                                        setLoading,
                                        pathLoading: routeChange
                                    }}
                                />
                            );
                        }
                        return <LoadingScreen loading={true} />;
                    }}
                />
            ) : (
                <Dummy />
            )}
        </ThemeProvider>
    );
};

export default MyApp;
