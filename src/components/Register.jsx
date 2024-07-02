import React from 'react';
import '/src/components/Register.css'

const RegistrationForm = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">
          <h1>Register</h1>
          <img src="images/icon_7.png" alt="Logo" />
        </div>
        <form action='#' method='POST'>
          <div className="input-group">
            <label htmlFor="fullname">FULL NAME</label>
            <input type="text" id="fullname" name="fullname" placeholder="John Smith" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input type="email" id="email" name="email" placeholder="john_smith@yahoo.com" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" name="password" placeholder="********" required />
          </div>
          <button type="submit">Register</button>
        </form>
        <div className="signup-link">
          <span>Already a member?</span> <a href="/login">Sign in</a>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
