import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://supreme-trout-jv455xrpp4xfwvj-3001.app.github.dev/login', {
            method: "POST",
            headers: {
                'Content-Type': 'applications/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            console.log('User signed up successfully');
        } else {
            console.error('Error signing up');
        }
        navigate("/")
    };

    return (
        <div className="sign-up-container">
            <div className="sign-up-form">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="content-signup">
                        <div className="input-field">
                            <input type="email" id="email" placeholder="Email" autoComplete="nope" required />
                        </div>
                        <div className="input-field">
                            <input type="password" id="password" placeholder="Password" autoComplete="new-password" required />
                        </div>
                    </div>
                    <div className="action">
                        <Link to="/login"><button className='return-login'>Go Login</button></Link>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
