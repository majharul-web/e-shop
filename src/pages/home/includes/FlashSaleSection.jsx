import React from 'react';
import flashImg from '../../../assets/flash-banner.png'
import SectionTitle from '../../../components/common/SectionTitle';
import { BsArrowLeftShort, BsArrowRightCircleFill } from 'react-icons/bs';
import FlashTimer from '../../../components/flash-product/FlashTimer';
import { useWindowSize } from '../../../hooks/useWindowSize';

const FlashSaleSection = () => {

    let [width] = useWindowSize();
    width = width ? width : window.innerWidth;

    return (
        <div className='container-fluid flash-section my-4'>
            <div className="row">
                <div className="col-md-10">
                    {
                        width >= 768 ? <div className='flash-header-lg flexBetween aCenter'>
                            <div className='left-box flex aCenter'>
                                <SectionTitle title="Flash Sale Product" />
                                <FlashTimer />
                            </div>

                            <div className='flexBetween aCenter d-none d-md-block'>
                                <BsArrowLeftShort size={20} />
                                <BsArrowRightCircleFill size={20} className='ms-2' />
                            </div>
                        </div> :
                            <div className='flash-header-sm'>
                                <SectionTitle title="Flash Sale Product" />
                                <div className='flexBetween'>
                                    <FlashTimer />
                                    <div className='flexBetween aCenter '>
                                        <BsArrowLeftShort size={20} />
                                        <BsArrowRightCircleFill size={20} className='ms-2' />
                                    </div>
                                </div>
                            </div>
                    }


                </div>
                <div className="col-md-2">
                    <div className='flash-banner flexCenter'>
                        <img src={flashImg} alt="Flash sale" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FlashSaleSection;