import { UserInput } from "./../__generated__/updateUserMutation.graphql";
import { Environment,  RecordSourceSelectorProxy } from "relay-runtime";
import { graphql, commitMutation } from "react-relay";

const mutation = graphql`
    mutation updateUserMutation($user: UserInput!) {
        updateUser(userInfo: $user) {
            id
            college
            phone
            year
            country
        }
    }
`;

interface Callbacks {
    onError(err: Error): void;
    onCompleted(...args: any): void;
}

const updater = (
    store: RecordSourceSelectorProxy,
    input: UserInput,
    id: string
) => {
    const userProxy = store.get(id);
    if (userProxy) {
        if (input.college) {
            userProxy.setValue(input.college, "college");
        }
        if (input.year) {
            userProxy.setValue(input.year, "year");
        }
        if (input.country) {
            userProxy.setValue(input.country, "country");
        }
        if (input.phone) {
            userProxy.setValue(input.phone, "phone");
        }
    }
};

export const commit = (
    environment: Environment,
    userInfo: UserInput,
    userId: string,
    { onCompleted, onError }: Callbacks
) => {
    return commitMutation(environment, {
        mutation,
        variables: {
            user: userInfo
        },
        onCompleted,
        onError,
        updater: (store: RecordSourceSelectorProxy) => {
            updater(store, userInfo, userId);
        },
        optimisticUpdater: (store: RecordSourceSelectorProxy) => {
            updater(store, userInfo, userId);
        }
    });
};
