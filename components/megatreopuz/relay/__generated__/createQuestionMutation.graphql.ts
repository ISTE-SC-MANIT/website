/* tslint:disable */
/* eslint-disable */
/* @relayHash a7e22abd58667718483d582914d84167 */

import { ConcreteRequest } from "relay-runtime";
export type QuestionInput = {
    questionNo: number;
    description: string;
    answer?: string | null;
    imgUrl: string;
};
export type createQuestionMutationVariables = {
    input: QuestionInput;
};
export type createQuestionMutationResponse = {
    readonly createQuestion: {
        readonly questionNo: number;
        readonly description: string;
        readonly imgUrl: string;
    } | null;
};
export type createQuestionMutation = {
    readonly response: createQuestionMutationResponse;
    readonly variables: createQuestionMutationVariables;
};



/*
mutation createQuestionMutation(
  $input: QuestionInput!
) {
  createQuestion(question: $input) {
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
    "name": "createQuestion",
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
    "name": "createQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createQuestionMutation",
    "id": null,
    "text": "mutation createQuestionMutation(\n  $input: QuestionInput!\n) {\n  createQuestion(question: $input) {\n    questionNo\n    description\n    imgUrl\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd7ccea9e1aa7c16b00924050eab7c007';
export default node;
