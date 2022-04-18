import React from 'react';
import useWorks from '../../Hooks/useWorks/useWorks';
import MyWork from '../MyWork/MyWork';
import './MyWorks.css';

const MyWorks = () => {
    const [works] = useWorks();

    return (
        <div className='my-5 pt-5 bg-white myworks-div mx-auto' style={{ maxWidth: '90%' }}>
            <h2 className='mb-5 text-center'>Some of My Works</h2>
            <div className="mywworks d-flex mx-auto flex-wrap justify-content-center gap-4">
                {
                    works.map(work => <MyWork key={work.id} work={work} />)
                }
            </div>
        </div>
    );

};

export default MyWorks;