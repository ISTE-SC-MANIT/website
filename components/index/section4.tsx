import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

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
        background: "#00b0ff"
    },
    card: {
        marginLeft: "50px",
        height: "450px"
    },
    img: {
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    child: {
        textAlign: "center",
        margin: "50px",
        color: "#ffffff"
    },
    inline: {
        display: "inline"
    },
    list: {
        width: "200px",
        margin: "auto"
    }
}));

export default function FontSizeTheme() {
    const classes = useStyles();
    return (
        <div className={classes.section} id="Contact">
            <div className={classes.head}>
                <br></br>
                <br></br>
                <Typography
                    variant="h3"
                    style={{
                        color: "white",
                        textAlign: "center",
                        marginTop: "90px"
                    }}
                >
                    Contact Us
                </Typography>
            </div>

            <div>
                <Grid container>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={classes.child}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                About ISTE SC MANIT
                            </Typography>
                            <Typography variant="subtitle2" component="p">
                                The Indian Society for Technical Education
                                (ISTE) is the leading national professional
                                non-profit making society for the technical
                                education system in our country. ISTE Students’
                                Chapter MANIT is one of the oldest and most
                                prestigious student organization of MANIT
                                Bhopal.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={classes.child}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Quick Links
                            </Typography>
                            <Typography variant="body1" component="p">
                                Home<br></br>About<br></br>Why<br></br>FAQ
                                <br></br>ISTE SC MANIT<br></br>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={classes.child}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Contact Details
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="body1"
                                component="h5"
                            >
                                Call us at:
                            </Typography>
                            <Typography variant="body2" component="p">
                                <List dense className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Kanishk" src="" />
                                        </ListItemAvatar>

                                        <ListItemText primary="Kanishk: 8982533454" />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="Tarun" src="" />
                                        </ListItemAvatar>

                                        <ListItemText primary="Tarun: 8982533454" />
                                    </ListItem>
                                </List>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className={classes.child}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Social Media Links
                            </Typography>
                            <Typography variant="subtitle1" component="p">
                                <List dense className={classes.list}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="/index/ins.png"
                                            />
                                        </ListItemAvatar>

                                        <ListItemText primary="Instagram" />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="/index/linkedin.png"
                                            />
                                        </ListItemAvatar>

                                        <ListItemText primary="Linkdin" />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="/index/youtube.png"
                                            />
                                        </ListItemAvatar>

                                        <ListItemText primary="Youtube" />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="/index/fb.png"
                                            />
                                        </ListItemAvatar>

                                        <ListItemText primary="Facebook" />
                                    </ListItem>
                                </List>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
{
    /* <List>
                                    <ListItem >
                                        <ListItemIcon>
                                        </FacebookIcon>
                                        </ListItemIcon>
                                        <ListItemText primary="Facebook" />
                                    </ListItem>
                                </List> */
}
