import React from 'react';
import { FaStar } from 'react-icons/fa';
import LazyImage from '../common/LazyImage';

const Product = ({ product }) => {

  return <div className='trending-product-card'>
    <span className='sale-badge'>Sale</span>
    <div className="flex aCenter py-0 py-lg-3">
      <div className='col-3 flexCenter'>
        <LazyImage imageSrc={product.image} classes="product-img" />
      </div>
      <div className='col-9'>
        <p className='rating'>
          <FaStar className='star' />
          <FaStar className='star' />
          <FaStar className='star' />
          <FaStar className='star' />
          <FaStar className='star' />
          <span className='text-muted ms-1'>({product.rating})</span>
        </p>
        <a href="#" className='title'>{product.title}</a>
        <div className='pt-1'>
          <span className='text-secondary bold me-1'>${product.salePrice}</span>
          <span className='line-throw offer-price text-muted'>${product.offerPrice}</span>
        </div>
      </div>
    </div>
  </div>;
};

export default Product;
