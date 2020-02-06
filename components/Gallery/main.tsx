import React, { useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            "& > *": {
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: theme.spacing(8),
                width: theme.spacing(80),
                height: theme.spacing(16),
                backgroundImage: `url(${"/gallery/breadcrumb.png"})`
            }
        },
        typographt1: {
            marginLeft: "auto",
            marginRight: "auto",
            width: "max-content",
            color: "white",
            marginTop: "30px"
        }
    })
);

export default function Gallery() {
    const classes = useStyles();
    const [Comp, setComp] = useState<React.ReactNode>(null);

    return (
        <div>
            <div className={classes.root}>
                <Paper elevation={3}>
                    <Typography
                        variant="h3"
                        component="h6"
                        className={classes.typographt1}
                        onClick={() => {
                            const C = React.lazy(() =>
                                import("./versionbeta1")
                            );
                            setComp(
                                <React.Suspense fallback={<h1>Loading</h1>}>
                                    <C />
                                </React.Suspense>
                            );
                        }}
                    >
                        Verion Beta glimpse
                    </Typography>
                </Paper>
                {/* {React.createElement({ vb })} */}
                {/* <vb /> */}
                {Comp}
                <Paper elevation={3}>
                    <Typography
                        variant="h3"
                        component="h6"
                        className={classes.typographt1}
                    >
                        Chimera-X glimpse
                    </Typography>
                </Paper>
                <Paper elevation={3}>
                    <Typography
                        variant="h3"
                        component="h6"
                        className={classes.typographt1}
                    >
                        Codathon glimpse{" "}
                    </Typography>
                </Paper>
                <Paper elevation={3}>
                    <Typography
                        variant="h3"
                        component="h6"
                        className={classes.typographt1}
                    >
                        Anubhuti glimpse
                    </Typography>
                </Paper>
                <Paper elevation={3}>
                    <Typography
                        variant="h3"
                        component="h6"
                        className={classes.typographt1}
                    >
                        Joyride glimpse
                    </Typography>
                </Paper>
                <Paper elevation={3}>
                    <Typography
                        variant="h3"
                        component="h6"
                        className={classes.typographt1}
                    >
                        Pronite glimpse
                    </Typography>
                </Paper>
            </div>
        </div>
    );
}
