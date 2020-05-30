/* tslint:disable */
/* eslint-disable */
/* @relayHash f39f8e36d7797b7235b4c3d6e2bcfc7b */

import { ConcreteRequest } from "relay-runtime";
export type QuestionNumberInput = {
    questionNo: number;
};
export type deleteQuestionMutationVariables = {
    input: QuestionNumberInput;
};
export type deleteQuestionMutationResponse = {
    readonly deleteQuestion: {
        readonly questionNo: number;
        readonly description: string;
        readonly imgUrl: string;
    } | null;
};
export type deleteQuestionMutation = {
    readonly response: deleteQuestionMutationResponse;
    readonly variables: deleteQuestionMutationVariables;
};



/*
mutation deleteQuestionMutation(
  $input: QuestionNumberInput!
) {
  deleteQuestion(input: $input) {
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
    "type": "QuestionNumberInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
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
    "name": "deleteQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteQuestionMutation",
    "id": null,
    "text": "mutation deleteQuestionMutation(\n  $input: QuestionNumberInput!\n) {\n  deleteQuestion(input: $input) {\n    questionNo\n    description\n    imgUrl\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ceda2ad3af3aa3333a9ce4d13b0ad015';
export default node;
