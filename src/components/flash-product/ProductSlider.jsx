import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = (slideSrc) => {

    return (
        <div>
            <img src={slideSrc.slideSrc} alt="not fount" />
        </div>
    );
};

const ProductSlider = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {
                slides.map((slide, index) => <Slide key={index} slideSrc={slide} />)
            }
        </Slider>
    );
};

export default ProductSlider;