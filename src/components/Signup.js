import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom';
export default function Signup() {
    return (
        <div>
            {
                <div className="form1">
                    <div className="sign1">
                        <p id="only">Signup</p>
                        <form>
                            <input type="text" id="fname1" placeholder="Enter Name" required /><br /><br />
                            <input type="email" id="fname1" placeholder="Email" required /><br /><br />
                            <input type="password" id="fname1" placeholder="Enter Password" required /><br /><br />
                            <input type="password" id="fname1" placeholder="Confirm Password" required /><br /><br />
                            <button id="btn-submit">Continue </button>
                        </form><br />
                        <Link to="/">Already have an account ?</Link>

                    </div>
                </div>
            }
        </div>
    )
}

