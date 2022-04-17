import logo from '../../images/logo.png';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import { useAuthState } from 'react-firebase-hooks';

import './Header.css';
import { Link } from 'react-router-dom';
// import { auth } from '../../firebase.init';

const Header = () => {
    // const [user] = useAuthState(auth);
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='navbar'>
            <Container className='site-mw'>
                <Navbar.Brand as={Link} to='/' ><img src={logo} alt="Art Gallery" className='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link as={Link} to='/order' >Order</Nav.Link>
                        <Nav.Link as={Link} to='/about-me' >About Me</Nav.Link>
                        <Nav.Link as={Link} to='/blogs' >Blogs</Nav.Link>
                        <Button variant='outline-primary' as={Link} to='/login' className='me-2'>Login</Button>
                        <Button variant='primary' as={Link} to='/register'>Register</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;