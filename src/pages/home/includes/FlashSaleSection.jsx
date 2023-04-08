import React from 'react';
import flashImg from '../../../assets/flash-banner.png'
import SectionTitle from '../../../components/common/SectionTitle';
import { BsArrowLeftShort, BsArrowRightCircleFill } from 'react-icons/bs';
import FlashTimer from '../../../components/flash-product/FlashTimer';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { flashProducts } from '../../../utils/helper';
import FlashProduct from '../../../components/flash-product/FlashProduct';


const FlashSaleSection = () => {

    let [width] = useWindowSize();
    width = width ? width : window.innerWidth;

    return (
        <div className='container-fluid flash-section my-4'>
            <div className="row">

                <div className="col-md-10 ">

                    <div className='h-100'>
                        {/* conditionally header change */}

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
                        {/* section header end */}

                        {/* show only mobile view */}
                        <div className="d-block d-md-none">
                            <div className='flash-banner flexCenter mt-0 mt-md-3'>
                                <img src={flashImg} alt="Flash sale" />
                            </div>
                        </div>

                        <div className="flash-product-section">
                            {
                                flashProducts.map((product, id) => <FlashProduct product={product} key={id} />)
                            }
                        </div>
                        {/* end flash products section  */}
                    </div>

                </div>
                {/* end col-md-10 */}

                {/* show without mobile view */}
                <div className="col-md-2 d-none d-md-block ">
                    <div className='flash-banner flexCenter mt-0 mt-md-3'>
                        <img src={flashImg} alt="Flash sale" />
                    </div>
                </div>
                {/* end col-md-2 */}

            </div>
            {/* end row */}

        </div>
    );
};

export default FlashSaleSection;