import { createMuiTheme } from "@material-ui/core";

import { blue, lightBlue,orange } from "@material-ui/core/colors";

import { blue, lightBlue, grey } from "@material-ui/core/colors";
import { dark } from "@material-ui/core/styles/createPalette";


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

            main:orange['400']

            main: lightBlue[`A400`],
            contrastText: "#fff"
        },
        secondary: {
            main: lightBlue["500"]

        }
    }
});

export default theme;
