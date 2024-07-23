import React from "react";
import "./Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-logo">
          <a href="/">
            <img src="images/icon_7.png" alt="logo" />
            <div>
              Fit<span>BODY</span>
            </div>
          </a>
        </div>
        <div className="footer-info">
          Copyright © All rights reserved <span>Icona project</span>
        </div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
    </footer>
  );
}




{/* <div className="newsletter">
					<form action="#" id="newsletter_form">
						<input type="text" placeholder="Enter your email here" required="required" />
						<button >go</button>
					</form>
				</div> */}