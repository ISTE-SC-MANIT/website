import { createMuiTheme } from "@material-ui/core";
import { deepPurple, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
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
