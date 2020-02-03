import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
    ListItemIcon,
    Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { AppViewerQueryResponse } from "./relay/__generated__/AppViewerQuery.graphql";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { useRouter } from "next/router";
import FaceIcon from "@material-ui/icons/Face";
import { GoogleLogout } from "react-google-login";
import { removeCookies } from "./util";
const useStyles = makeStyles((theme: Theme) => ({
    avatar: {
        background: theme.palette.secondary.main
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
    active: string;
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
    }
];
const Menu: React.FunctionComponent<Props> = ({ viewer, active }) => {
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
                                onClick={() => router.push(path)}
                                selected={active === title}
                                button
                                key={title}
                            >
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={title}></ListItemText>
                            </ListItem>
                        );
                    })}
                    <GoogleLogout
                        clientId={process.env.CLIENT_ID || ""}
                        render={props => (
                            <ListItem button {...props}>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Log Out"></ListItemText>
                            </ListItem>
                        )}
                        onLogoutSuccess={() => {
                            removeCookies();
                            router.push("/megatreopuz/signIn");
                        }}
                    />
                </List>
            </Drawer>
        </>
    );
};
export default Menu;
