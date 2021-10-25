import React from 'react'
import './login.css'
import { FiLock ,FiMail} from 'react-icons/fi';
import { Link } from 'react-router-dom';
export default function Login_page() {
    return (
        <div>
            {
                
                <div id="page">
                    <div id="left">
                        <p>BlogSite</p>
                    </div>
                    <div id="right">
                        <div Class="form">
                            <div Class="sign">
                                <p id='welcome'>Welcome Back</p>
                                <form>
                                    <FiMail fontSize='20px'/>
                                    <input type="email" id="fname" placeholder="Email" required /><br /><br />
                                    <FiLock fontSize='20px'/>
                                    <input type="password" id="fname" placeholder="Password" required /><br /><br />
                                    <a href="#" id="forgot">Forgot Password ?</a><br /><br />
                                    <button id="btn-login">Continue </button><br /><br />
                                    <span>New to blogSite? <Link to="/Signup">Join now</Link></span>
                                </form><br />
                            </div>
                        </div>
                    </div>
                </div>
            }</div>

    )
}


