import React from "react";
import createMuiTheme, { Theme } from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { useRouter } from "next/router";
import LoadingScreen from "../components/loading";
const MyApp = ({
    Component,
    pageProps
}: {
    Component: any;
    pageProps: any;
}) => {
    const [theme, setTheme] = React.useState<Theme>(() => createMuiTheme());

    const { route } = useRouter();

    const first = route.split("/")[1];

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

    const [loading, setLoading] = React.useState<boolean>(false);

    return (
        <ThemeProvider theme={theme}>
            {/* Loading screen */}
            <CssBaseline />
            <LoadingScreen loading={loading} />
            <Component {...pageProps} {...{ loading, setLoading }} />
            {/* Add footer here */}
        </ThemeProvider>
    );
};

export default MyApp;
