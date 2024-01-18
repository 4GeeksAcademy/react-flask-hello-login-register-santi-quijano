import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="login-form">
                <form>
                    <h1>Login</h1>
                    <div className="content">
                        <div className="input-field">
                            <input type="email" placeholder="Email" autocomplete="nope" />
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Password" autocomplete="new-password" />
                        </div>
                    </div>
                    <div className="action">
                        <button>Register</button>
                        <button>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
