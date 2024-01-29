import React, { useContext, useState } from 'react'
import { Context } from "../store/appContext"
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        actions.signUpUser(email, password);
        navigate("/login")
    }

    return (
        <div className="sign-up-container">
            <div className="sign-up-form">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="content-signup">
                        <div className="input-field">
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="nope" required />
                        </div>
                        <div className="input-field">
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="new-password" required />
                        </div>
                    </div>
                    <div className="action">
                        <Link to="/login"><button className='return-login'>Go Login</button></Link>
                        <button type='submit'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
