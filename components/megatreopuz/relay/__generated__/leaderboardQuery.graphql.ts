/* tslint:disable */
/* eslint-disable */
/* @relayHash 1d17fb951c39f3456bc4152ee3835061 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type leaderboardQueryVariables = {
    first: number;
    after?: unknown | null;
};
export type leaderboardQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"leaderboard_data">;
};
export type leaderboardQuery = {
    readonly response: leaderboardQueryResponse;
    readonly variables: leaderboardQueryVariables;
};



/*
query leaderboardQuery(
  $first: Int!
  $after: LeaderBoardCursorScalar
) {
  ...leaderboard_data
}

fragment leaderboard_data on Query {
  leaderBoard(first: $first, after: $after) {
    edges {
      node {
        id
        userName
        rank {
          rank
        }
        totalQuestionsAnswered
        __typename
      }
      cursor
    }
    pageInfo {
      startCursor
      hasNextPage
      hasPreviousPage
      endCursor
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "LeaderBoardCursorScalar",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "leaderboardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "leaderboard_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "leaderboardQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "leaderBoard",
        "storageKey": null,
        "args": (v1/*: any*/),
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
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "leaderBoard",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "Leaderboard_leaderBoard",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "leaderboardQuery",
    "id": null,
    "text": "query leaderboardQuery(\n  $first: Int!\n  $after: LeaderBoardCursorScalar\n) {\n  ...leaderboard_data\n}\n\nfragment leaderboard_data on Query {\n  leaderBoard(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        userName\n        rank {\n          rank\n        }\n        totalQuestionsAnswered\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      hasNextPage\n      hasPreviousPage\n      endCursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a2cf00d968170afd50e65c7b6adb23ac';
export default node;
