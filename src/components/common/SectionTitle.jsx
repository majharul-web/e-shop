import React from 'react';
import { splitString } from '../../utils/helper';

const SectionTitle = ({ title }) => {
    const titleArr = splitString(title);
    return (
        <div className='section-title'>
            <h2 className='title'> <b>{titleArr[0]}</b> {titleArr[1]} </h2>
        </div>
    );
};

export default SectionTitle;