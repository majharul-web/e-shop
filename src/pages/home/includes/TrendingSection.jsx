import React from 'react';
import SectionTitle from '../../../components/common/SectionTitle';
import TrendingCat from '../../../components/trending-section/TrendingCat';
import { trendingProducts } from '../../../utils/helper';

const TrendingSection = () => {
    return (
        <div className='bg-light-2 py-3'>
            <div className='container-fluid trending-section my-4'>
                <SectionTitle title="Trending Product" />

                <div className='products-section'>
                    <div className="row">
                        {
                            trendingProducts.map(((cat, index) => <TrendingCat cat={cat} key={index} />))
                        }
                    </div>
                </div>
            </div>
        </div>


    );
};

export default TrendingSection;