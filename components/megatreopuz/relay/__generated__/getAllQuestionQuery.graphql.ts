/* tslint:disable */
/* eslint-disable */
/* @relayHash 0360a51d2eafdb047fd77f1496699eb7 */

import { ConcreteRequest } from "relay-runtime";
export type getAllQuestionQueryVariables = {};
export type getAllQuestionQueryResponse = {
    readonly getAllQuestion: ReadonlyArray<{
        readonly questionNo: number;
        readonly imgUrl: string;
        readonly description: string;
    }> | null;
};
export type getAllQuestionQuery = {
    readonly response: getAllQuestionQueryResponse;
    readonly variables: getAllQuestionQueryVariables;
};



/*
query getAllQuestionQuery {
  getAllQuestion {
    questionNo
    imgUrl
    description
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "getAllQuestionQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "getAllQuestionQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "getAllQuestionQuery",
    "id": null,
    "text": "query getAllQuestionQuery {\n  getAllQuestion {\n    questionNo\n    imgUrl\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '49366dfcffeb27f6a7af465b6a3526d5';
export default node;
