import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="danger" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="text-light">Jewel Barua</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className="text-light"as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/about">Projects</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/about">Portfolio</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/about">Contact</Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;