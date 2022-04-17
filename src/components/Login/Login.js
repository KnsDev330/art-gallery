import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import './Login.css';
import googleSvg from '../../images/google.svg';
import { toast } from 'react-toastify';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
const toastConfig = { position: "top-right", autoClose: 2000 };

const Login = () => {
    const navigate = useNavigate();

    // handle email login
    const [SignIn, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const HandleLogin = e => {
        e.preventDefault();
        const [emailBox, passwordBox] = [e.target.email, e.target.password];
        const [email, password] = [emailBox.value, passwordBox.value];
        if (password.length < 6) {
            toast.error(`Password must be at least 6 characters long`, toastConfig);
            passwordBox.focus(); return;
        }
        SignIn(email, password);
        if (loading) return;
        if (error) return toast.error(`${error.code.slice(5).replace(/-/g, ' ')}`, toastConfig);
    }

    // handle google registration
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const HandleGoogleSignIn = e => {
        signInWithGoogle();
        if (loading2) return;
        if (error2) return toast.error(`${error.code.slice(5).replace(/-/g, ' ')}`, toastConfig);
    }

    // navigate user on successfull registration
    useEffect(() => {
        if (user || user2) {
            localStorage.removeItem("toLocation");
            navigate(JSON.parse(localStorage.getItem("toLocation"))?.pathname || '/');
        }
    }, [navigate, user, user2]);

    return (
        <div className='site-mw mx-auto my-5'>
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

                <button className='continue-with-button d-flex align-items-center' onClick={HandleGoogleSignIn}>
                    <img src={googleSvg} alt="Google" />
                    <p>Continue with Google</p>
                </button>

            </div>
        </div >
    );
};

export default Login;