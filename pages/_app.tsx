import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {
    ThemeProvider,
    CssBaseline,
    LinearProgress,
    NoSsr
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
    }
}));

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

    React.useEffect(() => {
        switch (first) {
            case "":
                import("../components/index/theme")
                    .then(theme => setTheme(theme.default))
                    .catch(err => console.log(err.message));
                break;
            case "chimera":
                import("../components/Chimera/theme")
                    .then(theme => setTheme(theme.default))
                    .catch(err => console.log(err.message));
                break;
            case "megatreopuz":
                import("../components/megatreopuz/theme")
                    .then(theme => setTheme(theme.default))
                    .catch(err => console.log(err.message));
                break;
        }
    }, [first]);

    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

    const [useMegatreopuz, setMegatreopuz] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (first === "megatreopuz" && second === "dashboard")
            setMegatreopuz(true);
    }, [first, second]);

    const [routeChange, setRouteChange] = React.useState<boolean>(false);

    Router.events.on("routeChangeStart", () => setRouteChange(true));
    Router.events.on("routeChangeComplete", () => setRouteChange(false));
    Router.events.on("routeChangeError", () => setRouteChange(false));
    const [loading, setLoading] = React.useState<boolean>(false);

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
            {!useMegatreopuz ? (
                <Component {...pageProps} {...{ loading, setLoading }} />
            ) : (
                <QueryRenderer<AppViewerQuery>
                    environment={environment}
                    query={graphql`
                        query AppViewerQuery {
                            viewer {
                                id
                                username
                                name
                                email
                                phone
                                college
                                year
                                country
                                admin
                                currentquestion
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
                                    {...pageProps}
                                    {...{ loading, setLoading }}
                                />
                            );
                        }
                        return <h1>Loading data...</h1>;
                    }}
                />
            )}
        </ThemeProvider>
    );
};

export default MyApp;
