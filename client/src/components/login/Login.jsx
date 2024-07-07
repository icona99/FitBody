import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import "./Login.css"

const Login = () => {
  const baseUrl = 'http://localhost:3030/users/login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate;

  const handleSubmit = async (e) => {
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
        console.log('Login successful:', data);
        navigate('/home');
      } else {
        setError(data.message);
      }
    } catch (error) {
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
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input type="email" id="email" name="email" placeholder="john_smith@yahoo.com" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" name="password" placeholder="********" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <span>Not a member?</span> <a href="/register">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
