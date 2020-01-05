import { NextPage } from "next";
import React from "react";
import Section1 from "../components/index/section1";
import Section2 from "../components/index/section2";
import Section3 from "../components/index/section3";
import Section4 from "../components/index/section4";

const Index: NextPage = () => {
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    );
};

export default Index;
