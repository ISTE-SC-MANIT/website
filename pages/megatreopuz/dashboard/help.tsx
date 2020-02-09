import React from "react";
import { Theme, Box, Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DoneIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: theme.palette.grey[200],
        display: "flex",
        alignItems: "center"
        //justifyContent: "center"
    },
    icon: {
        fontSize: "10rem",
        color: theme.palette.primary.main
    }
}));

const ThankYou: React.FunctionComponent = () => {
    const classes = useStyles({});
    return (
        <section className={classes.section}>
            <Grid
                direction="column"
                // alignItems="center"
                //justify="center"
                container
                item
            >
                {/* <img src="/p.jpeg"></img> */}
                <Typography align="center" variant="h4">
                    Here are the rules and guidelines for Megatreopuz '20:
                </Typography>
                <Typography align="center" variant="body1">
                    <br></br> • Megatreopuz '20 will be live from 9th February
                    2020 to 15th February 2020. <br></br>• In Megatreopuz '20 a
                    participant will receive successive questions. He/she will
                    keep receiving questions until the cryptic hunt ends.
                    <br></br> • If a person is able to solve the most number of
                    questions in the least amount of time, he/she will be
                    declared as the winner.<br></br> • The competition is open
                    to everyone, there are no restrictions whatsoever. <br></br>
                    • All participants are to answer according to the following
                    instructions:<br></br> 1. His/Her answers can be case
                    insensitive. <br></br>2. He/She should not leave any space
                    between the words of the answer.<br></br> 3. He/She should
                    not use special symbols and numbers while answering the
                    questions.<br></br> • In any case, the decision of ISTE SC
                    MANIT will be final.<br></br> •ISTE SC MANIT holds the right
                    to disqualify any contestant if he/she indulges in any
                    unfair practice.<br></br> • To claim prizes, the winner
                    needs to have an Indian Bank Account.
                </Typography>
                <Typography variant="h6">
                    <Link href="https://www.facebook.com/megatreopuz/">
                        For Hints Refer https://www.facebook.com/megatreopuz/
                    </Link>
                </Typography>
            </Grid>
        </section>
    );
};

export default ThankYou;
