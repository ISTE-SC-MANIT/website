/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type admin_questions = {
    readonly questionNo: number;
    readonly imgUrl: string;
    readonly description: string;
    readonly " $refType": "admin_questions";
};
export type admin_questions$data = admin_questions;
export type admin_questions$key = {
    readonly " $data"?: admin_questions$data;
    readonly " $fragmentRefs": FragmentRefs<"admin_questions">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "admin_questions",
  "type": "Question",
  "metadata": null,
  "argumentDefinitions": [],
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
};
(node as any).hash = '2a19599afdd6850da72d0298bba9fb1f';
export default node;
