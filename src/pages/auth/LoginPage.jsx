import { useState } from 'react';
import { useNavigate } from 'react-router';
import './../assets/css/login.css';
import { useDispatch, useSelector } from 'react-redux';
import {loginAction} from './../../redux/actions/AuthAction.js';

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {errorMessage} = useSelector(state => state.login);
    const [dataLogin, handleDataLogin] = useState({
        email: '',
        password: ''
    });

    const loginUser = (e) => {
        e.preventDefault();
        dispatch(loginAction(dataLogin, navigate));
    }

    const onLogin = (e) => {
        handleDataLogin({
            ...dataLogin,
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

            {errorMessage && <h1>Ada yang salah</h1>}

            <section className="form">
                <form onSubmit={loginUser}>
                    <label className="label-email" htmlFor="email">
                        Email
                    </label>
                    <br/>
                    <input value={dataLogin.email} onChange={onLogin} type="email" name="email" id="email" placeholder="Enter email address"  required/>
                    <br/>
                
                    <label className="label-password" htmlFor="password">
                        Password
                    </label>
                    <br/>
                    <input value={dataLogin.password} onChange={onLogin} type="password" name="password" id="password" placeholder="Password" required/>
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
