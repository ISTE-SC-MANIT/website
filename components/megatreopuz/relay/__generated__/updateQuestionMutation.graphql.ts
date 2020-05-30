/* tslint:disable */
/* eslint-disable */
/* @relayHash fa74c6c5a86319184470027814f49d1e */

import { ConcreteRequest } from "relay-runtime";
export type QuestionInput = {
    questionNo: number;
    description: string;
    answer?: string | null;
    imgUrl: string;
};
export type updateQuestionMutationVariables = {
    input: QuestionInput;
};
export type updateQuestionMutationResponse = {
    readonly updateQuestion: {
        readonly questionNo: number;
        readonly description: string;
        readonly imgUrl: string;
    } | null;
};
export type updateQuestionMutation = {
    readonly response: updateQuestionMutationResponse;
    readonly variables: updateQuestionMutationVariables;
};



/*
mutation updateQuestionMutation(
  $input: QuestionInput!
) {
  updateQuestion(question: $input) {
    questionNo
    description
    imgUrl
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "QuestionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "question",
        "variableName": "input"
      }
    ],
    "concreteType": "Question",
    "plural": false,
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
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "imgUrl",
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
    "name": "updateQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateQuestionMutation",
    "id": null,
    "text": "mutation updateQuestionMutation(\n  $input: QuestionInput!\n) {\n  updateQuestion(question: $input) {\n    questionNo\n    description\n    imgUrl\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e56b4a3dfbb84f6f2755116e247596a7';
export default node;
