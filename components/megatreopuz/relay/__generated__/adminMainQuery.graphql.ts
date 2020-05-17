/* tslint:disable */
/* eslint-disable */
/* @relayHash 12b371116855aaa89e5e66ab8240043d */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type adminMainQueryVariables = {};
export type adminMainQueryResponse = {
    readonly getAllQuestion: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"admin_questions">;
    }> | null;
};
export type adminMainQuery = {
    readonly response: adminMainQueryResponse;
    readonly variables: adminMainQueryVariables;
};



/*
query adminMainQuery {
  getAllQuestion {
    ...admin_questions
  }
}

fragment admin_questions on Question {
  questionNo
  imgUrl
  description
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "adminMainQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getAllQuestion",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "admin_questions",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "adminMainQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "getAllQuestion",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "questionNo",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "imgUrl",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "adminMainQuery",
    "id": null,
    "text": "query adminMainQuery {\n  getAllQuestion {\n    ...admin_questions\n  }\n}\n\nfragment admin_questions on Question {\n  questionNo\n  imgUrl\n  description\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '5fabdce9baab3852c55485c77ec7fca3';
export default node;
