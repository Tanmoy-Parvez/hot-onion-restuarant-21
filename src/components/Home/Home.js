import React from 'react';
import FoodNav from '../Foods/FoodNav/FoodNav';
import Banner from '../Header/Banner/Banner';
import MenuBar from '../Header/MenuBar/MenuBar';

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <FoodNav></FoodNav>
        </div>
    );
};

export default Home;