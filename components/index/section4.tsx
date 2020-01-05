import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(",")
        // Tell Material-UI what the font-size on the html element is.
    }
});
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    head: {
        textAlign: "center"
    },
    section: {
        background: "#00b0ff"
    },
    card: {
        marginLeft: "50px",
        height: "450px"
    },
    img: {
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    child: {
        textAlign: "center",
        margin: "50px",
        color: "#ffffff"
    }
}));

export default function FontSizeTheme() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <ThemeProvider theme={theme}>
                <div className={classes.head}>
                    <br></br>
                    <br></br>
                    <Typography
                        variant="h3"
                        style={{
                            color: "white",
                            textAlign: "center",
                            marginTop: "90px"
                        }}
                    >
                        Contact Us
                    </Typography>
                </div>
            </ThemeProvider>
            <div>
                <Grid container>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={classes.child}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                About ISTE SC MANIT
                            </Typography>
                            <Typography variant="body2" component="p">
                                The pivotal cog in Chimera-Xs considerable
                                growth is the team that curates such tantalizing
                                questions, which are hard for newbies to deny
                                outright as impossible and at the same time hard
                                for the experts to brush off as another freebie.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={classes.child}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Quick Links
                            </Typography>
                            <Typography variant="body2" component="p">
                                Home<br></br>About<br></br>Why<br></br>FAQ
                                <br></br>ISTE SC MANIT<br></br>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={classes.child}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Contact Details
                            </Typography>
                            <Typography variant="body2" component="p">
                                Call us:<br></br>Tarun Goyal:123456789<br></br>
                                ADDRESS:MANIT
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={classes.child}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Social Media Links
                            </Typography>
                            <Typography variant="body2" component="p">
                                <FacebookIcon></FacebookIcon> Facebook<br></br>
                                <LinkedInIcon></LinkedInIcon> Linkedn <br></br>
                                <InstagramIcon></InstagramIcon> Instagram{" "}
                                <br></br>
                                <YouTubeIcon></YouTubeIcon> Youtube <br></br>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
