
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carousel_1 from "../../../images/carousel-1.png";
import carousel_2 from "../../../images/carousel-2.png";
import carousel_3 from "../../../images/carousel-3.png";
import carousel_4 from "../../../images/carousel-4.png"
import carousel_5 from "../../../images/carousel-5.png"





const CarouselMain = () => {
    return (
    <Carousel className="col-md-8 mb-5">
        <Carousel.Item>
            <img
                style={{width:"543px",height:"409px",borderRadius:"5px"}}
                className="d-block w-100 img-fluid"
                src={carousel_4}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{width:"543px",height:"409px",borderRadius:"5px"}}
            className="d-block w-100 img-fluid"
            src={carousel_5}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{width:"543px",height:"409px",borderRadius:"5px"}}
            className="d-block w-100 img-fluid"
            src={carousel_3}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{width:"543px",height:"409px",borderRadius:"5px"}}
            className="d-block w-100 img-fluid"
            src={carousel_1}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{width:"543px",height:"409px",borderRadius:"5px"}}
            className="d-block w-100 img-fluid"
            src={carousel_2}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
    );
};

export default CarouselMain;