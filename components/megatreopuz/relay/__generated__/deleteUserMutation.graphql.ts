/* tslint:disable */
/* eslint-disable */
/* @relayHash 7235bada8a9027173a0753f7822afc65 */

import { ConcreteRequest } from "relay-runtime";
export type deleteUserMutationVariables = {};
export type deleteUserMutationResponse = {
    readonly deleteUser: {
        readonly id: string;
    };
};
export type deleteUserMutation = {
    readonly response: deleteUserMutationResponse;
    readonly variables: deleteUserMutationVariables;
};

/*
mutation deleteUserMutation {
  deleteUser {
    id
  }
}
*/

const node: ConcreteRequest = (function() {
    var v0 = [
        {
            kind: "LinkedField",
            alias: null,
            name: "deleteUser",
            storageKey: null,
            args: null,
            concreteType: "User",
            plural: false,
            selections: [
                {
                    kind: "ScalarField",
                    alias: null,
                    name: "id",
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
            name: "deleteUserMutation",
            type: "Mutation",
            metadata: null,
            argumentDefinitions: [],
            selections: v0 /*: any*/
        },
        operation: {
            kind: "Operation",
            name: "deleteUserMutation",
            argumentDefinitions: [],
            selections: v0 /*: any*/
        },
        params: {
            operationKind: "mutation",
            name: "deleteUserMutation",
            id: null,
            text:
                "mutation deleteUserMutation {\n  deleteUser {\n    id\n  }\n}\n",
            metadata: {}
        }
    };
})();
(node as any).hash = "3f8b82c25cdf40353549bca4a2aaf726";
export default node;
