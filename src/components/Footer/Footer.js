import React from 'react';
import './Footer.css';

import social_1 from '../../images/social/facebook.svg'
import social_2 from '../../images/social/github.svg'
import social_3 from '../../images/social/instagram.svg'
import social_4 from '../../images/social/telegram.svg'
import social_5 from '../../images/social/pinterest.svg'
import social_6 from '../../images/social/twitter.svg'

import appstore from '../../images/appstore.png'
import playstore from '../../images/playstore.png'

const Footer = () => {
    return (
        <footer className='bg-dark d-flex flex-lg-row flex-column justify-content-around align-items-center mt-auto pb-5 py-lg-5'>
            <div className="followmeon text-white my-5">
                <div className='text-center mb-3'><small>Follow me on:</small></div>
                <div className="socials d-flex flex-wrap gap-1 justify-content-center">
                    <div className="social"><a href='https://t.me/KnsDev330' target="_blank" rel="noreferrer"><img src={social_1} alt="" /></a></div>
                    <div className="social"><a href='https://t.me/KnsDev330' target="_blank" rel="noreferrer"><img src={social_2} alt="" /></a></div>
                    <div className="social"><a href='https://t.me/KnsDev330' target="_blank" rel="noreferrer"><img src={social_3} alt="" /></a></div>
                    <div className="social"><a href='https://t.me/KnsDev330' target="_blank" rel="noreferrer"><img src={social_4} alt="" /></a></div>
                    <div className="social"><a href='https://t.me/KnsDev330' target="_blank" rel="noreferrer"><img src={social_5} alt="" /></a></div>
                    <div className="social"><a href='https://t.me/KnsDev330' target="_blank" rel="noreferrer"><img src={social_6} alt="" /></a></div>
                </div>
            </div>
            <div className="copyright text-white mt-lg-0 mt-5">
                <p className='text-center m-0'>Copyright &copy; 2022, All Rights Reserved</p>
            </div>
            <div className="gettheapp text-white d-flex flex-column align-items-center gap-2">
                <p className='text-center m-0'>Get The App</p>
                <div><a href='https://t.me/KnsDev330' target="_blank" rel="noreferrer"><img src={playstore} alt="" /></a></div>
                <div><a href='https://t.me/KnsDev330' target="_blank" rel="noreferrer"><img src={appstore} alt="" /></a></div>
            </div>
        </footer>
    );
};

export default Footer;