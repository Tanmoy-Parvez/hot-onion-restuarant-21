import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import "./FoodNav.css"

const FoodNav = () => {
    const [menuTab, setMenuTab] = useState('Breakfast');

    const handleMenu = (type) => {
        if (type === 'Breakfast') {
            setMenuTab("Breakfast")
        }
        else if (type === 'Lunch') {
            setMenuTab("Lunch")
        }
        else {
            setMenuTab("Dinner")
        }
    }
    return (
        <div>
            <Navbar expand="lg" className="my-5">
                <Container>
                    <Nav className="mx-auto nav-item">
                        <button onClick={() => handleMenu("Breakfast")}>Breakfast</button>
                        <button onClick={() => handleMenu("Lunch")} >Lunch</button>
                        <button onClick={() => handleMenu("Dinner")} >Dinner</button>
                    </Nav>
                </Container>
            </Navbar>
            <div className="my-5">
                {
                    (menuTab === "Breakfast") ? <Breakfast /> : (menuTab === "Lunch") ? <Lunch /> : <Dinner />

                }
            </div>
        </div>
    );
};

export default FoodNav;