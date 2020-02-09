import React from "react";
import { NextPage } from "next";
import { MegatreopuzPageProps } from "../../_app";
import {
    Container,
    List,
    ListItem,
    ListItemText,
    Typography,
    Theme,
    Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const items = [
    "The contest will end on 15th February 2020.",
    "In Megatreopuz '20, a participant will receive successive questions. He/she will keep receiving questions until the cryptic hunt ends.",
    "If a person is able to solve the most number of questions in the least amount of time, he/she will be declared as the winner.",
    "The competition is open to everyone, there are no restrictions whatsoever.",
    "In any case, the decision of ISTE SC MANIT will be final.",
    "ISTE SC MANIT holds the right to disqualify any contestant if he/she indulges in any unfair practice.",
    "To claim prizes, the winner needs to have an Indian Bank Account."
];

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        paddingTop: theme.spacing(4)
    },
    dot: {
        fontSize: "0.8rem"
    }
}));

const Help: NextPage<MegatreopuzPageProps> = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.container}>
            <Typography variant="h4">
                Here are the rules and guidelines for Megatreopuz '20:
            </Typography>
            <List>
                {items.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primaryTypographyProps={{ variant: "body1" }}
                            primary={item}
                        ></ListItemText>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemText
                        primaryTypographyProps={{ variant: "body1" }}
                        primary={
                            "All participants are to answer according to the following instructions"
                        }
                        secondary={
                            <Typography>
                                1. His/Her answers can be case insensitive.
                                <br />
                                2. He/She should not use special symbols and
                                numbers while answering the questions.
                            </Typography>
                        }
                    ></ListItemText>
                </ListItem>
            </List>
            <Typography variant="h6">
                <strong>
                    Head to our{" "}
                    <Link
                        target="_blank"
                        href="https://www.facebook.com/megatreopuz/"
                    >
                        Facebook page
                    </Link>{" "}
                    for hints and updates
                </strong>
            </Typography>
        </Container>
    );
};

export default Help;
