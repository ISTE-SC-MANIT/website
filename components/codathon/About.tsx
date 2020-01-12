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
            height: "360px"
        },
        [theme.breakpoints.down("sm")]: {
            root: {
                paddingTop: "200px"
            }
        }
    })
);

export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6} lg={4}>
                    <Paper className={classes.paper1}>
                        <img
                            src="/static/codathon.jpg"
                            className={classes.image}
                        ></img>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={8}>
                    <Paper className={classes.paper}>
                        <div className="about_head">
                            <Typography variant="h2">About Codathon</Typography>
                        </div>
                        <Typography variant="subtitle1">
                            <p>
                                Codathon is an Inter NIT coding contest
                                conducted by the Indian Society for Technical
                                Education Students Chapter MANIT under CHIMERA
                                our annual students conclave. The contest that
                                follows the most intriguing design of 7 days and
                                7 questions is the perfect place to test, learn
                                and improve your coding skills. Codathon is
                                carefully designed in a way so it proves as a
                                learning platform irrespective of your coding
                                background. Newcomers can start, Intermediates
                                can improve and professionals have a chance to
                                compete with the best in the country. Other than
                                the exposure, Codathon provides certificates and
                                cash prizes to the top coders among the NITs and
                                adds a great deal to your resume to make it
                                shine amongst the rest. All these specialities
                                add up making CODATHON an extraordinary coding
                                event setting it apart from the mainstream
                                coding contests.
                            </p>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
