import React from "react";
import createMuiTheme, { Theme } from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/core";
import { useRouter } from "next/router";
import Header from "../components/header1";
const MyApp = ({
    Component,
    pageProps
}: {
    Component: any;
    pageProps: any;
}) => {
    const [theme, setTheme] = React.useState<Theme>(() => createMuiTheme());

    const { route } = useRouter();
    const first = route.split("/")[0];

    React.useEffect(() => {
        switch (first) {
            case "":
                import("../components/index/theme")
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

    return (
        <ThemeProvider theme={theme}>
            {/* Add header here */}
            <Header />
            <Component {...pageProps} />
            {/* Add footer here */}
        </ThemeProvider>
    );
};

export default MyApp;
