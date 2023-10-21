import React from "react";

const Hero = () => {
    return (
        <div className="heroDesktop"
            style={{
                backgroundImage: `url("/images/899x808.png")`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "right",
                height: "808px",
            }}>
            <p className="vividblocEllipse">vividbloc.studio</p>
            <p className="heroTitle">Where Your <span id="story">Story Takes Centre Stage</span></p>
            <p className="heroSubHeading">Changing the Conversation, One Frame at a Time</p>
        </div>
    );
};

export default Hero;

