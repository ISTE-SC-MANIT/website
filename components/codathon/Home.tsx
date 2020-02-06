import React from "react";
import {
    Theme,
    Typography,
    Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",

            [theme.breakpoints.down("sm")]: {
                padding: "8rem"
            }
        },
        root: {
            backgroundImage: `url(${"/static/ab.jpg"})`,

            marginLeft: "-200px",
            height: "600px",
            paddingBottom: "30px"
            // marginTop: "-380px"
        },
        heading1: {
            color: "white",
            marginLeft: "250px"
        },
        heading2: {
            color: "white",
            marginLeft: "250px"
        },
        fp: {
            paddingTop: "35rem",
            paddingBottom: "15rem"
        },
        image1: {
            width: "400px",
            height: "300px",
            position: "relative"
        },
        image2: {
            width: "400px",
            height: "300px",
            position: "relative",
            top: "-200px",
            left: "50px"
        },
        image3: {
            width: "400px",
            height: "300px",
            position: "relative",
            top: "-400px",
            left: "100px"
        },
        imgcontainer: {
            marginTop: "50px",
            background: "transparent",
            border: "null",
            marginLeft: "50px"
        },
        grid1: {
            marginTop: "190px",
            textAlign: "center"
        },
        [theme.breakpoints.down("md")]: {
            grid2: {},
            root: {
                paddingBottom: "40vh",
                marginTop: "00px",
                marginLeft: "-200px"
            },
            image1: {
                height: "188px",

                top: "0px",
                left: "50px"
            },
            image2: {
                height: "188px",
                top: "-139px",
                left: "100px"
            },
            image3: {
                height: "258px",
                top: "-239px",
                left: "150px"
            },
            heading1: {
                marginLeft: "400px",
                padding: "10px",
                marginTop: "-10px",
                fontSize: "33px"
            },
            heading2: {
                marginLeft: "400px",
                padding: "20px",
                marginTop: "0px",
                fontSize: "16px"
            }
        },
        [theme.breakpoints.down("sm")]: {
            grid2: {
                display: "none"
            },

            root: {
                paddingBottom: "40vh",
                marginTop: "00px",
                marginLeft: "-400px"
            },
            heading1: {
                marginLeft: "400px",
                padding: "10px",
                marginTop: "-10px"
            },
            heading2: {
                marginLeft: "400px",
                padding: "10px",
                marginTop: "0px",
                fontSize: "15px",

                width: "550"
            }
        }
    };
});

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6} lg={8} className={classes.grid1}>
                    <Typography
                        variant="h3"
                        component="h2"
                        className={classes.heading1}
                        style={{
                            background: "orange",
                            top: "-30px",
                            position: "relative",
                            borderRadius: "98px"
                        }}
                    >
                        Codathon
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        className={classes.heading2}
                        style={{
                            background: "black",
                            top: "-30px",
                            position: "relative",
                            textAlign: "center",
                            padding: "16px",
                            borderRadius: "120px"
                        }}
                    >
                        Coding contest Codathon is an Inter NIT coding contest
                        conducted by the Indian Society for Technical Education
                        Students Chapter MANIT under CHIMERA, our annual
                        students conclave.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.grid2}>
                    <div className={classes.imgcontainer}>
                        <div>
                            <img
                                src="/static/version.jpg"
                                className={classes.image1}
                            ></img>
                        </div>
                        <div>
                            <img
                                src="/static/chimerax.jpg"
                                className={classes.image2}
                            ></img>
                        </div>
                        <div>
                            <img
                                src="/static/codathon.jpg"
                                className={classes.image3}
                            ></img>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
