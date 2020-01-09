import { createMuiTheme } from "@material-ui/core";
import { blue, lightBlue, grey } from "@material-ui/core/colors";
import { dark } from "@material-ui/core/styles/createPalette";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[`A400`]
        },
        secondary: {
            main: lightBlue["500"]
        }
    }
});

export default theme;
