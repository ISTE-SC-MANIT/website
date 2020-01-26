import { createMuiTheme } from "@material-ui/core";
import { lightBlue, blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[`900`]
        },
        secondary: {
            main: lightBlue["900"]
        }
    }
});

export default theme;
