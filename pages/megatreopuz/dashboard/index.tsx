import { NextPage } from "next";
import React from "react";
import { AppViewerQueryResponse } from "../../../components/megatreopuz/relay/__generated__/AppViewerQuery.graphql";
import { NoSsr } from "@material-ui/core";

interface Props {
    loading: boolean;
    setLoading: (b: boolean) => void;
    viewer: AppViewerQueryResponse["viewer"];
}

const Dashboard: NextPage<Props> = ({ viewer }) => {
    if (!viewer) return null;
    return (
        <NoSsr>
            <h1>Hello Dashboard</h1>
            <ul>
                <li>{viewer.admin && "admin"}</li>
                <li>{viewer.college}</li>
                <li>{viewer.country}</li>
                <li>{viewer.currentquestion}</li>
                <li>{viewer.email}</li>
                <li>{viewer.name}</li>
                <li>{viewer.phone}</li>
                <li>{viewer.username}</li>
                <li>{viewer.year}</li>
            </ul>
        </NoSsr>
    );
};

export default Dashboard;
