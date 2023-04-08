import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assets/products/placeImg.png";

const LazyImage = ({ classes, imageSrc, }) => {
    return (
        <LazyLoadImage
            src={imageSrc}
            className={classes}
            alt="Product"
            effect='blur'
            placeholderSrc={placeholder}
        />
    );
};

export default LazyImage;
