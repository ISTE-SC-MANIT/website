import { commitMutation, graphql } from "react-relay";
import { Environment } from "relay-runtime";

const mutation = graphql`
    mutation answerQuestionMutation($input: string!) {
        answerQuestion(answer: $input)
    }
`;
interface Callbacks {
    onError(err: Error): void;
    onCompleted(...args: any): void;
}

export const checkanswer = (
    environment: Environment,
    answer: string,

    { onCompleted, onError }: Callbacks
) => {
    return commitMutation(environment, {
        mutation,
        variables: {
            answer
        },
        onCompleted,
        onError
    });
};
