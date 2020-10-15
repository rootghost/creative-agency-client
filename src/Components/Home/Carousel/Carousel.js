import React from 'react';
import CarouselMain from '../CarouselMain/CarouselMain';
import "./Carousel.css"

const Carousel = () => {
    return (
        <section className="carousel-section mt-5">
            <h4 className="text-center text-white pt-5 mb-5">Here Some of <span style={{color:"#7AB259"}}>our works</span></h4>
            <div className="container d-flex justify-content-center">
                <CarouselMain></CarouselMain>
            </div>
        </section>
    );
};

export default Carousel;