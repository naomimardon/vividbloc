import React from 'react';
import Carousel from './carousel';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div>
                <h2 className="testimonialsTitle">Voices of Our Tribe</h2>
                <p className="testimonialsText">Meet the brands and individuals who've transformed their stories with us. Real narratives, real impact.</p>
            </div>
            <div>
                <Carousel />
            </div>
        </div>
    );
};

export default Testimonials;