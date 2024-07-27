import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const RegistrationForm = () => {
  const baseUrl = 'http://localhost:3030/users/register';
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful:', data);
        navigate('/classes');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">
          <h1>Register</h1>
          <img src="images/icon_7.png" alt="Logo" />
        </div>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="fullName">FULL NAME</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              placeholder="John Smith" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required 
            />
          </div>
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
          <button type="submit">Register</button>
        </form>
        <div className="signup-link">
          <span>Already a member?</span> <a href="/login">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
