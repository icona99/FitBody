import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { authContext } from '../../context/authContext.js';

function Header() {
    const { isAuthenticated, logout } = useContext(authContext);
    
    const handleLogout = () => {
        logout();
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
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    {!isAuthenticated ? (
                        <div className="guest">

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
                                <Link to="/search">Search</Link>
                            </li>

                            <li>
                                <Link to="/addClass">Add Class</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={handleLogout} className="logout-button">Logout</Link>
                            </li>
                        </div>
                    )}
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
