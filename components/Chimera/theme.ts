import { createMuiTheme } from "@material-ui/core";
import { deepPurple, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(",")
    },
    palette: {
        primary: {
            main: deepPurple[`700`]
        },
        secondary: {
            main: pink["A400"]
        }
    }
});

export default theme;
