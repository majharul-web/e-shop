import React, { useEffect, useState } from 'react';
import tv1 from '../../assets/products/tv1.png'
import { FaStar } from 'react-icons/fa';
import { BsArrowDownUp, BsHeart, BsEye } from 'react-icons/bs';
import ProductSlider from './ProductSlider';

const FlashProduct = ({ product }) => {
    const { type, category, title, rating, salePrice, offerPrice, image, slides } = product
    const [hover, setHover] = useState("false")
    console.log("hover", hover);

    useEffect(() => {
        setHover(false)
    }, [])

    return (
        <div className="flash-product-card mt-3" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <span className={`${type === "Sale" ? 'sale-badge' : 'new-badge '}`}>{type}</span>

            {
                hover ? (<div className='flexCenter aCenter py-3'>
                    <ProductSlider slides={slides} />
                </div>)
                    :
                    (<div className='flexCenter py-2 py-lg-3'>
                        <img src={image} alt="" />
                    </div>)
            }


            <div className='body'>
                <span className='text-muted fs-12'>{category}</span>
                <a href="#" className='title d-block '>{title}</a>


                {
                    hover ? (<div className='details flexBetween aCenter'>
                        <span className='d-btn'>
                            <BsEye />
                        </span>
                        <span className='d-btn'>
                            <BsHeart />
                        </span>
                        <span className='d-btn'>
                            <BsArrowDownUp />
                        </span>

                    </div>)
                        :
                        (<div>
                            <p className='rating'>
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <span className='text-muted ms-1'>({rating})</span>
                            </p>
                            <div className='pt-1'>
                                <span className='text-secondary bold me-1'>${salePrice}</span>
                                <span className='line-throw offer-price text-muted'>${offerPrice}</span>
                            </div>
                        </div>)

                }





                <div className='mt-2'>
                    <button className='btn btn-cart'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FlashProduct;