import { commitMutation, graphql } from "react-relay";
import { Environment, RecordSourceSelectorProxy } from "relay-runtime";
import { updateStateMutationResponse } from "../__generated__/updateStateMutation.graphql";

interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: updateStateMutationResponse): void;
}

const mutation = graphql`
    mutation updateStateMutation($input: Boolean!) {
        updateState(state: $input) {
            active
        }
    }
`;

export const commitState = (
    environment: Environment,

    updateStateInput: Boolean,

    { onCompleted, onError }: Callbacks
) => {
    return commitMutation(environment, {
        mutation,
        variables: {
            input: updateStateInput
        },
        onCompleted: (response, error) => {
            if (error) return;
            onCompleted(response as updateStateMutationResponse);
        },
        onError
    });
};

export default mutation;
