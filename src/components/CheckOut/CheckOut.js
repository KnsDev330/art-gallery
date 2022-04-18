import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import './CheckOut.css';
import googleSvg from '../../images/google.svg';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import usePackages from '../../Hooks/usePackages/usePackages';
import './CheckOut.css';

const CheckOut = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [packages] = usePackages();

    return (
        <div className='site-mw mx-auto my-5'>
            <div className='register d-flex flex-column align-items-center pt-4 pb-5 mb-5'>

                <h2>Checkout</h2>
                <small className='mb-2'>You are checking out with our package {id}</small>
                <h3 className='mb-4'>{packages[id - 1]?.name && packages[id - 1]?.name} - {packages[id - 1]?.price && packages[id - 1]?.price} BDT</h3>

                <form className='w-100' onSubmit={() => navigate('/booked')}>
                    <label htmlFor="name" className='text-label'>Name:</label>
                    <input type="text" autoComplete='on' className='form-control mx-auto mb-2' name="name" id="name" placeholder='Your Name' />
                    <label htmlFor="name" className='text-label'>Number:</label>
                    <input type="text" autoComplete='on' className='form-control mx-auto mb-2' name="phone" id="phone" placeholder='+8801xxxxxxxxx' required />
                    <label htmlFor="name" className='text-label'>Event Date:</label>
                    <input type="date" className='form-control mx-auto mb-2' name="date" id="date" required />
                    <Button variant='success' type='submit' className='my-3 px-5'>Book</Button>
                </form>

            </div>
        </div >
    );
};

export default CheckOut;