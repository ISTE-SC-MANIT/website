import React from "react";
import { Box, Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// TODO: Remove next line when making pages
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
    box: {
        // Use theme to make padding, color, breakpoints and so on.
        // Try to avoid putting direct values
        padding: theme.spacing(2)
    }
}));

const Template: React.FunctionComponent<Props> = props => {
    const classes = useStyles(props);
    return (
        <Box className={classes.box}>
            <Typography variant="h1">Template for the page</Typography>
        </Box>
    );
};

Template.displayName = "Template";
export default Template;
