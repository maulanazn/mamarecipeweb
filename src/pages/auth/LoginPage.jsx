import { useState } from 'react';
import './../../assets/css/login.css';
import { useNavigate } from 'react-router';
import axios from 'axios';
import {URL} from './../../config/URL';

export default function LoginPage() {
    const navigate = useNavigate();
    const [login, handleLogin] = useState({
        email: '',
        password: ''
    });

    const loginUser = (e) => {
        e.preventDefault();

        let bodyLogin = new FormData();
        bodyLogin.append('email', login.email);
        bodyLogin.append('password', login.password);

        axios.post(`${URL}/login`, bodyLogin, {headers: {
            "Content-Type": "application/json"
        }
            }).then(res => {
                localStorage.setItem("token", res.data.accesstoken);
                localStorage.setItem("name", res.data.data.name);
                localStorage.setItem("photo", res.data.data.photo);
                localStorage.setItem("email", res.data.data.email);

                navigate('/')
            })
            .catch(err => console.error(err.message));
    }

    const onLogin = (e) => {
        handleLogin({
            ...login,
            [e.target.name]:e.target.value
        })
    }

    return (
        <>
            <header>
                <p id="title">Recipe...</p>
                <p id="title-motto">Welcome</p>
                <p id="info">Log in into your existing account</p>
            </header>

            <section className="form">
                <form onSubmit={loginUser}>
                    <label className="label-email" htmlFor="email">
                        Email
                    </label>
                    <br/>
                    <input value={login.email} onChange={onLogin} type="email" name="email" id="email" placeholder="Enter email address"  required/>
                    <br/>
                
                    <label className="label-password" htmlFor="password">
                        Password
                    </label>
                    <br/>
                    <input value={login.password} onChange={onLogin} type="text" name="password" id="password" placeholder="Password" required/>
                    <br/>
                
                    <label className="check-box">
                        <input type="checkbox" name="agree-terms" required/>
                        <span className="check-mark"></span>
                        I agree to terms & conditions
                    </label>
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </section>
            <p className="question-text">Dont have an account? <a className="link" href="register.html">Sign up</a></p>
        </>
    )
}
