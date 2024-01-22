import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className='login container'>
            <div className="login-form">
                <form>
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
                        <Link to="/sign-up"><button>Sign Up</button></Link>
                        <button type='submit'>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
