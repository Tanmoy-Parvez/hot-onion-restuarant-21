import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useMeal from "../../../hooks/useMeal"

const Breakfast = () => {
    const [meals, setMeals] = useMeal();
    return (
        <Row xs={1} md={3} className="g-4 container mx-auto">
            {
                meals.slice(0, 6).map(breakfast => <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50 mx-auto" src={breakfast.img} />
                        <Card.Body className="text-center">
                            <Card.Title>{breakfast.title}</Card.Title>
                            <Card.Text>
                                {breakfast.detail}
                            </Card.Text>
                            <Card.Title>${breakfast.price}</Card.Title>
                        </Card.Body>
                        <Link to={`/details/${breakfast.id}`} className="mx-auto mb-3">
                            <Button variant="danger" className="rounded-pill px-4">Details</Button>
                        </Link>
                    </Card>
                </Col>)
            }
        </Row>
    );
};

export default Breakfast;