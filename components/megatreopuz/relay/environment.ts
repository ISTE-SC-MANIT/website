import cookie from "js-cookie";
import { Environment, RecordSource, Store } from "relay-runtime";
import {
    RelayNetworkLayer,
    urlMiddleware,
    authMiddleware,
    errorMiddleware,
    SubscribeFunction
} from "react-relay-network-modern";
import { SubscriptionClient } from "subscriptions-transport-ws";

export const makeEnvironment = () => {
    const token = cookie.get("access_token");

    const subscribeFn: SubscribeFunction = (config, variables) => {
        const query = config.text!;
        const subscriptionClient = new SubscriptionClient(
            `${process.env.MEGATREOPUZ_SUBSCRIPTIONS}/graphql`,
            {
                reconnect: true,
                connectionParams: {
                    authorization: token
                }
            }
        );
        return subscriptionClient.request({ query, variables }) as any;
    };

    const network = new RelayNetworkLayer(
        [
            urlMiddleware({
                url: () =>
                    Promise.resolve(`${process.env.MEGATREOPUZ_SERVER}/graphql`)
            }),
            authMiddleware({
                token: token,
                prefix: "",
                // default
                header: "authorization"
            }),
            errorMiddleware({
                logger: console.error,
                prefix: "[Relay Network]: "
            })
        ],
        {
            subscribeFn
        }
    );
    return new Environment({
        network: network,
        store: new Store(new RecordSource())
    });
};
