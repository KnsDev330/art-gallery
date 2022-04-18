import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Booked = () => {
    return (
        <div className='site-mw mx-auto my-5'>
            <div className="error404 d-flex justify-content-center">
                <div className="bg-white p-5">
                    <div className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '100px', color: '#00ab00' }} />
                    </div>
                    <div className="align-items-center d-flex flex-column mt-4">
                        <h2>Success</h2>
                        <p className='text-center'>Your order has been recorded. We will contact you soon.</p>
                        <h6 className='mt-3'>Thank You</h6>
                        <Button variant='outline-success' as={Link} to='/' className='mt-2 px-4'>Home</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booked;