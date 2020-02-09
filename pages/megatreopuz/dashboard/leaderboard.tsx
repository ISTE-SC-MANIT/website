import React from "react";
import {
    graphql,
    QueryRenderer,
    createPaginationContainer,
    RelayPaginationProp
} from "react-relay";
import { NextPage } from "next";
import { MegatreopuzPageProps } from "../../_app";
import LoadingScreen from "../../../components/loading";
import { leaderboard_data } from "../../../components/megatreopuz/relay/__generated__/leaderboard_data.graphql";
import { leaderboardQuery } from "../../../components/megatreopuz/relay/__generated__/leaderboardQuery.graphql";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Button,
    Grid,
    Box
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RefreshIcon from "@material-ui/icons/Refresh";
const query = graphql`
    query leaderboardQuery($first: Int!, $after: LeaderBoardCursorScalar) {
        ...leaderboard_data
    }
`;

interface Props {
    data: leaderboard_data;
    relay: RelayPaginationProp;
    setLoading: MegatreopuzPageProps["setLoading"];
    showError: MegatreopuzPageProps["showError"];
}

const LeaderboardTableComponent: React.FunctionComponent<Props> = ({
    data,
    relay,
    setLoading,
    showError
}) => {
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            <Typography variant="h6">Rank</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6">Username</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6">
                                Questions Answered
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.leaderBoard.edges.map(({ node }) => (
                        <TableRow key={node.id}>
                            <TableCell align="center">
                                {node.rank?.rank}
                            </TableCell>
                            <TableCell align="center">
                                {node.userName}
                            </TableCell>
                            <TableCell align="center">
                                {node.totalQuestionsAnswered}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Box p={4}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        container
                        alignItems="center"
                        justify="center"
                    >
                        <Button
                            onClick={() => {
                                setLoading(true);
                                relay.loadMore(
                                    0,
                                    err => {
                                        if (err) showError(err);
                                        setLoading(false);
                                    },
                                    { force: true }
                                );
                            }}
                            startIcon={<RefreshIcon />}
                            variant="contained"
                            color="primary"
                        >
                            Refresh List
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        container
                        alignItems="center"
                        justify="center"
                    >
                        <Button
                            onClick={() => {
                                setLoading(true);
                                relay.loadMore(
                                    5,
                                    err => {
                                        if (err) showError(err);
                                        setLoading(false);
                                    },
                                    { force: true }
                                );
                            }}
                            startIcon={<ExpandMoreIcon />}
                            variant="contained"
                            color="primary"
                        >
                            Load More
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

const LeaderboardTable = createPaginationContainer(
    LeaderboardTableComponent,
    {
        data: graphql`
            fragment leaderboard_data on Query {
                leaderBoard(first: $first, after: $after)
                    @connection(key: "Leaderboard_leaderBoard") {
                    edges {
                        node {
                            id
                            userName
                            rank {
                                rank
                            }
                            totalQuestionsAnswered
                        }
                        cursor
                    }
                    pageInfo {
                        startCursor
                        hasNextPage
                        hasPreviousPage
                        endCursor
                    }
                }
            }
        `
    },
    {
        direction: "forward",
        getVariables: (props, { count, cursor }, fragmentVars) => ({
            first: count,
            after: cursor
        }),
        query
    }
);

const Leaderboard: NextPage<MegatreopuzPageProps> = ({
    environment,
    showError,
    setLoading
}) => {
    if (!environment) return null;

    return (
        <QueryRenderer<leaderboardQuery>
            environment={environment}
            query={query}
            variables={{ first: 10, after: null }}
            render={({ error, props }) => {
                if (error) {
                    showError(error);
                    return null;
                }

                if (props) {
                    return (
                        <LeaderboardTable
                            showError={showError}
                            setLoading={setLoading}
                            data={props}
                        />
                    );
                }

                return <LoadingScreen loading={true} />;
            }}
        />
    );
};
export default Leaderboard;
