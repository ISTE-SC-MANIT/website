import cookie from "js-cookie";
import { Environment, RecordSource, Store } from "relay-runtime";
import {
    RelayNetworkLayer,
    urlMiddleware,
    authMiddleware,
    errorMiddleware
} from "react-relay-network-modern";

const network = new RelayNetworkLayer([
    urlMiddleware({
        url: () => Promise.resolve(`${process.env.MEGATREOPUZ_SERVER}/graphql`)
    }),
    authMiddleware({
        token: cookie.get("access_token"),
        prefix: "",
        // default
        header: "authorization"
    }),
    errorMiddleware({
        logger: console.error,
        prefix: "[Relay Network]: "
    })
]);

const environment = new Environment({
    network: network,
    store: new Store(new RecordSource())
});

export const makeEnvironment = () =>
    new Environment({
        network: network,
        store: new Store(new RecordSource())
    });

export default environment;
