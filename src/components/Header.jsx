import '/src/components/Header.css'
import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
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
                            <a href="services.html">Classes</a>
                        </li>
                        <li>
                            <a href="about.html">About us</a>
                        </li>
                        <li>
                            <a href="blog.html">Team</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;