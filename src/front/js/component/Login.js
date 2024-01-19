import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className='login container'>
            <div className="login-form">
                <form>
                    <h1>Login</h1>
                    <div className="content">
                        <div className="input-field">
                            <input type="email" id='email' placeholder="Email" autoComplete="nope" required />
                        </div>
                        <div className="input-field">
                            <input type="password" id='password' placeholder="Password" autoComplete="new-password" required />
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
