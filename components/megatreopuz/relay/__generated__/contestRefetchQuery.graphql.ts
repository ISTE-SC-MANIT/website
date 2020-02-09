/* tslint:disable */
/* eslint-disable */
/* @relayHash 867883870f161bd20cbdb4374346f4d5 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type contestRefetchQueryVariables = {};
export type contestRefetchQueryResponse = {
    readonly nextQuestion: {
        readonly " $fragmentRefs": FragmentRefs<"contest_question">;
    } | null;
};
export type contestRefetchQuery = {
    readonly response: contestRefetchQueryResponse;
    readonly variables: contestRefetchQueryVariables;
};



/*
query contestRefetchQuery {
  nextQuestion {
    ...contest_question
  }
}

fragment contest_question on Question {
  id
  questionNo
  imgUrl
  description
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "contestRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "nextQuestion",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "contest_question",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "contestRefetchQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "nextQuestion",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
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
    "name": "contestRefetchQuery",
    "id": null,
    "text": "query contestRefetchQuery {\n  nextQuestion {\n    ...contest_question\n  }\n}\n\nfragment contest_question on Question {\n  id\n  questionNo\n  imgUrl\n  description\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '1be2c6ae34903d06c1b93812c9dd8af2';
export default node;
