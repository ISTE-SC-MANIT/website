import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        paper: {
            padding: theme.spacing(10),
            textAlign: "center",
            color: theme.palette.text.secondary
        },
        paper1: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary
        },
        image: {
            width: "90%",
            height: "460px"
        },
        [theme.breakpoints.down("sm")]: {
            root: {
                paddingTop: "200px"
            }
        }
    })
);

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6} lg={4}>
                    <Paper className={classes.paper1}>
                        <img
                            src="/static/aboutus.jpg"
                            className={classes.image}
                        ></img>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={8}>
                    <Paper className={classes.paper}>
                        <div className="about_head">
                            <Typography variant="h1">Who are we?</Typography>
                        </div>
                        <Typography variant="subtitle1">
                            <p>
                                The Indian Society for Technical Education
                                (ISTE) is the leading national professional
                                non-profit making society for the technical
                                education system in our country. ISTE Students’
                                Chapter MANIT is one of the oldest and most
                                prestigious student organization of MANIT
                                Bhopal. ISTE MANIT aims to bring respite to the
                                students from the monologue classroom lectures,
                                thereby providing a platform to facilitate
                                healthy discussions and information exchange on
                                technical education. The blue chip event
                                Chimera, established in 2003, has been a success
                                ever since its inception. Chimera has major
                                events in its closet like Anubhuti, Chimera X,
                                Codathon, Megatreopuz, and Pro-shows.
                            </p>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
