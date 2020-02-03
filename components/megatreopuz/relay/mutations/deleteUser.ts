import { Environment } from "relay-runtime";
import { graphql, commitMutation } from "react-relay";

const mutation = graphql`
    mutation deleteUserMutation {
        deleteUser {
            id
        }
    }
`;

interface Callbacks {
    onError(err: Error): void;
    onCompleted(...args: any): void;
}

export const commit = (
    environment: Environment,
    { onError, onCompleted }: Callbacks
) =>
    commitMutation(environment, {
        mutation,
        variables: {},
        onError,
        onCompleted
    });
