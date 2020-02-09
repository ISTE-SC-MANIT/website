import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import {
    AppBar,
    Toolbar,
    Grid,
    IconButton,
    Avatar,
    Typography,
    Theme,
    Drawer,
    ListItem,
    ListItemText,
    List,
    ListItemIcon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { AppViewerQueryResponse } from "./relay/__generated__/AppViewerQuery.graphql";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { useRouter } from "next/router";
import FaceIcon from "@material-ui/icons/Face";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import HelpIcon from "@material-ui/icons/Help";
const useStyles = makeStyles((theme: Theme) => ({
    avatar: {
        background: theme.palette.secondary.main
    },
    rankButton: {
        color: theme.palette.common.white
    },
    list: {
        width: "20vw",
        [theme.breakpoints.down("sm")]: {
            width: "30vw"
        },
        [theme.breakpoints.down("xs")]: {
            width: "70vw"
        }
    }
}));

interface Props {
    viewer: AppViewerQueryResponse["viewer"];
    logout: () => void;
}

const Config = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        path: "/megatreopuz/dashboard"
    },
    {
        title: "User Info",
        icon: <FaceIcon />,
        path: "/megatreopuz/dashboard/userInfo"
    },
    {
        title: "Contest",
        icon: <SportsEsportsIcon />,
        path: "/megatreopuz/dashboard/contest"
    },
    {
        title: "Leaderboard",
        icon: <AssignmentIndIcon />,
        path: "/megatreopuz/dashboard/leaderboard"
    },
    {
        title: "Help",
        icon: <HelpIcon />,
        path: "/megatreopuz/dashboard/help"
    }
];

const Menu: React.FunctionComponent<Props> = ({ viewer, logout }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);
    const router = useRouter();
    return (
        <>
            <AppBar position="sticky">
                <Toolbar color="primary">
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <IconButton
                                onClick={() => setOpen(true)}
                                color="inherit"
                                aria-label="Menu"
                            >
                                <MenuIcon></MenuIcon>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Avatar
                                        title={viewer.userName}
                                        className={classes.avatar}
                                    >
                                        {viewer.userName[0].toUpperCase()}
                                    </Avatar>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        {viewer.userName}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List className={classes.list}>
                    {Config.map(({ title, icon, path }) => {
                        return (
                            <ListItem
                                onClick={() => {
                                    router.push(path);
                                    setOpen(false);
                                }}
                                selected={path === router.route}
                                button
                                key={title}
                            >
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={title}></ListItemText>
                            </ListItem>
                        );
                    })}
                    <ListItem button onClick={logout}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log Out"></ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};
export default Menu;
