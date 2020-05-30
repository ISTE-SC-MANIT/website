import { commitMutation, graphql } from "react-relay";
import { Environment, RecordSourceSelectorProxy } from "relay-runtime";

import {
    updateQuestionMutation,
    QuestionInput,
    updateQuestionMutationResponse
} from "../__generated__/updateQuestionMutation.graphql";

const mutation = graphql`
    mutation updateQuestionMutation($input: QuestionInput!) {
        updateQuestion(question: $input) {
            questionNo
            description
            imgUrl
        }
    }
`;

interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: updateQuestionMutationResponse): void;
}

export const updateQuestionCommit = (
    environment: Environment,

    createQuestionInput: QuestionInput,

    { onCompleted, onError }: Callbacks
) => {
    return commitMutation(environment, {
        mutation,
        variables: {
            input: createQuestionInput
        },
        onCompleted: (response, error) => {
            if (error) return;
            onCompleted(response as updateQuestionMutationResponse);
        },
        onError
    });
};

export default mutation;
