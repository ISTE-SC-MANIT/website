/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type leaderboard_data = {
    readonly leaderBoard: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly userName: string;
                readonly rank: {
                    readonly rank: number;
                } | null;
                readonly totalQuestionsAnswered: number;
            };
            readonly cursor: unknown;
        }>;
        readonly pageInfo: {
            readonly startCursor: unknown;
            readonly hasNextPage: boolean;
            readonly hasPreviousPage: boolean;
            readonly endCursor: unknown;
        };
    };
    readonly " $refType": "leaderboard_data";
};
export type leaderboard_data$data = leaderboard_data;
export type leaderboard_data$key = {
    readonly " $data"?: leaderboard_data$data;
    readonly " $fragmentRefs": FragmentRefs<"leaderboard_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "leaderboard_data",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "leaderBoard"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "first",
      "type": "Int!"
    },
    {
      "kind": "RootArgument",
      "name": "after",
      "type": "LeaderBoardCursorScalar"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "leaderBoard",
      "name": "__Leaderboard_leaderBoard_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "LeaderBoardConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "UserEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
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
                  "name": "userName",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "rank",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Rank",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "rank",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "totalQuestionsAnswered",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "LeaderBoardPageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "startCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasPreviousPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = 'f26eec5d251b676bdb1ca4446e3b9126';
export default node;
