import { Button } from 'react-bootstrap';
import React from 'react';
import './Login.css';
import googleSvg from '../../images/google.svg';
import { toast } from 'react-toastify';
const toastConfig = { position: "top-right", autoClose: 2000 };

const Login = () => {
    // const [] = useCreateUserWi
    const HandleLogin = e => {
        e.preventDefault();
        const [emailBox, passwordBox] = [e.target.email, e.target.password];
        const [email, password] = [emailBox.value, passwordBox.value];

        if (email.length < 4) {
            toast.error(`Email is not valid`, toastConfig);
            emailBox.focus();
            return;
        }
        if (password.length < 6) {
            toast.error(`Password must be at least 6 characters long`, toastConfig);
            passwordBox.focus();
            return;
        }
    }
    return (
        <div className='site-mw mx-auto'>
            <div className='register d-flex flex-column align-items-center pt-4 pb-5 mb-5'>

                <h2>Login</h2>
                <small className='mb-4'>Log in to your account</small>

                <form className='w-100' onSubmit={HandleLogin}>
                    <label htmlFor="email" className='text-label'>Email:</label>
                    <input type="email" autoComplete='on' className='form-control mx-auto mb-2' name="email" id="email" placeholder='Enter Email' />
                    <label htmlFor="name" className='text-label'>Password:</label>
                    <input type="password" autoComplete='on' className='form-control mx-auto' name="password" id="password" placeholder='Enter Password' />
                    <Button variant='success' type='submit' className='my-3 px-5 out'>Login</Button>
                </form>

                <div className='my-3'>
                    <hr className='login-hr' /> OR <hr className='login-hr' />
                </div>

                <button className='continue-with-button d-flex align-items-center'>
                    <img src={googleSvg} alt="Google" />
                    <p>Continue with Google</p>
                </button>

            </div>
        </div >
    );
};

export default Login;