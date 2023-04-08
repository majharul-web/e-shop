import React from 'react';
import Countdown from 'react-countdown';


// Random component
const Completionist = () => (
    <span className='pt-3 text-danger bold'>
        Deals closed
    </span>
);

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <p>
                <span className='count'>{days}d</span>:
                <span className='count'>{hours}h</span>:
                <span className='count'>{minutes}m</span>:
                <span className='count'>{seconds}s</span>
            </p>
        );
    }
};

const FlashTimer = () => {

    const expireDate = Date.now() + 100000000;
    return (
        <div className='flex aCenter timer ms-0 ms-md-2 my-3 my-md-0'>

            <Countdown date={expireDate} renderer={renderer} />

        </div>
    );
};

export default FlashTimer;