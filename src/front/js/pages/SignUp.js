import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="sign-up-container">
            <div className="sign-up-form">
                <form>
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
