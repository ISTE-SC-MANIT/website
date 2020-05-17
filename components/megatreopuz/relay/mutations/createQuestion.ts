import { commitMutation, graphql } from "react-relay";
import { Environment, RecordSourceSelectorProxy } from "relay-runtime";

import {
    createQuestionMutation,
    QuestionInput,
    createQuestionMutationResponse
} from "../__generated__/createQuestionMutation.graphql";

const mutation = graphql`
    mutation createQuestionMutation($input: QuestionInput!) {
        createQuestion(question: $input) {
            questionNo
            description
            imgUrl
        }
    }
`;

interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: createQuestionMutationResponse): void;
}

const updater = (viewerId: string) => (store: RecordSourceSelectorProxy) => {
    const root = store.getRootField("createQuestion");
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
            onCompleted(response as createQuestionMutationResponse);
        },
        onError,
        updater: updater(viewerId)
    });
};
