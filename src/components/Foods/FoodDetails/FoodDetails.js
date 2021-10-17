import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useMeal from '../../../hooks/useMeal';

const FoodDetails = () => {
    const { foodId } = useParams();

    const [meals, setMeals] = useMeal();
    const foodItem = meals.find(food => food.id === parseInt(foodId));

    const history = useHistory();
    const handleAddToCart = () => {
        history.push("/shipping")
    }

    const myStyle = {
        textAlign: 'justify',
    }
    return (
        <div className="container">
            <div className="row d-flex align-items-center my-5">
                <div className="col-md-6 ps-5">
                    <h1>{foodItem?.title}</h1>
                    <p style={myStyle}>{foodItem?.description}</p>
                    <h1>${foodItem?.price}</h1>
                    <button onClick={handleAddToCart} className="btn btn-danger mt-2 rounded-pill px-3">
                        <i className="fas fa-shopping-cart"></i> Order Now
                    </button>
                </div>
                <div className="col-md-6 ps-5">
                    <img src={foodItem?.img} alt="" className="w-75" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;