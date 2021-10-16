import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../images/header-imgs/logo2.png';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';

const MenuBar = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();

    const handleLogIn = () => {
        history.push("/login")
    }
    const handleSignUp = () => {
        history.push("/register")
    }
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
                        {user?.email ? <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                            <Button onClick={logOut} variant="danger" className="mx-3 rounded-pill px-4">Log Out</Button>
                        </Navbar.Text>
                            :
                            <div className="d-flex">
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>
                                </Nav.Link>
                                <Button onClick={handleLogIn} variant="danger" className="mx-3 rounded-pill px-4">Login</Button>
                                <Button onClick={handleSignUp} variant="danger" className="rounded-pill px-4">Sign up</Button>
                            </div>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default MenuBar;