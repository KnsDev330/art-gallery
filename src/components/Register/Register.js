import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import './Register.css';
import googleSvg from '../../images/google.svg';
import { toast } from 'react-toastify';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
const toastConfig = { position: "top-right", autoClose: 2000 };

const Register = () => {

    const navigate = useNavigate();

    // handle email registration
    const [createUser, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const HandleRegister = e => {
        e.preventDefault();
        const [nameBox, emailBox, passwordBox] = [e.target.name, e.target.email, e.target.password];
        const [name, email, password] = [nameBox.value, emailBox.value, passwordBox.value];
        if (name !== "" && name.length < 4) {
            toast.error(`Name must be at least 4 characters long`, toastConfig);
            nameBox.focus(); return;
        }
        if (password.length < 6) {
            toast.error(`Password must be at least 6 characters long`, toastConfig);
            passwordBox.focus(); return;
        }
        createUser(email, password);
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
        const err = error || error2;
        if (err) {
            toast.error(`${err.code.slice(5).replace(/-/g, ' ')}`, toastConfig);
        }
        if (user || user2) {
            navigate(JSON.parse(localStorage.getItem("toLocation"))?.pathname || '/');
            localStorage.removeItem("toLocation");
        }
    }, [navigate, user, user2, error, error2]);

    return (
        <div className='site-mw mx-auto my-5'>
            <div className='register d-flex flex-column align-items-center pt-4 pb-5 mb-5'>

                <h2>Register</h2>
                <small className='mb-4'>Register now to book an event with us and much more</small>

                <form className='w-100' onSubmit={HandleRegister}>
                    <label htmlFor="name" className='text-label'>Name:</label>
                    <input type="text" autoComplete='on' className='form-control mx-auto mb-2' name="name" id="name" placeholder='Your Name' />
                    <label htmlFor="email" className='text-label'>Email:</label>
                    <input type="email" autoComplete='on' className='form-control mx-auto mb-2' name="email" id="email" placeholder='Enter Email' />
                    <label htmlFor="name" className='text-label'>Password:</label>
                    <input type="password" autoComplete='on' className='form-control mx-auto' name="password" id="password" placeholder='Enter Password' />
                    <Button variant='success' type='submit' className='my-3 px-5'>Register</Button>
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

export default Register;