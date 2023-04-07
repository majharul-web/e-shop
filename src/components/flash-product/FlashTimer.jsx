import React from 'react';


const FlashTimer = () => {
    return (
        <div className='flex aCenter timer ms-0 ms-md-2 my-3 my-md-0'>
            <p>
                <span className='count'>2d</span>:
                <span className='count'>15h</span>:
                <span className='count'>21m</span>:
                <span className='count'>47s</span>
            </p>
        </div>
    );
};

export default FlashTimer;