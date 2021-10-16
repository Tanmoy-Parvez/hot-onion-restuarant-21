import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

const Register = () => {
    const { user, googleSignIn } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const handleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_url);
            })

    }
    return (
        <div className="login-form text-center container px-5">
            <h1>Create an account</h1>
            <form>
                <input type="email" placeholder="Enter your email" className="form-control w-25 mx-auto" />
                <input type="password" placeholder="Enter your password" className="form-control w-25 mx-auto my-3" />
                <input type="submit" value="Submit" className="my-2" />
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>

            --------------------- or ---------------------
            <br />
            <button onClick={handleSignIn} className="btn btn-primary">Google Sign Up</button>
        </div>
    );
};

export default Register;