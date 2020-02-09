/* tslint:disable */
/* eslint-disable */
/* @relayHash d723eeb2a7638a23bdf18800eb8800b3 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type contestQueryVariables = {};
export type contestQueryResponse = {
    readonly nextQuestion: {
        readonly " $fragmentRefs": FragmentRefs<"contest_question">;
    } | null;
};
export type contestQuery = {
    readonly response: contestQueryResponse;
    readonly variables: contestQueryVariables;
};



/*
query contestQuery {
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
    "name": "contestQuery",
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
    "name": "contestQuery",
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
    "name": "contestQuery",
    "id": null,
    "text": "query contestQuery {\n  nextQuestion {\n    ...contest_question\n  }\n}\n\nfragment contest_question on Question {\n  id\n  questionNo\n  imgUrl\n  description\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '0c86372ed1ca60351ca4340d87bd4343';
export default node;
