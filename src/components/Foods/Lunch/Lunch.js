import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useMeal from '../../../hooks/useMeal';

const Lunch = () => {
    const [meals, setMeals] = useMeal();
    return (
        <Row xs={1} md={3} className="g-4 container mx-auto">
            {
                meals.slice(6, 12).map(lunch => <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50 mx-auto" src={lunch.img} />
                        <Card.Body className="text-center">
                            <Card.Title>{lunch.title}</Card.Title>
                            <Card.Text>
                                {lunch.detail}
                            </Card.Text>
                            <Card.Title>${lunch.price}</Card.Title>
                        </Card.Body>
                        <Link to={`/details/${lunch.id}`} className="mx-auto mb-3">
                            <Button variant="danger" className="rounded-pill px-4">Details</Button>
                        </Link>
                    </Card>
                </Col>)
            }
        </Row>
    );
};

export default Lunch;