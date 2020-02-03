import { NextPage } from "next";
import React, { useEffect } from "react";
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline
} from "react-google-login";
import { useRouter } from "next/router";
import CardMedia from "@material-ui/core/CardMedia";
import {
    Card,
    CardHeader,
    Avatar,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    CardContent,
    Divider,
    Grid,
    Box
} from "@material-ui/core";
import cookie from "js-cookie";
import { PageProps } from "../_app";

const checkUser = (
    googleUser: GoogleLoginResponseOffline | GoogleLoginResponse
): Promise<boolean> => {
    if ("code" in googleUser) return Promise.resolve(false);
    else {
        const {
            profileObj: { email }
        } = googleUser;
        const tokenCred = googleUser.getAuthResponse();
        console.log(tokenCred);

        return fetch(`${process.env.MEGATREOPUZ_SERVER}/authenticate`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        })
            .then(response => {
                if (response.status === 200) {
                    cookie.set("access_token", tokenCred.access_token, {
                        expires: new Date(tokenCred.expires_at)
                    });
                    cookie.set("expires_at", tokenCred.expires_at.toString(), {
                        expires: new Date(tokenCred.expires_at)
                    });
                    return response;
                } else
                    throw new Error(
                        `${response.status}: ${response.statusText}`
                    );
            })
            .then(response => response.json())
            .then(({ exists }) => {
                if (exists)
                    cookie.set("user_exists", Boolean(true).toString(), {
                        expires: new Date(tokenCred.expires_at)
                    });
                return exists as boolean;
            });
    }
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            width: 350,
            backgroundColor: "rgb(255,255,237)",
            color: "black"
        },
        media: {
            height: 0,
            backgroundColor: "lightblue",
            paddingTop: "56.25%" // 16:9
        },
        expand: {
            transform: "rotate(0deg)",
            transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest
            })
        },
        expandOpen: {
            transform: "rotate(180deg)",
            color: "lightblue"
        },
        signin: {
            position: "relative"
        },
        container: {
            position: "fixed",
            top: "0px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4405ff",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(273,683,328)'%3E%3Cstop offset='0' stop-color='%234405ff'/%3E%3Cstop offset='1' stop-color='%2314fdff'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='300' height='250' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.13'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
            backgroundAttachment: "fixed",
            backgroundSize: " cover"
        },
        avatar: {
            backgroundColor: theme.palette.secondary.main
        },
        [theme.breakpoints.down("sm")]: {
            card: {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "auto"
            }
        }
    })
);
const LoginPage: NextPage<PageProps> = ({
    loading,
    setLoading,
    pathLoading,
    showError
}) => {
    const router = useRouter();
    const classes = useStyles();

    return (
        <section className={classes.container}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar
                            className={classes.avatar}
                            title="Megatreopuz"
                        />
                    }
                    title="Sign in to Megatreopuz"
                />
                <Divider />
                <CardMedia
                    className={classes.media}
                    image="/chimera/1chimeraX_gwalior.jpg"
                    title="ChimeraX"
                />
                <CardContent className={classes.signin}>
                    <Grid container item alignItems="center" justify="center">
                        <GoogleLogin
                            disabled={loading || pathLoading}
                            clientId={`${process.env.CLIENT_ID}`}
                            onSuccess={async (
                                googleUser:
                                    | GoogleLoginResponseOffline
                                    | GoogleLoginResponse
                            ) => {
                                try {
                                    setLoading(true);
                                    const response = await checkUser(
                                        googleUser
                                    );
                                    setLoading(false);
                                    if (response) {
                                        router.replace("/megatreopuz/thanks");
                                    } else
                                        router.replace(
                                            "/megatreopuz/createUser"
                                        );
                                } catch (error) {
                                    showError(error);
                                    setLoading(false);
                                }
                            }}
                            onFailure={showError}
                        />
                    </Grid>
                    <Box pt={2} pb={1} pl={1} pr={1}>
                        <Typography variant="body2" component="p">
                            Megatreopuz is an online cryptic hunt that has
                            witnessed participation not only from India but from
                            other countries as well. It contains a set of tricky
                            questions unlocked over a span of 7 days. Top three
                            people with the keys to most questions are awarded
                            cash prizes.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </section>
    );
};

export default LoginPage;
