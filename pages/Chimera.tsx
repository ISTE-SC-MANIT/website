import { NextPage } from "next";
import React from "react";
import Header from "../components/Chimera/header";
import Carousel from "../components/Chimera/carousel";
import About from "../components/Chimera/about";
import Why from "../components/Chimera/why";
import Faq from "../components/Chimera/faq";
import Contact from "../components/Chimera/contact";

const Chimera: NextPage = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <About />
            <Why />

            <Faq />
            <Contact />
        </div>
    );
};

export default Chimera;
