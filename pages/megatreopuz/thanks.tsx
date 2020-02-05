import React from "react";
import { Theme, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DoneIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: theme.palette.grey[200],
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        fontSize: "10rem",
        color: theme.palette.primary.main
    }
}));

const ThankYou: React.FunctionComponent = () => {
    const classes = useStyles({});
    return (
        <section className={classes.section}>
            <Grid
                direction="column"
                alignItems="center"
                justify="center"
                container
                item
            >
                {/* <img src="/p.jpeg"></img> */}
                <Typography align="center" variant="h4" component="h1">
                    Contest will go live on 09.02.2020 at 06:00 PM
                </Typography>
            </Grid>
        </section>
    );
};

export default ThankYou;
