/* tslint:disable */
/* eslint-disable */
/* @relayHash a2d614c98f347aee9f7f779c01bbb57b */

import { ConcreteRequest } from "relay-runtime";
export type AppViewerQueryVariables = {};
export type AppViewerQueryResponse = {
    readonly active: boolean;
    readonly viewer: {
        readonly id: string;
        readonly userName: string;
        readonly name: string;
        readonly email: string;
        readonly phone: string;
        readonly college: string;
        readonly year: number;
        readonly lastAnsweredQuestionTime: unknown;
        readonly country: string;
        readonly admin: boolean;
        readonly lastAnsweredQuestion: number;
        readonly totalQuestionsAnswered: number;
        readonly rank: number | null;
    };
};
export type AppViewerQuery = {
    readonly response: AppViewerQueryResponse;
    readonly variables: AppViewerQueryVariables;
};



/*
query AppViewerQuery {
  active: getState
  viewer {
    id
    userName
    name
    email
    phone
    college
    year
    lastAnsweredQuestionTime
    country
    admin
    lastAnsweredQuestion
    totalQuestionsAnswered
    rank
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": "active",
    "name": "getState",
    "args": null,
    "storageKey": null
  },
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
        "name": "userName",
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
        "name": "lastAnsweredQuestionTime",
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
        "name": "lastAnsweredQuestion",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "totalQuestionsAnswered",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "rank",
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
    "text": "query AppViewerQuery {\n  active: getState\n  viewer {\n    id\n    userName\n    name\n    email\n    phone\n    college\n    year\n    lastAnsweredQuestionTime\n    country\n    admin\n    lastAnsweredQuestion\n    totalQuestionsAnswered\n    rank\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7c49f439e2eec0383e1bcf753476d0ed';
export default node;
