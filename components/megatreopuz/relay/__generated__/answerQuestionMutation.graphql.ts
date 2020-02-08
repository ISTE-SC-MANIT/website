/* tslint:disable */
/* eslint-disable */
/* @relayHash e9105c22a30a36938b4234a2119e83d6 */

import { ConcreteRequest } from "relay-runtime";
export type answerQuestionMutationVariables = {
    input: string;
};
export type answerQuestionMutationResponse = {
    readonly answerQuestion: {
        readonly id: string;
        readonly valid: boolean;
    } | null;
};
export type answerQuestionMutation = {
    readonly response: answerQuestionMutationResponse;
    readonly variables: answerQuestionMutationVariables;
};

/*
mutation answerQuestionMutation(
  $input: String!
) {
  answerQuestion(answer: $input) {
    id
    valid
  }
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
                kind: "LinkedField",
                alias: null,
                name: "answerQuestion",
                storageKey: null,
                args: [
                    {
                        kind: "Variable",
                        name: "answer",
                        variableName: "input"
                    }
                ],
                concreteType: "AnswerResponse",
                plural: false,
                selections: [
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "id",
                        args: null,
                        storageKey: null
                    },
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "valid",
                        args: null,
                        storageKey: null
                    }
                ]
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
                "mutation answerQuestionMutation(\n  $input: String!\n) {\n  answerQuestion(answer: $input) {\n    id\n    valid\n  }\n}\n",
            metadata: {}
        }
    };
})();
(node as any).hash = "712d3bb9040cb6c75d475b5ef3fa0621";
export default node;
