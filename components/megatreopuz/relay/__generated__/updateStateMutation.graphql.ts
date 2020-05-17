/* tslint:disable */
/* eslint-disable */
/* @relayHash f7b92f68eafa812310b349e522bfd343 */

import { ConcreteRequest } from "relay-runtime";
export type updateStateMutationVariables = {
    input: boolean;
};
export type updateStateMutationResponse = {
    readonly updateState: {
        readonly active: boolean;
    };
};
export type updateStateMutation = {
    readonly response: updateStateMutationResponse;
    readonly variables: updateStateMutationVariables;
};



/*
mutation updateStateMutation(
  $input: Boolean!
) {
  updateState(state: $input) {
    active
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateState",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "state",
        "variableName": "input"
      }
    ],
    "concreteType": "ContestState",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "active",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "updateStateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateStateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateStateMutation",
    "id": null,
    "text": "mutation updateStateMutation(\n  $input: Boolean!\n) {\n  updateState(state: $input) {\n    active\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '83722266eba8581a96e671efd2f1a252';
export default node;
