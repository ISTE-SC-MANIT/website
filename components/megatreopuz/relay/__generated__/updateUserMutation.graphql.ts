/* tslint:disable */
/* eslint-disable */
/* @relayHash 3321f362739f431f82b67c15c55ebe7c */

import { ConcreteRequest } from "relay-runtime";
export type UserInput = {
    college?: string | null;
    phone?: string | null;
    year?: string | null;
    country?: string | null;
};
export type updateUserMutationVariables = {
    user: UserInput;
};
export type updateUserMutationResponse = {
    readonly updateUser: {
        readonly college: string;
        readonly phone: string;
        readonly year: string;
        readonly country: string;
    };
};
export type updateUserMutation = {
    readonly response: updateUserMutationResponse;
    readonly variables: updateUserMutationVariables;
};



/*
mutation updateUserMutation(
  $user: UserInput!
) {
  updateUser(userInfo: $user) {
    college
    phone
    year
    country
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "user",
    "type": "UserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userInfo",
        "variableName": "user"
      }
    ],
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "college",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "phone",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "year",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "country",
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
    "name": "updateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateUserMutation",
    "id": null,
    "text": "mutation updateUserMutation(\n  $user: UserInput!\n) {\n  updateUser(userInfo: $user) {\n    college\n    phone\n    year\n    country\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0317cf6cb442a733c6fd4115e19a001c';
export default node;
