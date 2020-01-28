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
            marginTop: "-60px",
            color: theme.palette.text.secondary
        },
        paper1: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary
        },
        image: {
            width: "90%",
            height: "300px"
        },
        abouthead: {
            margin: "auto",
            width: "400px",
            color: "white",
            backgroundColor: "orange",
            alignSelf: "center",
            position: "relative",
            left: "240px",
            marginTop: "40px"
        },
        aboutcon: {
            position: "relative"
        },

        [theme.breakpoints.down("sm")]: {
            root: {
                paddingTop: "200px"
            },
            abouthead: {
                marginTop: "-180px",
                left: "0px"
            },
            paper: {
                height: "700px",
                textAlign: "center",
                letterSpacing: "4px"
            },
            aboutcon: {
                left: "100px",
                margin: "auto"
            }
        },
        [theme.breakpoints.down("md")]: {
            root: {
                paddingTop: "200px"
            },
            abouthead: {
                marginTop: "-180px",
                left: "0px"
            },
            paper: {
                height: "700px",
                textAlign: "left",
                letterSpacing: "4px"
            },
            aboutcon: {
                height: "9px",
                fontSize: "15px",
                textAlign: "center",
                width: "300px",
                left: "-70px"
            }
        }
    })
);

export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.abouthead}>
                <Typography
                    variant="h3"
                    style={{ padding: "4px", marginLeft: "26px" }}
                >
                    About Codathon
                </Typography>
            </div>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6} lg={4}>
                    <div className={classes.paper1}>
                        <img
                            src="/static/codathon.jpg"
                            className={classes.image}
                        ></img>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={8}>
                    <div className={classes.paper}>
                        <Typography
                            variant="subtitle1"
                            style={{ lineHeight: "27px" }}
                            className={classes.aboutcon}
                        >
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
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
