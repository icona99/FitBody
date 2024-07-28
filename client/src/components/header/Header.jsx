import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { authContext } from '../../context/authContext.js';

function Header() {
    const { isAuthenticated, logout } = useContext(authContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

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
                    {!isAuthenticated ? (
                        <div className="guest">
                            <li className="active">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </div>
                    ) : (
                        <div className="user">
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
                            <li>
                                <button onClick={handleLogout} className="logout-button">Logout</button>
                            </li>
                        </div>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
