import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner d-flex justify-content-center align-items-center">
            <div>
                <h1 className="mb-4">Best Food Waiting For Your Belly</h1>
                <Form className="d-flex w-75 mx-auto">
                    <FormControl
                        type="search"
                        placeholder="Search food items"
                        className="me-1 ps-3 rounded-pill"
                        aria-label="Search"
                    />
                    <Button variant="danger" className="rounded-pill px-4">Search</Button>
                </Form>
            </div>
        </div>
    );
};

export default Banner;