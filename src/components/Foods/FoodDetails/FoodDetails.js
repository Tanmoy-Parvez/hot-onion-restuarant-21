import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useMeal from '../../../hooks/useMeal';

const FoodDetails = () => {
    const { foodId } = useParams();
    const [meals, setMeals] = useMeal();
    const [cart, setCart] = useState([]);
    const history = useHistory();
    const foodItem = meals.find(food => food.id === parseInt(foodId));

    const myStyle = {
        textAlign: 'justify',
    }
    const handleAddToCart = (meal) => {
        const newCount = [...cart, meal];
        setCart(newCount);
        history.push("/shipping")
    }


    return (
        <div className="container">
            <div className="row d-flex align-items-center my-5">
                <div className="col-md-6 ps-5">
                    <h1>{foodItem?.title}</h1>
                    <p style={myStyle}>{foodItem?.description}</p>
                    <h1>${foodItem?.price}</h1>
                    <button onClick={() => handleAddToCart(foodItem.id)} className="btn btn-danger rounded-pill px-3">
                        <i className="fas fa-shopping-cart"></i> Add
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