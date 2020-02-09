/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type contest_question = {
    readonly id: string;
    readonly questionNo: number;
    readonly imgUrl: string;
    readonly description: string;
    readonly " $refType": "contest_question";
};
export type contest_question$data = contest_question;
export type contest_question$key = {
    readonly " $data"?: contest_question$data;
    readonly " $fragmentRefs": FragmentRefs<"contest_question">;
};

const node: ReaderFragment = {
    kind: "Fragment",
    name: "contest_question",
    type: "Question",
    metadata: null,
    argumentDefinitions: [],
    selections: [
        {
            kind: "ScalarField",
            alias: null,
            name: "id",
            args: null,
            storageKey: null
        },
        {
            kind: "ScalarField",
            alias: null,
            name: "questionNo",
            args: null,
            storageKey: null
        },
        {
            kind: "ScalarField",
            alias: null,
            name: "imgUrl",
            args: null,
            storageKey: null
        },
        {
            kind: "ScalarField",
            alias: null,
            name: "description",
            args: null,
            storageKey: null
        }
    ]
};
(node as any).hash = "6a59d018bcff038677b52ae9adfc96db";
export default node;
