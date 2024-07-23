import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
                <div className="header-logo">
                    <Link to="/">
                        <img src="images/icon_7.png" alt="logo" />
                        <div>
                            Fit<span>BODY</span>
                        </div>
                    </Link>
                </div>
                <nav className="main_nav">
                    <ul>
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/classes">Classes</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/addClass">Add Class</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header;
