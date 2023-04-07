import React from 'react';
import { FaStar } from 'react-icons/fa';
import p1 from "../../assets/products/p1.png"

const Product = ({ product }) => {
  console.log("product", product)
  return <div className='trending-product-card'>
    <span className='sale-badge'>Sale</span>
    <div className="flex aCenter">
      <div className='col-3 flexCenter'>
        <img className='product-img' src={product.image} alt="" />
      </div>
      <div className='col-9'>
        <p className='rating'>
          <FaStar className='star' />
          <FaStar className='star' />
          <FaStar className='star' />
          <FaStar className='star' />
          <FaStar className='star' />
          <span className='text-muted ms-1'>(5.0)</span>
        </p>
        <a href="#">Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television</a>
        <div className='pt-1'>
          <span className='text-secondary bold me-1'>$2036.00</span>
          <span className='line-throw offer-price text-muted'>$3000.00</span>
        </div>
      </div>
    </div>
  </div>;
};

export default Product;
