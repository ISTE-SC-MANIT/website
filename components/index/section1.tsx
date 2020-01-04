import React from "react";
import { Container, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10rem",

            [theme.breakpoints.down("sm")]: {
                padding: "8rem"
            }
        },
        root: {
            background: `linear-gradient(to right bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`
            // height: `100vh`,
            // "&::after": {
            //     content: "' '",
            //     display: "block",
            //     borderWidth: 100,
            //     borderStyle: "solid",
            //     borderBottomColor: "white",
            //     borderRightColor: "white",
            //     borderTop: "transparent",
            //     borderLeft: "transparent"
            // }
        },
        heading: {
            color: theme.palette.getContrastText(theme.palette.primary.main)
        }
    };
});

const Section1: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="md" className={classes.container}>
                <Typography
                    variant="h2"
                    component="h1"
                    className={classes.heading}
                >
                    ISTE SC MANIT
                </Typography>
            </Container>
        </div>
    );
};

export default Section1;
