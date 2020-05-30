import { graphql, Environment, commitMutation } from "react-relay";
import {
    deleteQuestionMutationResponse,
    QuestionNumberInput
} from "../__generated__/deleteQuestionMutation.graphql";

const mutation = graphql`
    mutation deleteQuestionMutation($input: QuestionNumberInput!) {
        deleteQuestion(input: $input) {
            questionNo
            description
            imgUrl
        }
    }
`;

interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: deleteQuestionMutationResponse): void;
}

export const DeleteCommit = (
    environment: Environment,
    deleteQuestionInput: QuestionNumberInput,
    { onError, onCompleted }: Callbacks
) =>
    commitMutation(environment, {
        mutation,
        variables: { input: deleteQuestionInput },
        onError,
        onCompleted: (response, error) => {
            if (error) return;
            onCompleted(response as deleteQuestionMutationResponse);
        }
    });

export default mutation;
