import '/src/components/Header.css'
import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div>
                    <a href="/">
                        <img src="images/dot.png" alt="" />
                        <div>
                            Fit<span>BODY</span>
                        </div>
                    </a>
                </div>
                <nav className="main_nav">
                    <ul>
                        <li className="active">
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="login.html">Login</a>
                        </li>
                        <li>
                            <a href="register.html">Register</a>
                        </li>
                        <li>
                            <a href="classes.html">Classes</a>
                        </li>
                        <li>
                            <a href="team.html">Team</a>
                        </li>
                        <li>
                            <a href="about.html">About us</a>
                        </li>
                        <li>
                            <a href="addClass.html">Add Class</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;