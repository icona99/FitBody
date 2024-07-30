import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/authContext';


const RegistrationForm = () => {
  const baseUrl = 'http://localhost:3030/users/register';
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const { changeAuthState } = useContext(authContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();
      console.log('Response Data:', data); // Log the response data for debugging

      if (response.ok) {
        localStorage.setItem('accessToken', data.accessToken);
        // Assuming `changeAuthState` is defined elsewhere
        changeAuthState(data);
        navigate('/');
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Fetch Error:', error); // Log fetch errors for debugging
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
          <div className="input-group">
            <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Register</button>
        </form>
        <div className="signup-link">
          <span>Already a member?</span> <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
