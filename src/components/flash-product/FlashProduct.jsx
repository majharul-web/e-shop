import React, { useState } from 'react';
import tv1 from '../../assets/products/tv1.png'
import { FaStar } from 'react-icons/fa';
import { BsArrowDownUp, BsHeart, BsEye } from 'react-icons/bs';

const FlashProduct = ({ product }) => {
    const { type, category, title, rating, salePrice, offerPrice } = product
    const [hover, setHover] = useState("false")
    console.log("hover", hover);
    return (
        <div className="flash-product-card mt-3" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <span className={`${type === "Sale" ? 'sale-badge' : 'new-badge '}`}>{type}</span>
            <div className='flexCenter mt-2'>
                <img src={tv1} alt="" />
            </div>
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