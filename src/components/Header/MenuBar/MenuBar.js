import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../images/header-imgs/logo2.png'

const MenuBar = () => {
    return (
        <>
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="130"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <i className="fas fa-shopping-cart"></i>
                        </Nav.Link>
                        <Nav.Link href="#features" className="mx-3">Login</Nav.Link>
                        <Button variant="danger" className="rounded-pill px-4">SIgn up</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default MenuBar;