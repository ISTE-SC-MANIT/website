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
        background: "#0a183d"
    },
    card: {
        margin: "50px",
        height: "480px"
    },
    img: {
        // width:"40%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    media: {
        width: "65%",
        height: "220px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        marginBottom: "20px"
    }
}));

export default function FontSizeTheme() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <ThemeProvider theme={theme}>
                <div className={classes.head}>
                    <br></br>
                    <Typography
                        variant="h3"
                        style={{
                            color: "white",
                            textAlign: "center",
                            marginTop: "90px"
                        }}
                    >
                        Why should you participate in Chimera-X?
                    </Typography>
                </div>
            </ThemeProvider>
            <div>
                <Grid container>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/chimera/leader1.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Suitable
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        This is the reason why you should
                                        participate in Chimera-X because you
                                        never know, that chat with your friend
                                        that you shrugged off as buffoonery
                                        might be the key to some answer. You
                                        will never count yourself out if you are
                                        even moderately aware of your
                                        surroundings.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    view website
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/chimera/earth.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Suitable Heading
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        The questions time and again induce
                                        sighs of I knew this from the audience.
                                        To still maintain the standard of the
                                        contest has always been a challenge, one
                                        that the team takes very seriously.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View WEbsite
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/chimera/thought.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Suitable
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        The pivotal cog in Chimera-Xs
                                        considerable growth is the team that
                                        curates such tantalizing questions,
                                        which are hard for newbies to deny
                                        outright as impossible and at the same
                                        time hard for the experts to brush off
                                        as another freebie.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View WEbsite
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
