import React from "react";
import {
    makeStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

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
    },
    subhead: {
        width: "max-content",
        margin: "auto"
    }
}));

export default function FontSizeTheme() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
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

            <div>
                <Grid container>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/chimera/leader1.png"
                                    title="challenge"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        className={classes.subhead}
                                    >
                                        Challenge
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Get ready to wear those thinking caps of
                                        yours and show off your prowess to crack
                                        mind-boggling questions and puzzles.
                                        This would showcase your Out-of-the-box
                                        wit needed to slice through the event.
                                        It is said that challenges bring out the
                                        best in people and we promise you this
                                        one will surely live up to it.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions></CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/chimera/earth.png"
                                    title="platform"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        className={classes.subhead}
                                    >
                                        Interactive Platform
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Competitions like these act as a hub for
                                        gaining knowledge and seek opportunities
                                        that help excel beyond academics while
                                        also being a platform for social
                                        interaction. You may be no brainiacs but
                                        being a part of something this big would
                                        do a lot of good for you.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions></CardActions>
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
                                        className={classes.subhead}
                                    >
                                        Amazing Prizes
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        If nothing gets to you, then the prizes
                                        would surely do. Our event while being
                                        sponsored by a rally of sponsors is
                                        bundled with cash prizes and numerous
                                        perks enough to provide you with the
                                        needed propulsion.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions></CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
