import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Assets/Styles/Register.css';
import Back from '../Assets/Images/arrow_back.svg';
import axios from 'axios';

function Register() {
    const url = 'http://127.0.0.1:8000/api/users/';

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    function handle(e) {
        const newFormData = { ...formData };
        newFormData[e.target.id] = e.target.value;
        setFormData(newFormData);
    }

    function handlePasswordConfirmation(e) {
        setPasswordConfirmation(e.target.value);
    }

    function submit(e) {
        e.preventDefault();
        if (formData.password !== passwordConfirmation) {
            alert("Passwords do not match");
        } else {
            axios.post(url, {
                username: formData.username,
                email: formData.email,
                password: formData.password
            })
                .then(res => {
                    console.log(res.data);
                })
        }
    }

    return (
        <div className="page">
            <Link to="/"><img className="home-arrow" src={Back} alt="back arrow" /></Link>
            <form className="login-form" onSubmit={(e) => submit(e)}>
                <h1>REGISTER</h1>
                <label>Username</label>
                <input
                    onChange={(e) => handle(e)}
                    type="text"
                    name="username"
                    id="username"
                />
                <label>E-mail</label>
                <input
                    onChange={(e) => handle(e)}
                    type="email"
                    name="email"
                    id="email"
                />
                <label>Password</label>
                <input
                    onChange={(e) => handle(e)}
                    type="password"
                    name="password"
                    id="password"
                />
                <label>Password confirmation</label>
                <input
                    onChange={(e) => handlePasswordConfirmation(e)}
                    type="password"
                    name="password2"
                />
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register;
