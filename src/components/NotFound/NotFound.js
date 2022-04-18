import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='site-mw mx-auto my-5'>
            <div className="error404 d-flex justify-content-center">
                <div className="bg-white p-5">
                    <img src={img} alt="404" className='' />
                    <div className="align-items-center d-flex flex-column mt-4">
                        <h2 className='m-0'>Page Not Found !</h2>
                        <Button variant='primary' as={Link} to='/' className='mt-4 px-4'>Home</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;