import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Label from '../Label/Label';
import './Package.css';

const Package = ({ pack }) => {
    return (
        <Card style={{ width: '18rem' }} className='package'>
            <div className="package-image">
                {pack.id === 2 && <Label></Label>}
                <Card.Img variant="top" src={pack.image} className={pack.id === 2 && 'img-120'} />
            </div>
            <div className='mt-auto'>
                <Card.Body className=''>
                    <Card.Title>{pack.name}</Card.Title>
                    <Card.Text>Price: {pack.price} BDT</Card.Text>
                    <Card.Text>
                        {pack.desc}
                    </Card.Text>
                    <Button variant={pack.id === 2 ? 'success' : 'outline-success'} as={Link} to={`/package/${pack.id}`} className='d-block mx-auto w-50'>Book Now</Button>
                </Card.Body>
            </div>
        </Card >
    );
};

export default Package;