import { commitMutation, graphql } from "react-relay";
import { Environment, RecordSourceSelectorProxy } from "relay-runtime";
import { answerQuestionMutationResponse } from "../__generated__/answerQuestionMutation.graphql";

const mutation = graphql`
    mutation answerQuestionMutation($input: String!) {
        answerQuestion(answer: $input) {
            id
            valid
        }
    }
`;
interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: answerQuestionMutationResponse): void;
}

const updater = (viewerId: string) => (store: RecordSourceSelectorProxy) => {
    const root = store.getRootField("answerQuestion");
    const valid = root?.getValue("valid");
    if (!valid) return;
    const viewer = store.get(viewerId);
    if (!viewer) return;
    const old = viewer.getValue("totalQuestionsAnswered");
    if (typeof old !== "number") return;
    viewer.setValue(`${old + 1}`, "totalQuestionsAnswered");
};

export const commit = (
    environment: Environment,
    viewerId: string,
    answer: string,

    { onCompleted, onError }: Callbacks
) => {
    return commitMutation(environment, {
        mutation,
        variables: {
            input: answer
        },
        onCompleted: (response, error) => {
            if (error) return;
            onCompleted(response as answerQuestionMutationResponse);
        },
        onError,
        updater: updater(viewerId)
    });
};
