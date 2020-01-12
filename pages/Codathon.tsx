import { NextPage } from "next";
import React from "react";
import Home from "../components/codathon/Home";
import About from "../components/codathon/About";
import Prices from "../components/codathon/Prices";

// import Section1 from "../components/index/section1";
// import Section2 from "../components/index/section2";
// import Section3 from "../components/index/section3";
// import Section4 from "../components/index/section4";

const Codathon: NextPage = () => {
    return (
        <div>
            <Home />
            <About />
            <Prices />
        </div>
    );
};

export default Codathon;
