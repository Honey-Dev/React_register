import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';
export default function Login_page() {
    return (
        <div>
            {
                <div className="form">
                    <div className="sign">
                        <p id='only'>LOGIN</p>
                        <form>
                            <input type="email" id="fname" placeholder="Email" required /><br /><br />
                            <input type="password" id="fname" placeholder="Password" required /><br /><br />
                            <button id="btn-login">Continue </button>
                        </form><br />
                        <span id="foot">
                            <a href="#">Forgot Password ?</a><br /><br />
                            New to BlogSite? <Link to="/Signup">Create New Account</Link>
                        </span>
                    </div>
                </div>
            }</div>

    )
}


