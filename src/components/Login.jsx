import React from 'react';
import "/src/components/Login.css"

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <h1>Login</h1>
          <img src="images/icon_7.png" alt="Logo" />
        </div>
        <form action='#' method='GET'>
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
