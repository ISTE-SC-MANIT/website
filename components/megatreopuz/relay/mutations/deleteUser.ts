import { Environment } from "relay-runtime";
import { graphql, commitMutation } from "react-relay";
import { deleteUserMutationResponse } from "../__generated__/deleteUserMutation.graphql";

const mutation = graphql`
    mutation deleteUserMutation {
        deleteUser {
            id
        }
    }
`;

interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: deleteUserMutationResponse): void;
}

export const commit = (
    environment: Environment,
    { onError, onCompleted }: Callbacks
) =>
    commitMutation(environment, {
        mutation,
        variables: {},
        onError,
        onCompleted: (response, error) => {
            if (error) return;
            onCompleted(response as deleteUserMutationResponse);
        }
    });
