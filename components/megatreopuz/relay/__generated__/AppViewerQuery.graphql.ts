/* tslint:disable */
/* eslint-disable */
/* @relayHash 639c606d301f5c4d252e0e9d56e93d95 */

import { ConcreteRequest } from "relay-runtime";
export type AppViewerQueryVariables = {};
export type AppViewerQueryResponse = {
    readonly getState: {
        readonly id: string;
        readonly active: boolean;
    };
    readonly viewer: {
        readonly id: string;
        readonly userName: string;
        readonly name: string;
        readonly email: string;
        readonly phone: string;
        readonly college: string;
        readonly year: number;
        readonly country: string;
        readonly admin: boolean;
        readonly totalQuestionsAnswered: number;
        readonly rank: {
            readonly id: string;
            readonly rank: number;
        } | null;
    };
};
export type AppViewerQuery = {
    readonly response: AppViewerQueryResponse;
    readonly variables: AppViewerQueryVariables;
};

/*
query AppViewerQuery {
  getState {
    id
    active
  }
  viewer {
    id
    userName
    name
    email
    phone
    college
    year
    country
    admin
    totalQuestionsAnswered
    rank {
      id
      rank
    }
  }
}
*/

const node: ConcreteRequest = (function() {
    var v0 = {
            kind: "ScalarField",
            alias: null,
            name: "id",
            args: null,
            storageKey: null
        },
        v1 = [
            {
                kind: "LinkedField",
                alias: null,
                name: "getState",
                storageKey: null,
                args: null,
                concreteType: "ContestState",
                plural: false,
                selections: [
                    v0 /*: any*/,
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "active",
                        args: null,
                        storageKey: null
                    }
                ]
            },
            {
                kind: "LinkedField",
                alias: null,
                name: "viewer",
                storageKey: null,
                args: null,
                concreteType: "User",
                plural: false,
                selections: [
                    v0 /*: any*/,
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "userName",
                        args: null,
                        storageKey: null
                    },
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "name",
                        args: null,
                        storageKey: null
                    },
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "email",
                        args: null,
                        storageKey: null
                    },
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "phone",
                        args: null,
                        storageKey: null
                    },
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "college",
                        args: null,
                        storageKey: null
                    },
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "year",
                        args: null,
                        storageKey: null
                    },
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "country",
                        args: null,
                        storageKey: null
                    },
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "admin",
                        args: null,
                        storageKey: null
                    },
                    {
                        kind: "ScalarField",
                        alias: null,
                        name: "totalQuestionsAnswered",
                        args: null,
                        storageKey: null
                    },
                    {
                        kind: "LinkedField",
                        alias: null,
                        name: "rank",
                        storageKey: null,
                        args: null,
                        concreteType: "Rank",
                        plural: false,
                        selections: [
                            v0 /*: any*/,
                            {
                                kind: "ScalarField",
                                alias: null,
                                name: "rank",
                                args: null,
                                storageKey: null
                            }
                        ]
                    }
                ]
            }
        ];
    return {
        kind: "Request",
        fragment: {
            kind: "Fragment",
            name: "AppViewerQuery",
            type: "Query",
            metadata: null,
            argumentDefinitions: [],
            selections: v1 /*: any*/
        },
        operation: {
            kind: "Operation",
            name: "AppViewerQuery",
            argumentDefinitions: [],
            selections: v1 /*: any*/
        },
        params: {
            operationKind: "query",
            name: "AppViewerQuery",
            id: null,
            text:
                "query AppViewerQuery {\n  getState {\n    id\n    active\n  }\n  viewer {\n    id\n    userName\n    name\n    email\n    phone\n    college\n    year\n    country\n    admin\n    totalQuestionsAnswered\n    rank {\n      id\n      rank\n    }\n  }\n}\n",
            metadata: {}
        }
    };
})();
(node as any).hash = "b6d46f69595407b2d7d0e98e48c9bbb1";
export default node;
