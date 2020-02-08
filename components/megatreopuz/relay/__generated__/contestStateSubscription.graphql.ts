/* tslint:disable */
/* eslint-disable */
/* @relayHash 3bdddda465eb324ffffafb1a4580db8a */

import { ConcreteRequest } from "relay-runtime";
export type contestStateSubscriptionVariables = {};
export type contestStateSubscriptionResponse = {
    readonly stateValue: {
        readonly id: string;
        readonly active: boolean;
    };
};
export type contestStateSubscription = {
    readonly response: contestStateSubscriptionResponse;
    readonly variables: contestStateSubscriptionVariables;
};

/*
subscription contestStateSubscription {
  stateValue {
    id
    active
  }
}
*/

const node: ConcreteRequest = (function() {
    var v0 = [
        {
            kind: "LinkedField",
            alias: null,
            name: "stateValue",
            storageKey: null,
            args: null,
            concreteType: "ContestState",
            plural: false,
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
                    name: "active",
                    args: null,
                    storageKey: null
                }
            ]
        }
    ];
    return {
        kind: "Request",
        fragment: {
            kind: "Fragment",
            name: "contestStateSubscription",
            type: "Subscription",
            metadata: null,
            argumentDefinitions: [],
            selections: v0 /*: any*/
        },
        operation: {
            kind: "Operation",
            name: "contestStateSubscription",
            argumentDefinitions: [],
            selections: v0 /*: any*/
        },
        params: {
            operationKind: "subscription",
            name: "contestStateSubscription",
            id: null,
            text:
                "subscription contestStateSubscription {\n  stateValue {\n    id\n    active\n  }\n}\n",
            metadata: {}
        }
    };
})();
(node as any).hash = "890bd0cde5ea196ac2297e996d35b935";
export default node;
