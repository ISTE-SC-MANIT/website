import { NextPage } from "next";
import React from "react";
import Head from "next/head";

import Section0 from "../components/index/section0";
import Section1 from "../components/index/section1";
import Section2 from "../components/index/section2";
import Section3 from "../components/index/section3";
import Section4 from "../components/index/section4";

const Index: NextPage = () => {
    return (
        <div>
            <Head>
                <title>ISTE MANIT</title>
                <link rel="shortcut icon" href="logo1.png" />

                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Section0 />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    );
};

export default Index;
