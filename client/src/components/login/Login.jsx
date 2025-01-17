import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../context/authContext';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    const baseUrl = 'http://localhost:3030/users/login';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { changeAuthState } = useContext(authContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('accessToken', data.accessToken);
                changeAuthState(data); 
                navigate('/');
            } else if (response.status === 403) {
                setError('Invalid email or password.');
              } else {
                setError(data.message || 'An error occurred. Please try again.');
              }
            } catch (error) {
              console.error('Fetch Error:', error);
              setError('An error occurred. Please try again.');
            }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo">
                    <h1>Login</h1>
                    <img src="images/icon_7.png" alt="Logo" />
                </div>
                <form onSubmit={submitHandler}>
                    <div className="input-group">
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john_smith@yahoo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit">Login</button>
                </form>
                <div className="signup-link">
                    <span>Not a member?</span> <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
