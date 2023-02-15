import React from "react";
import { Link } from "react-router-dom";
import '../Assets/Styles/Login.css';
import Back from '../Assets/Images/arrow_back.svg'


function Login() {
    return (
        <div className="page">
            <Link to="/"><img className="home-arrow" src={Back} alt="back arrow"/></Link>
            <div className="login-form">
                <h1>LOGIN</h1>
                    <label>Username</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                    <a href="#">Forgot your password?</a>
                    <a href="#" className="submit">Submit</a>
            </div>
        </div>
    )
}

export default Login;