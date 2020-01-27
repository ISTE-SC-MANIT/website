import { NextPage } from "next";
import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextField from "../../components/megatreopuz/customTextField";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
interface Props {
    loading: boolean;
    setLoading: (b: boolean) => void;
}

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

const CreateUser: NextPage<Props> = ({ setLoading }) => {
    const router = useRouter();

    return (
        <Container maxWidth="md">
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(
                    { year, college, country, phone, username },
                    { setSubmitting }
                ) => {
                    setLoading(true);
                    const cookies = document.cookie.split("access_token=");
                    if (cookies.length !== 2) {
                        setLoading(false);
                        setSubmitting(false);
                        console.error("Invalid Cookie");
                        return;
                    }

                    const token = cookies[1].split(";")[0];
                    fetch(`${process.env.MEGATREOPUZ_SERVER}/signUp`, {
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
                        .then(() => {
                            setLoading(false);
                            setSubmitting(false);
                            router.replace("/megatreopuz/dashboard");
                        })
                        .catch(console.error);
                }}
            >
                <Form>
                    <Typography
                        align="center"
                        variant="h3"
                        component="h1"
                        gutterBottom
                    >
                        Sign Up
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="username"
                                label="username"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="college"
                                label="college"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="number"
                                name="year"
                                label="year"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="country"
                                label="country"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="phone"
                                label="phone"
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
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Container>
    );
};

export default CreateUser;
