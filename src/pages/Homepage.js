import React from "react";
import Navbar from "../components/navBar";
import Hero from "../components/hero";
import WhoWeAre from "../components/whoWeAre";

const Homepage = () => {

    return (
        <div>
            <Navbar />
            <Hero />
            <WhoWeAre />
        </div>
    );
};

export default Homepage;