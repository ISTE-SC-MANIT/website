import React from "react";
import {
    createMuiTheme,
    ThemeProvider,
    makeStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

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
    main: {
        margin: "10px"
    },
    main1: {
        margin: "90px"
    },
    section: {
        paddingTop: "80px",
        paddingBottom: "100px"
    }
}));

export default function FontSizeTheme() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.head}>
                <br></br>
                <br></br>
                <Typography variant="h2">ABOUT US</Typography>
            </div>

            <br></br>
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} lg={4} className={classes.main}>
                        <Typography
                            variant="h1"
                            style={{
                                color: "#0a183d",
                                textAlign: "center",
                                marginTop: "90px"
                            }}
                        >
                            To Travel is to <br></br>live
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} className={classes.main1}>
                        <Typography variant="h6" gutterBottom>
                            Chimera-X is the flagship event of ISTE Students'
                            Chapter MANIT organised as a part of our annual
                            students' conclave Chimera. Chimera-X was first
                            organised in 2003. It has been a sensation since its
                            genesis, reaching thousands of individuals and
                            making a hardcore and resonating impact in the minds
                            of those who witnessed it. Chimera-X, undisputedly
                            the largest quizzing competition in Central India
                            stands at the heart of Chimera and this bluchip
                            event of ours is not just events clubbed together
                            but it is respresentative of the hard work of the
                            team over the years which has resulted in its
                            immense success. Last year Chimera-x was conducted
                            across 16+ cities and this year we aim to reach
                            more. This event while providing the students a
                            getaway from the monotony of classroom lectures also
                            poses a challenge to their knowledge and wit.
                            Chimera-X is a general quiz consisting of city
                            prelims in all the cities and grand finale held at
                            MANIT Bhopal.
                            <br></br>
                            <br></br>
                            <Button variant="contained" color="secondary">
                                Chimera 2K19
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
