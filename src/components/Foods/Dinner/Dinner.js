import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useMeal from '../../../hooks/useMeal';

const Dinner = () => {
    const [meals, setMeals] = useMeal();
    return (
        <Row xs={1} md={3} className="g-4 container mx-auto">
            {
                meals.slice(12, 18).map(dinner => <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50 mx-auto" src={dinner.img} />
                        <Card.Body className="text-center">
                            <Card.Title>{dinner.title}</Card.Title>
                            <Card.Text>
                                {dinner.detail}
                            </Card.Text>
                            <Card.Title>${dinner.price}</Card.Title>
                        </Card.Body>
                        <Link to={`/details/${dinner.id}`} className="mx-auto mb-3">
                            <Button variant="danger" className="rounded-pill px-4">Details</Button>
                        </Link>
                    </Card>
                </Col>)
            }
        </Row>
    );
};

export default Dinner;