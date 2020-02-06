import { NextPage } from "next";
import React, { useEffect } from "react";
import { AppViewerQueryResponse } from "../../../components/megatreopuz/relay/__generated__/AppViewerQuery.graphql";
import {
    NoSsr,
    Container,
    Grid,
    Paper,
    makeStyles,
    Theme,
    Typography,
    Divider
} from "@material-ui/core";
import Menu from "../../../components/megatreopuz/menu";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import HelpIcon from "@material-ui/icons/HelpOutline";
import GamepadIcon from "@material-ui/icons/GamepadOutlined";
import RankIcon from "@material-ui/icons/SupervisorAccount";
import clsx from "clsx";
import { useRouter } from "next/router";
import { PageProps } from "../../_app";
import cookie from "js-cookie";

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        fontSize: "4rem"
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    paperButton: {
        cursor: "pointer",
        transition: "opacity 300ms",
        "&:hover": {
            opacity: 0.7
        }
    },
    container: {
        paddingTop: "3rem",
        paddingBottom: "3rem"
    },
    divider: {}
}));

interface Props extends PageProps {
    viewer: AppViewerQueryResponse["viewer"];
}

const Dashboard: NextPage<Props> = ({ showError, viewer }) => {
    if (!viewer) return null;
    const classes = useStyles();
    const router = useRouter();
    return (
        <NoSsr>
            <Container maxWidth="md" className={classes.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={10} sm={6} md={4}>
                        <Paper
                            onClick={() =>
                                router.push("/megatreopuz/dashboard/userInfo")
                            }
                            className={clsx(classes.paper, classes.paperButton)}
                        >
                            <InfoIcon className={classes.icon} color="action" />
                            <Typography variant="body2" color="textSecondary">
                                User Information
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={10} sm={6} md={4}>
                        <Paper
                            onClick={() =>
                                router.push("/megatreopuz/dashboard/help")
                            }
                            className={clsx(classes.paper, classes.paperButton)}
                        >
                            <HelpIcon className={classes.icon} color="action" />
                            <Typography variant="body2" color="textSecondary">
                                Help
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={10} sm={6} md={4}>
                        <Paper
                            className={clsx(classes.paper, classes.paperButton)}
                            onClick={() => router.push("/megatreopuz/thanks")}
                        >
                            <GamepadIcon
                                className={classes.icon}
                                color="action"
                            />
                            <Typography variant="body2" color="textSecondary">
                                Contest
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={10} sm={6} md={4}>
                        <Paper
                            className={clsx(classes.paper, classes.paperButton)}
                            onClick={() => router.push("/megatreopuz/thanks1")}
                        >
                            <RankIcon className={classes.icon} color="action" />
                            <Typography variant="body2" color="textSecondary">
                                Leaderboard
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Divider className={classes.divider} />
            <Container maxWidth="md" className={classes.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={10} sm={6} md={4}>
                        <Paper className={classes.paper}>
                            <Typography
                                variant="h2"
                                component="p"
                                color="textSecondary"
                            >
                                {viewer.totalQuestionsAnswered}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Question Answered
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={10} sm={6} md={4}>
                        <Paper className={classes.paper}>
                            <Typography
                                variant="h2"
                                component="p"
                                color="textSecondary"
                            >
                                {viewer.rank || "Nil"}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Rank
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </NoSsr>
    );
};

export default Dashboard;
