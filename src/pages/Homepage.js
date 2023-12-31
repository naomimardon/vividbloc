import React from "react";
import Navbar from "../components/navBar";
import Hero from "../components/hero";
import WhoWeAre from "../components/whoWeAre";
import OurCraft from "../components/ourCraft";
import Connect from "../components/connect";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";

const Homepage = () => {

    return (
        <div>
            <Navbar />
            <Hero />
            <WhoWeAre />
            <OurCraft />
            <Testimonials />
            <Connect />
            <Footer />
        </div>
    );
};

export default Homepage;