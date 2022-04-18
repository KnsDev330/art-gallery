import React from 'react';
import './MyWork.css';

const MyWork = ({ work }) => {
    return (
        <div className='mywork'>
            <img src={work.image} alt="" />
            <h2>{work.title}</h2>
        </div>
    );
};

export default MyWork;