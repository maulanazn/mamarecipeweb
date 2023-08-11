import { useState } from 'react';
import './../../assets/css/register.css';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { URL } from '../../config/URL';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const registerUser = (e) => {
        e.preventDefault();

        let bodyForm = new FormData();
        bodyForm.append('name', userData.name);
        bodyForm.append('email', userData.email);
        bodyForm.append('password', userData.password);

        axios.post(`${URL}/register`, bodyForm, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(() => {
            navigate('/auth/login')
        }).catch(err => {
            console.error(err.message);
        })
    }
    
    const onUserChange = (e) => {
        setUserData({
            ...userData, 
            [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <header>
                <p id="title">Recipe...</p>
                <p id="title-motto">Lets Get Started!</p>
                <p id="info">Create new account to access all features</p>
            </header>

            <section className="form">
                <form onSubmit={registerUser}>
                    <label className="label-name" htmlFor="name">
                        Name
                    </label>
                    <br/>
                    <input required type="text" value={userData.name} name="name" id="name" onChange={onUserChange} />
                    <br/>
                
                    <label className="label-email" htmlFor="email">
                        Email
                    </label>
                    <br/>
                    <input required type="email" value={userData.email} name="email" id="email" onChange={onUserChange} />
                    <br/>
                
                    <label className="label-password" htmlFor="password">
                        Password
                    </label>
                    <br/>
                    <input required type="password" value={userData.password} name="password" id="password" onChange={onUserChange} />
                    <br/>
                    
                    <label className="check-box">
                        <input required type="checkbox" name="agree-terms"/>
                        <span className="check-mark"></span>
                        I agree to terms & conditions
                    </label>
                    <br/>
                
                    <button type="submit" id="registerDialog">Register Account</button>
                </form>
            </section>
            <p className="question-text">Already have account? <a className="link" href="login.html">Log in Here</a></p>
        </div>
    )
}
