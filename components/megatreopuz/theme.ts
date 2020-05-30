import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[700]
        }
        // secondary: {
        //     light: "#0066ff",
        //     main: "#0044ff",
        //     // dark: will be calculated from palette.secondary.main,
        //     contrastText: "#ffcc00"
        // }
    },
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
    }
});

export default theme;
