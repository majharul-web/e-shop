import React from 'react';
import { BsArrowLeftShort, BsArrowRightCircleFill } from 'react-icons/bs';
import { splitString } from '../../utils/helper';
import Product from './Product';
const TrendingCat = ({ cat, index }) => {
    const { category, products } = cat
    const titleArr = splitString(category);
    return (
        <div className={`col-12 col-md-4`}>
            <div className='flexBetween aCenter py-2 py-md-3'>
                <h3 className='ter-title'><b>{titleArr[0]}</b> {titleArr[1]}</h3>
                <div className='flexBetween aCenter'>
                    <BsArrowLeftShort size={20} />
                    <BsArrowRightCircleFill size={20} className='ms-2' />
                </div>
            </div>
            <div>
                {
                    products.map(((product, id) => <Product key={id} product={product} />))
                }

                <div className='py-3'>
                    <button className='btn btn-dark'>VIEW ALL</button>
                </div>
            </div>
        </div>
    );
};

export default TrendingCat;