import { createMuiTheme } from "@material-ui/core";

import { lightBlue } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue["500"],
            contrastText: "#fff"
        }
    }
});

export default theme;
