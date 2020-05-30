import { NextPage } from "next";
import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import TextField from "../../components/megatreopuz/customTextField";
import {
    Button,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    makeStyles,
    Divider,
    Theme
} from "@material-ui/core";

import { useRouter } from "next/router";
import cookie from "js-cookie";
import { PageProps } from "../_app";
import { backend } from "../../components/megatreopuz/backend";

const initialValues = {
    username: "",
    college: "",
    year: "",
    phone: "",
    country: ""
};

const schema = yup.object({
    username: yup.string().required("Required"),
    college: yup.string().required("Required"),
    year: yup
        .number()
        .min(1, "Minimum value: 1")
        .required("Required"),
    // TODO: better validation for phone
    phone: yup.string().required("Required"),
    country: yup.string().required("Required")
});

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        maxWidth: 905,
        padding: theme.spacing(1),
        margin: "auto",
        //backgroundColor: "#EAF0F1",
        color: "#0A79DF"
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
    leftside: {
        color: "#FFFFFF",
        textAlign: "center",
        width: "40%"
    },
    image: {
        maxWidth: 445,
        height: 557,
        padding: theme.spacing(1),
        margin: "auto"
    },
    [theme.breakpoints.down("sm")]: {
        image1: {
            display: "none"
        }
    }
}));

const CreateUser: NextPage<PageProps> = ({
    showError,
    loading,
    setLoading
}) => {
    const router = useRouter();
    const classes = useStyles();

    useEffect(() => {
        const token = cookie.get("access_token");
        const expiresAt = parseInt(cookie.get("expires_at") || "0");
        if (!token || !expiresAt || Date.now() > expiresAt) {
            showError(new Error("Please sign in using google"));
            router.push("/megatreopuz/signIn");
        }
    }, [router, showError]);

    return (
        <section className={classes.container}>
            <Card className={classes.card}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs className={classes.image1}>
                        <div className="leftside">
                            <img
                                src="/poster2.png"
                                className={classes.image}
                            ></img>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <Container maxWidth="md">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={schema}
                                onSubmit={(
                                    { year, college, country, phone, username },
                                    { setSubmitting }
                                ) => {
                                    setLoading(true);
                                    const token = cookie.get("access_token");
                                    if (!token) {
                                        showError(
                                            new Error(
                                                "Invalid token. Please sign in using google"
                                            )
                                        );
                                        setLoading(false);
                                        return;
                                    }
                                    fetch(`${backend}/signUp`, {
                                        method: "POST",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            token,
                                            year,
                                            college,
                                            country,
                                            phone,
                                            username
                                        })
                                    })
                                        .then(response => {
                                            setSubmitting(false);

                                            if (response.status === 201) {
                                                setLoading(false);
                                                router.replace(
                                                    "/megatreopuz/dashboard"
                                                );
                                            } else {
                                                setLoading(false);
                                                console.error(
                                                    response.statusText
                                                );
                                            }
                                        })
                                        .catch((err: Error) => {
                                            setLoading(false);
                                            console.error(err.message);
                                        });
                                }}
                            >
                                {({ submitForm }) => (
                                    <>
                                        <Typography
                                            align="center"
                                            variant="h3"
                                            component="h1"
                                            gutterBottom
                                        >
                                            Sign Up
                                        </Typography>
                                        <CardContent>
                                            <Divider />
                                        </CardContent>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    name="username"
                                                    label="Username"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    name="college"
                                                    label="College"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    type="number"
                                                    name="year"
                                                    label="Year"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    name="country"
                                                    label="Country"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    name="phone"
                                                    label="Phone"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                container
                                                alignItems="center"
                                                justify="center"
                                            >
                                                <Button
                                                    disabled={loading}
                                                    onClick={() => submitForm()}
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </>
                                )}
                            </Formik>
                        </Container>
                    </Grid>
                </Grid>
            </Card>
        </section>
    );
};

export default CreateUser;
