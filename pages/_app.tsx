import React from "react";
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
import { QueryRenderer, graphql } from "react-relay";
import environment from "../components/megatreopuz/relay/environment";
import { AppViewerQuery } from "../components/megatreopuz/relay/__generated__/AppViewerQuery.graphql";
const useStyles = makeStyles((theme: Theme) => ({
    linearLoading: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.appBar + 1
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
}

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

    const [error, setError] = React.useState<boolean>(false);
    const [errMsg, setErrMsg] = React.useState<React.ReactNode>("");

    const showError = (e: Error) => {
        setError(true);
        setErrMsg(e.message);
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
                    showError={showError}
                    {...pageProps}
                    {...{ loading, setLoading, pathLoading: routeChange }}
                />
            ) : (
                <QueryRenderer<AppViewerQuery>
                    environment={environment}
                    query={graphql`
                        query AppViewerQuery {
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
                    render={({ error, props }) => {
                        if (error) return <h1>{error.message}</h1>;
                        else if (props) {
                            return (
                                <Component
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
            )}
        </ThemeProvider>
    );
};

export default MyApp;
