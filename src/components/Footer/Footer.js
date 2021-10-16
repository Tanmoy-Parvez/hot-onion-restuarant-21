import React from 'react';
import img from '../../images/logo.png'


const Footer = () => {
    return (
        <div className="bg-dark px-5 pt-5 pb-2 mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={img} alt="" className="w-50" />
                </div>
                <div className="col-md-3 text-light">
                    <p>About online food</p>
                    <p>Read our blog</p>
                    <p>Sign up to deliver</p>
                    <p>Add your restaurant</p>
                </div>
                <div className="col-md-3 text-light">
                    <p>Get Helps</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurants near me</p>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-8">
                    <p className="text-secondary">Copyrignt &copy; 2021 online food</p>
                </div>
                <div className="col-md-4 d-flex text-light justify-content-around">
                    <p>Privacy Policy</p>
                    <p>Terms and Use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;