import React from 'react';
import './MyWork.css';

const MyWork = ({ work }) => {
    return (
        <div className='mywork' style={{ padding: '10px' }}>
            <img src={work.image} alt="" />
            <h2>{work.title}</h2>
        </div>
    );
};

export default MyWork;