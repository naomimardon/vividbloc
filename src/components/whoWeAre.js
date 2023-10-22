import React from 'react';

const WhoWeAre = () => {
    return (
        <div className="whoWeAre" 
            style={{
                backgroundImage: `url("/images/Group11.png")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right",
            }}>
            <h2 className="whoWeAreTitle">Who We Are</h2>
            <p className="whoWeAreText">Welcome to <span id="logoSpan">ViVidBloc.studio</span>, a realm where creativity knows no bounds. We're not just a video production agency; we're your creative confidants. Our approach is rooted in a unique blend of storytelling and strategy, designed to reflect the world as it truly is. We call it 'Unified Vision,' and it's what sets us apart.</p>
        </div>
    );
};

export default WhoWeAre;