import React from 'react';
import me from '../../images/me.jpg';

const AboutMe = () => {
    return (
        <div className='site-mw mx-auto my-5'>
            <div className="error404 d-flex justify-content-center">
                <div className="bg-white p-lg-5 p-3">
                    <img src={me} alt="Khandaker Sajjat" style={{ boxShadow: '0 0px 12px 0px black' }} />
                    <div className="align-items-center d-flex flex-column">
                        <h2 className='mt-4'>About Me</h2>
                        <p className='mt-3' style={{ color: '707070' }}>
                            Hi, my name is <strong>Khandaker Sajjat</strong>. <br />
                            My goal is becoming a <strong>Full Stack Web Developer</strong>. Iam currently learning React from an online course runned by <strong>Programming Hero.</strong> <br />
                            I have been keeping up with the course flow till now, and hope will be able to continue till the end of the course.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;