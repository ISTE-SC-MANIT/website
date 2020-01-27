import { Environment, RecordSource, Store } from "relay-runtime";
import {
    RelayNetworkLayer,
    urlMiddleware,
    authMiddleware
} from "react-relay-network-modern";

let token = "";

if (typeof document !== "undefined" && document.cookie) {
    const cookies = document.cookie.split("access_token=");
    if (cookies.length !== 2) {
        console.error("Invalid Cookie");
    } else token = cookies[1].split(";")[0];
}

const network = new RelayNetworkLayer([
    urlMiddleware({
        url: () => Promise.resolve(`${process.env.MEGATREOPUZ_SERVER}/graphql`)
    }),
    authMiddleware({
        token,
        prefix: "",
        // default
        header: "authorization"
    })
]);

const environment = new Environment({
    network: network,
    store: new Store(new RecordSource())
});

export default environment;
