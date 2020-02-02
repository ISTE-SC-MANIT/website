import { NextPage } from "next";
import React from "react";
import { AppViewerQueryResponse } from "../../../components/megatreopuz/relay/__generated__/AppViewerQuery.graphql";
import {
    NoSsr,
    Container,
    Grid,
    Paper,
    makeStyles,
    Theme,
    Typography,
    Box,
    FormControlLabel,
    Switch,
    Button,
    Fade
} from "@material-ui/core";
import Menu from "../../../components/megatreopuz/menu";
import { Formik } from "formik";
import * as yup from "yup";
import TextField from "../../../components/megatreopuz/customTextField";
import { commit } from "../../../components/megatreopuz/relay/mutations/updateUser";
import { Environment } from "react-relay";
import environment from "../../../components/megatreopuz/relay/environment";
interface Props {
    loading: boolean;
    setLoading: (b: boolean) => void;
    viewer: AppViewerQueryResponse["viewer"];
    environment: Environment;
}

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        fontSize: "4rem"
    },
    paper: {
        padding: theme.spacing(2),
        minHeight: 150,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    formButton: { margin: theme.spacing(2) },
    container: {
        paddingTop: "1rem",
        paddingBottom: "3rem"
    },
    divider: {}
}));

const schema = yup.object({
    college: yup.string().required("Required"),
    year: yup
        .number()
        .min(1, "Minimum value: 1")
        .required("Required"),
    // TODO: better validation for phone
    phone: yup.string().required("Required"),
    country: yup.string().required("Required")
});

const getInitialValues = (viewer: AppViewerQueryResponse["viewer"]) => {
    return {
        phone: viewer.phone,
        college: viewer.college,
        country: viewer.country,
        year: viewer.year
    };
};

const Dashboard: NextPage<Props> = ({ viewer, environment, setLoading }) => {
    if (!viewer) return null;
    const classes = useStyles();
    const [edit, setEdit] = React.useState<boolean>(false);
    const initialValues = React.useMemo(() => getInitialValues(viewer), [
        viewer
    ]);

    console.log(viewer);
    return (
        <NoSsr>
            <Menu viewer={viewer} active={"User Info"} />
            <Box mt={2}>
                <Grid item container alignItems="center" justify="center">
                    <FormControlLabel
                        control={
                            <Switch
                                color="primary"
                                size="medium"
                                checked={edit}
                                onChange={() => setEdit(e => !e)}
                                value="checkedA"
                            />
                        }
                        label="Edit"
                        labelPlacement="bottom"
                    />
                </Grid>
            </Box>
            <Formik
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    setLoading(true);
                    commit(
                        environment,
                        {
                            college: values.college,
                            phone: values.phone,
                            year: values.year.toString(),
                            country: values.country
                        },
                        viewer.id,
                        {
                            onError: err => {
                                console.error(err.message);
                                setLoading(false);
                                setSubmitting(false);
                            },
                            onCompleted: () => {
                                setLoading(false);
                                setSubmitting(false);
                            }
                        }
                    );
                }}
                enableReinitialize
                initialValues={initialValues}
            >
                {({ handleReset, submitForm }) => (
                    <Container maxWidth="md" className={classes.container}>
                        <Grid container spacing={3} justify="center">
                            <Grid item xs={10} sm={6} md={4}>
                                <Paper className={classes.paper}>
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        component="p"
                                    >
                                        {viewer.name}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="textSecondary"
                                    >
                                        Name
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={10} sm={6} md={4}>
                                <Paper className={classes.paper}>
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        component="p"
                                    >
                                        {viewer.userName}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="textSecondary"
                                    >
                                        Username
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={10} sm={6} md={4}>
                                <Paper className={classes.paper}>
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        component="p"
                                    >
                                        {viewer.email}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="textSecondary"
                                    >
                                        Email
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={10} sm={6} md={4}>
                                <Paper className={classes.paper}>
                                    {edit ? (
                                        <TextField
                                            fullWidth
                                            name="phone"
                                            label="phone"
                                            variant="outlined"
                                        />
                                    ) : (
                                        <Typography
                                            variant="subtitle1"
                                            gutterBottom
                                            component="p"
                                        >
                                            {viewer.phone}
                                        </Typography>
                                    )}
                                    <Typography
                                        variant="caption"
                                        color="textSecondary"
                                    >
                                        Phone
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={10} sm={6} md={4}>
                                <Paper className={classes.paper}>
                                    {edit ? (
                                        <TextField
                                            fullWidth
                                            name="college"
                                            label="College"
                                            variant="outlined"
                                        />
                                    ) : (
                                        <Typography
                                            variant="subtitle1"
                                            gutterBottom
                                            component="p"
                                        >
                                            {viewer.college}
                                        </Typography>
                                    )}
                                    <Typography
                                        variant="caption"
                                        color="textSecondary"
                                    >
                                        College
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={10} sm={6} md={4}>
                                <Paper className={classes.paper}>
                                    {edit ? (
                                        <TextField
                                            fullWidth
                                            name="year"
                                            label="Year"
                                            type="number"
                                            variant="outlined"
                                        />
                                    ) : (
                                        <Typography
                                            variant="subtitle1"
                                            gutterBottom
                                            component="p"
                                        >
                                            {viewer.year}
                                        </Typography>
                                    )}
                                    <Typography
                                        variant="caption"
                                        color="textSecondary"
                                    >
                                        Year
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={10} sm={6} md={4}>
                                <Paper className={classes.paper}>
                                    {edit ? (
                                        <TextField
                                            fullWidth
                                            name="country"
                                            label="Country"
                                            variant="outlined"
                                        />
                                    ) : (
                                        <Typography
                                            variant="subtitle1"
                                            gutterBottom
                                            component="p"
                                        >
                                            {viewer.country}
                                        </Typography>
                                    )}
                                    <Typography
                                        variant="caption"
                                        color="textSecondary"
                                    >
                                        Country
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Fade in={edit}>
                            <Box mt={4}>
                                <Grid
                                    item
                                    container
                                    alignItems="center"
                                    justify="center"
                                >
                                    <Button
                                        onClick={() => submitForm()}
                                        className={classes.formButton}
                                        variant="contained"
                                        color="primary"
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        className={classes.formButton}
                                        variant="outlined"
                                        color="primary"
                                        onClick={handleReset}
                                    >
                                        Reset
                                    </Button>
                                </Grid>
                            </Box>
                        </Fade>
                    </Container>
                )}
            </Formik>
        </NoSsr>
    );
};

export default Dashboard;
