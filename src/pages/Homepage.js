import React from "react";
import Navbar from "../components/navBar";
import Hero from "../components/hero";
import WhoWeAre from "../components/whoWeAre";
import OurCraft from "../components/ourCraft";

const Homepage = () => {

    return (
        <div>
            <Navbar />
            <Hero />
            <WhoWeAre />
            <OurCraft />
        </div>
    );
};

export default Homepage;