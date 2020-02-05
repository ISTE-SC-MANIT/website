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
    Fade,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@material-ui/core";
import Menu from "../../../components/megatreopuz/menu";
import { Formik } from "formik";
import * as yup from "yup";
import TextField from "../../../components/megatreopuz/customTextField";
import { checkanswer } from "../../../components/megatreopuz/relay/mutations/answerQuestion";
import { commit as deleteUser } from "../../../components/megatreopuz/relay/mutations/deleteUser";
import { Environment } from "react-relay";
import DeleteIcon from "@material-ui/icons/Delete";
import clsx from "clsx";
import { removeCookies } from "../../../components/megatreopuz/util";
import { useRouter } from "next/router";
import { MegatreopuzPageProps } from "../../_app";
interface Props {
    loading: boolean;
    setLoading: (b: boolean) => void;
    viewer: AppViewerQueryResponse["viewer"];
    environment: Environment;
    showError: (e: Error) => void;
}

// const [error, setError] = React.useState<boolean>(false);
// const [errMsg, setErrMsg] = React.useState<React.ReactNode>("");

// const showError = (error: Error) => {
//     setError(true);
//     setErrMsg(error.message);
// };

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
        flexDirection: "column",
        width: "500px"
    },
    text: { marginTop: "30px" },
    paper1: {
        padding: theme.spacing(2),
        minHeight: 150,
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
        //width: "700px"
    },
    formButton: { margin: theme.spacing(2) },
    container: {
        paddingTop: "1rem",
        paddingBottom: "3rem"
        //width: "1000px"
    },
    divider: {
        margin: theme.spacing(3, 0)
    },
    paperButton: {
        cursor: "pointer",
        transition: "opacity 300ms",
        "&:hover": {
            opacity: 0.7
        }
    }
}));
const initialValues = {
    answer: " "
};

const schema = yup.object({
    answer: yup.string().required("Required")
});

// interface DialogProps {
//     open: boolean;
//     deleteUser: () => void;
//     onClose: () => void;
// }

// const DeleteDialog: React.FunctionComponent<DialogProps> = ({
//     open,
//     deleteUser,
//     onClose
// }) => {
//     return (
//         <Dialog
//             open={open}
//             onClose={onClose}
//             aria-labelledby="delete-dialog-title"
//             aria-describedby="delete-dialog-description"
//         >
//             <DialogTitle id="Delete-dialog-title">
//                 Delete Account Permanently?
//             </DialogTitle>
//             <DialogContent>
//                 <DialogContentText id="delete-dialog-description">
//                     This is a non reversible action. All your data and progress
//                     will be deleted. Proceed if that is what you want.
//                 </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//                 <Button
//                     onClick={() => {
//                         deleteUser();
//                         onClose();
//                     }}
//                     color="primary"
//                     variant="contained"
//                 >
//                     Delete
//                 </Button>
//                 <Button
//                     onClick={onClose}
//                     color="primary"
//                     variant="outlined"
//                     autoFocus
//                 >
//                     Cancel
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

const Dashboard: NextPage<MegatreopuzPageProps> = ({
    viewer,
    environment,
    setLoading,
    logout
}) => {
    if (!viewer) return null;
    const classes = useStyles();
    const [edit, setEdit] = React.useState<boolean>(false);

    const [deleteDialog, setDelete] = React.useState<boolean>(false);
    return (
        <NoSsr>
            <Box mt={2}>
                <Grid
                    item
                    container
                    alignItems="center"
                    justify="center"
                ></Grid>
            </Box>
            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={({ answer }, { setSubmitting }) => {
                    console.log(answer);
                    console.log("working");
                    setLoading(true);
                    environment &&
                        checkanswer(environment, answer, {
                            onCompleted: () => {
                                setLoading(false);
                                setSubmitting(false);
                                console.log("done");
                            },
                            onError: err => {
                                console.error(err.message);
                                console.log("failed");
                                setLoading(false);
                                setSubmitting(false);
                            }
                        });
                }}
                enableReinitialize
            >
                {({ submitForm }) => (
                    <Container maxWidth="md" className={classes.container}>
                        <Divider className={classes.divider} />
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={10} sm={6} md={4} lg={7}>
                                <Paper
                                    // onClick={() => setDelete(true)}
                                    className={clsx(
                                        classes.paper,
                                        classes.paperButton
                                    )}
                                >
                                    <img src="/logo.jpg"></img>
                                </Paper>
                            </Grid>

                            <TextField
                                fullWidth
                                name="answer"
                                label="Answer"
                                variant="outlined"
                                className={classes.text}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => submitForm()}
                            >
                                SUBMIT
                            </Button>
                        </Grid>
                    </Container>
                )}
            </Formik>
        </NoSsr>
    );
};

export default Dashboard;
