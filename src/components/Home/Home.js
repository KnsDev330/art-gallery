import { Carousel } from 'react-bootstrap';
import React from 'react';
import img1 from '../../images/slider-1.jpg';
import img2 from '../../images/slider-2.jpg';
import img3 from '../../images/slider-3.jpg';

import './Home.css';
import Packages from '../Packages/Packages';
import MyWorks from '../MyWorks/MyWorks';

const Home = () => {
    return (
        <div className='mx-auto p-0' id='lolch'>
            <Carousel fade className='carousel' interval={1000} indicators={false} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Wedding</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>OutDoor</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>InDoor</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <div className="site-mw mx-auto">
                <Packages></Packages>
                <MyWorks></MyWorks>
            </div>
        </div>
    );
};

export default Home;