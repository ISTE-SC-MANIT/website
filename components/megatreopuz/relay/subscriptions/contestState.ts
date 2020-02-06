import { RecordSourceSelectorProxy } from "relay-runtime";
import { requestSubscription, graphql, Environment } from "react-relay";

const subscription = graphql`
    subscription contestStateSubscription {
        stateValue {
            id
            active
        }
    }
`;

interface Callbacks {
    onCompleted: () => void;
    onError: (error: Error) => void;
}

const updater = (id: string) => (store: RecordSourceSelectorProxy) => {
    const state = store.get(id);
    if (!state) return;
    const payload = store.getRootField("stateValue");
    if (!payload) return;
    state.setValue(Boolean(payload.getValue("active")), "active");
};

export const requestStateSubscription = (
    environment: Environment,
    id: string,
    { onCompleted, onError }: Callbacks
) =>
    requestSubscription(environment, {
        subscription,
        variables: {},
        onCompleted,
        onError,
        updater: updater(id)
    });
