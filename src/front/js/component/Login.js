import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('https://supreme-trout-jv455xrpp4xfwvj-3001.app.github.dev/login', {
            method: "POST",
            headers: {
                'Content-Type': 'applications/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem('token', data.token);
            console.log("User has logged successfully!")
        } else {
            console.error("There has been an error!")
        }
    }

    return (
        <div className='login container'>
            <div className="login-form">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="content">
                        <div className="input-field">
                            <input type="email" id='email' placeholder="Email" autoComplete="nope" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input type="password" id='password' placeholder="Password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="action">
                        <Link to="/"><button>Sign Up</button></Link>
                        <button type='submit'>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
