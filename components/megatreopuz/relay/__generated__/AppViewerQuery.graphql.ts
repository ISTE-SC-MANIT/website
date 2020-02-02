/* tslint:disable */
/* eslint-disable */
/* @relayHash 0bc47af29c895b81ca26310408baf5fc */

import { ConcreteRequest } from "relay-runtime";
export type AppViewerQueryVariables = {};
export type AppViewerQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly username: string;
        readonly name: string;
        readonly email: string | null;
        readonly phone: string | null;
        readonly college: string | null;
        readonly year: string | null;
        readonly country: string | null;
        readonly admin: boolean | null;
        readonly currentquestion: number;
    };
};
export type AppViewerQuery = {
    readonly response: AppViewerQueryResponse;
    readonly variables: AppViewerQueryVariables;
};



/*
query AppViewerQuery {
  viewer {
    id
    username
    name
    email
    phone
    college
    year
    country
    admin
    currentquestion
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "username",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
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
        "name": "college",
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "admin",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "currentquestion",
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
    "name": "AppViewerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppViewerQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppViewerQuery",
    "id": null,
    "text": "query AppViewerQuery {\n  viewer {\n    id\n    username\n    name\n    email\n    phone\n    college\n    year\n    country\n    admin\n    currentquestion\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '644ceba743d20ad239be84aab0a1f266';
export default node;
