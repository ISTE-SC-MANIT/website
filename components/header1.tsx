import React from "react";
import clsx from "clsx";
import {
    makeStyles,
    useTheme,
    Theme,
    createStyles
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import Link from "next/link";
import { useRouter } from "next/router";
import GroupIcon from "@material-ui/icons/Group";
import ImageIcon from "@material-ui/icons/Image";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex"
        },
        appBar: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        hide: {
            display: "none"
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0
        },
        drawerPaper: {
            width: drawerWidth
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            marginLeft: -drawerWidth
        },
        contentShift: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: 0
        }
    })
);
let Icon1: React.ReactNode;
let Icon2: React.ReactNode;
let Icon3: React.ReactNode;
export default function PersistentDrawerLeft() {
    const { route } = useRouter();

    const first = route.split("/")[1];

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        switch (first) {
            case "":
                Icon1 = "Events";
                Icon2 = "Team";
                Icon3 = "Gallery";
                break;
            case "chimera": {
                Icon1 = "Prizes";
                Icon2 = "Why ?";
                Icon3 = "FAQs";
                break;
            }
        }
    }, [first]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>

                    <ListItem>
                        <Avatar alt="Remy Sharp" src="/logo.png" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Typography variant="h6">ISTE SC MANIT</Typography>
                    </ListItem>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link href="#Home">
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link href="#About">
                        <ListItem button>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItem>
                    </Link>
                    <Link href="#Events">
                        <ListItem button>
                            <ListItemIcon>
                                <EmojiEventsIcon />
                            </ListItemIcon>
                            <ListItemText primary={Icon1} />
                        </ListItem>
                    </Link>
                    <Link href="#Events">
                        <ListItem button>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary={Icon2} />
                        </ListItem>
                    </Link>
                    <Link href="#Events">
                        <ListItem button>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary={Icon3} />
                        </ListItem>
                    </Link>
                    <Link href="#Contact">
                        <ListItem button>
                            <ListItemIcon>
                                <PermContactCalendarIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact us" />
                        </ListItem>
                    </Link>
                </List>

                <Divider />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    );
}
