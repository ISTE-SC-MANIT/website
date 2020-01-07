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
        backgroundImage: `url(${"/index/event6.jpg"})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
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
        height: 250
    },
    [theme.breakpoints.down("sm")]: {
        media: {
            height: 200
        }
    }
}));

export default function FontSizeTheme() {
    const classes = useStyles();
    return (
        <div className={classes.section} id="Events">
            <ThemeProvider theme={theme}>
                <div className={classes.head}>
                    <br></br>
                    <Typography
                        variant="h3"
                        style={{
                            color: "Black",
                            textAlign: "center",
                            marginTop: "90px"
                        }}
                    >
                        Events
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
                                    image="/index/version.jpg"
                                    title="Version Beta"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Version Beta
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        October brings in charisma to our lives,
                                        be it the advent of winters or the
                                        festival of lights. This year October
                                        brings in another jewel to add to the
                                        festivities, Version β: Possibly India’s
                                        biggest hackathon in the near future.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View Website
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/static/chimerax.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Chimera-X
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        CHIMERA-X has put ISTE Students’ Chapter
                                        MANIT on the map. It is Central India’s
                                        largest quizzing event. A month long
                                        brainstorming yet rewarding journey,
                                        spanning 13 cities and including 5000+
                                        participants culminated to 13 finalists
                                        battling it out in the final here in
                                        MANIT.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    VIEW WEBSITE
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/index/codathon.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Codathon
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Codathon is a first ever Inter NIT
                                        Coding Contest hosted by any NIT. The
                                        last edition the week long coding
                                        contest started on 15 January 2018 and
                                        concluded on 22 January, 2018. Keeping
                                        up with our vision of a dedicated
                                        competition among all NITs, Codathon
                                        garnered registration of 3500+ students.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    VIEW WEBSITE
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/index/megatreopuz.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Megatreopuz
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Megatreopuz is an online cryptic hunt
                                        that has witnessed participation not
                                        only from India but from other countries
                                        as well. It contains a set of tricky
                                        questions unlocked over a span of 7
                                        days. Top three people with the keys to
                                        most questions are awarded cash prizes.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    VIEW WEBSITE
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/index/Anubhuti.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Anubhuti
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        To ignite the spark inside the students
                                        ISTE SC MANIT organizes a guest lecture
                                        series comprising of lectures from
                                        eminent and inspiring personalities. The
                                        lectures are not only technical, but
                                        cover a plethora of fields which are
                                        otherwise unexplored by students.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    VIEW WEBSITE
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/index/joyride.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        A Social Initiative
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        As a part of social initiaitive, we at
                                        ISTE SC MANIT strive to work for the the
                                        betterment of the society. Last year we
                                        took up the initiaitive to conduct
                                        joyride for the less fortunate children.
                                        Joyride was organized in collaboration
                                        wit NGO HOPE working towards welfare of
                                        under-privileged children, and was
                                        sponsored by NISSAN.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    VIEW WEBSITE
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/index/goonj.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        After Party Night
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        An event as big as Chimera definitely
                                        needs a pronite to cap the event off.
                                        With the inception of Goonj, a cultural
                                        night filled with amazing refreshing
                                        performances, we kick started a
                                        beautiful tradiiton which we long to
                                        carry forward. Organized last year in
                                        collaboration with Roobaroo, the
                                        cultural society of MANIT.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    VIEW WEBSITE
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
