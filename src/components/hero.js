import React from "react";
import Button from '@mui/material/Button';

const Hero = () => {
    return (
        <div className="heroDesktop" 
            style={{
                backgroundImage: `url("/images/899x808.png")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                height: "808px",
            }}>
            <p className="vividblocEllipse">vividbloc.studio</p>
            <h1 className="heroTitle">Where Your <span id="story">Story Takes Centre Stage</span></h1>
            <p className="heroSubHeading">Changing the Conversation, One Frame at a Time</p>
            <div>
                <Button
                    className="discoverButton"
                    variant="text"
                >
                    Discover Your Story
                </Button>
            </div>
        </div>
    );
};

export default Hero;

