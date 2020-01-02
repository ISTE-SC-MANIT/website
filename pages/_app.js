import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../components/theme";

const MyApp = ({ Component, pageProps }) => {

    React.useEffect(()=>{
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
