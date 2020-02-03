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
import Menu from "../components/megatreopuz/menu";
import { removeCookies } from "../components/megatreopuz/util";
import cookie from "js-cookie";
import { makeEnvironment } from "../components/megatreopuz/relay/environment";
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
}

export interface MegatreopuzPageProps extends PageProps {
    environment: Environment | null;
    contestActive: boolean;
    logout: () => void;
    viewer: AppViewerQueryResponse["viewer"];
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
    /* Remove server injected style */
    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

    /* Page loading animation */
    const [routeChange, setRouteChange] = React.useState<boolean>(false);
    Router.events.on("routeChangeStart", () => {
        setRouteChange(true);
    });
    Router.events.on("routeChangeComplete", () => setRouteChange(false));
    Router.events.on("routeChangeError", () => setRouteChange(false));
    const [loading, setLoading] = React.useState<boolean>(false);

    /* Error reporting */
    const [error, setError] = React.useState<boolean>(false);
    const [errMsg, setErrMsg] = React.useState<React.ReactNode>("");

    const showError = (error: Error) => {
        setError(true);
        setErrMsg(error.message);
    };

    /* Relay and Graphql */
    const [useMegatreopuz, setMegatreopuz] = React.useState<boolean>(false);
    const TimeOut = React.useRef<any>();

    let environment: Environment | null = React.useMemo(
        () => makeEnvironment(),
        [first, second]
    );
    /* Logging user out of megatreopuz */
    const logout = React.useMemo(() => {
        return () => {
            removeCookies();
            environment = null;
            router.push("/megatreopuz/signIn");
        };
    }, []);

    React.useEffect(() => {
        if (first === "megatreopuz" && second === "dashboard") {
            // Get the tokens
            const token = cookie.get("access_token");
            const expiresAt = parseInt(cookie.get("expires_at") || "0");

            if (TimeOut.current) {
                /* Cancel the previous timeout */
                clearTimeout(TimeOut.current as number);
            }
            if (!token || !expiresAt || Date.now() > expiresAt) {
                router.push("/megatreopuz/signIn");
                return;
            }
            const timeToExpire = expiresAt - Date.now();
            TimeOut.current = setTimeout(() => {
                showError(
                    new Error("Google Login has timed out. Please log in again")
                );
                console.log("Logging out because expired");
                logout();
            }, timeToExpire);
            setMegatreopuz(true);
        } else {
            setMegatreopuz(false);
            if (TimeOut.current) {
                /* Cancel the previous timeout */
                clearTimeout(TimeOut.current as number);
            }
        }
    }, [first, second]);

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
                environment && (
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
                                    <>
                                        <Menu
                                            logout={logout}
                                            viewer={props.viewer}
                                        />
                                        <Component
                                            logout={logout}
                                            contestActive={props.active}
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
                                    </>
                                );
                            }
                            return <LoadingScreen loading={true} />;
                        }}
                    />
                )
            )}
        </ThemeProvider>
    );
};

export default MyApp;
