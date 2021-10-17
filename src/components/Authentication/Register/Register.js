import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/header-imgs/logo2.png';

const Register = () => {
    const { user, googleSignIn } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const handleSignUp = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_url);
            })

    }

    return (
        <div className="form text-center">
            <div className="container py-5">
                <img src={logo} alt="" className="w-25" />
                <div className="container w-75 mt-3">
                    <div className="bg-white w-50 mx-auto py-4 px-5 rounded-3">
                        <form>
                            <input type="text" placeholder="Enter Your Name" className="form-control  mx-auto mb-4" />
                            <input type="email" placeholder="Enter Your Email" className="form-control  mx-auto" />
                            <input type="password" placeholder="Enter Your Password" className="form-control mx-auto my-4" />
                            <input type="submit" value="Sign Up" className="mb-3 form-control bg-danger text-light" />
                        </form>
                        <p>Already have an account? <Link to="/login" className="text-danger">Login</Link></p>

                        --------------------- or---------------------

                        <button onClick={handleSignUp} className="btn btn-outline-secondary mt-3 form-control">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" width="25px" /> Google Sign Up</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Register;