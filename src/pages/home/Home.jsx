import React from 'react';
import TrendingSection from './includes/TrendingSection';
import FlashSaleSection from './includes/FlashSaleSection';

const Home = () => {
    return (
        <div className='py-2'>
            <FlashSaleSection />
            <TrendingSection />
        </div>
    );
};

export default Home;