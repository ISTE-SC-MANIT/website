import React from "react";
import { Container, Theme, Typography, Grid, Paper } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            backgroundImage: `url(${"/banner_bg.png"})`,
            marginLeft: "-300px",
            paddingBottom: "0px",
            marginTop: "-230px",
            height: "1020px"
        },
        heading: {
            color: "white",
            marginLeft: "550px",
            marginTop: "230px",
            textAlign: "center",
            position: "relative",
            top: "-90px"
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
        image4: {
            width: "100px",
            marginLeft: "-10px",
            position: "relative",
            top: "230px",
            left: "-120px"
        },
        imgcontainer: {
            marginTop: "300px",
            background: "transparent",
            border: "null",
            marginLeft: "50px"
        },
        grid1: {
            marginTop: "190px",
            textAlign: "center"
        },
        heading1: {
            color: "white",
            marginLeft: "550px",
            textAlign: "center",
            position: "relative",
            top: "-60px"
        },
        [theme.breakpoints.down("sm")]: {
            grid2: {
                display: "none"
            },
            root: {
                marginTop: "-50px",
                marginLeft: "-400px",
                height: "100vh"
            },
            heading: {
                marginLeft: "400px",
                padding: "10px",

                marginTop: "20px"
            },
            heading1: {
                marginLeft: "400px",
                padding: "5px"
            },

            image4: {
                marginLeft: "630px",
                top: "-120px"
            }
        }
    };
});

const Section1: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="Home">
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6} lg={8} className={classes.grid1}>
                    <div>
                        <img src="/logo1.png" className={classes.image4}></img>
                        <Typography
                            variant="h3"
                            component="h2"
                            className={classes.heading}
                        >
                            ISTE MANIT STUDENTS CHAPTER MANIT
                        </Typography>
                    </div>
                    <Typography
                        variant="subtitle1"
                        className={classes.heading1}
                    >
                        The Best student chapter in Madhya Pradesh and<br></br>
                        Chattisgarh Region from Last consecutive Three years.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.grid2}>
                    <div className={classes.imgcontainer}>
                        <div>
                            <img
                                src="/index/version.jpg"
                                className={classes.image1}
                            ></img>
                        </div>
                        <div>
                            <img
                                src="/index/chimerax.jpg"
                                className={classes.image2}
                            ></img>
                        </div>
                        <div>
                            <img
                                src="/index/codathon.jpg"
                                className={classes.image3}
                            ></img>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Section1;
