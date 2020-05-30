/* tslint:disable */
/* eslint-disable */
/* @relayHash 1703f5616d74e07159c4a65001db7b2f */

import { ConcreteRequest } from "relay-runtime";
export type adminQueryVariables = {};
export type adminQueryResponse = {
    readonly getAllQuestion: ReadonlyArray<{
        readonly questionNo: number;
        readonly imgUrl: string;
        readonly description: string;
    }> | null;
};
export type adminQuery = {
    readonly response: adminQueryResponse;
    readonly variables: adminQueryVariables;
};



/*
query adminQuery {
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
    "name": "adminQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "adminQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "adminQuery",
    "id": null,
    "text": "query adminQuery {\n  getAllQuestion {\n    questionNo\n    imgUrl\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a19cca837800ce2b57017b8721a68bf9';
export default node;
