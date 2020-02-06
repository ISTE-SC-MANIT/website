/* tslint:disable */
/* eslint-disable */
/* @relayHash 7c0baec439fb9f64a04bf4e7396b56e4 */

import { ConcreteRequest } from "relay-runtime";
export type answerQuestionMutationVariables = {
    input: string;
};
export type answerQuestionMutationResponse = {
    readonly answerQuestion: boolean | null;
};
export type answerQuestionMutation = {
    readonly response: answerQuestionMutationResponse;
    readonly variables: answerQuestionMutationVariables;
};

/*
mutation answerQuestionMutation(
  $input: String!
) {
  answerQuestion(answer: $input)
}
*/

const node: ConcreteRequest = (function() {
    var v0 = [
            {
                kind: "LocalArgument",
                name: "input",
                type: "String!",
                defaultValue: null
            }
        ],
        v1 = [
            {
                kind: "ScalarField",
                alias: null,
                name: "answerQuestion",
                args: [
                    {
                        kind: "Variable",
                        name: "answer",
                        variableName: "input"
                    }
                ],
                storageKey: null
            }
        ];
    return {
        kind: "Request",
        fragment: {
            kind: "Fragment",
            name: "answerQuestionMutation",
            type: "Mutation",
            metadata: null,
            argumentDefinitions: v0 /*: any*/,
            selections: v1 /*: any*/
        },
        operation: {
            kind: "Operation",
            name: "answerQuestionMutation",
            argumentDefinitions: v0 /*: any*/,
            selections: v1 /*: any*/
        },
        params: {
            operationKind: "mutation",
            name: "answerQuestionMutation",
            id: null,
            text:
                "mutation answerQuestionMutation(\n  $input: String!\n) {\n  answerQuestion(answer: $input)\n}\n",
            metadata: {}
        }
    };
})();
(node as any).hash = "48c0886ed434761706f20802916fae80";
export default node;
