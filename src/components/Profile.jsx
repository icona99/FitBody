import React from 'react';
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <section className="profile-content">
        <div className="profile-picture">
          <img src="/images/profile pic.png" alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>John Smith</h2>
          <p className="profile-bio">Fitness enthusiast  with over 10 years of experience in helping people achieve their fitness goals. Passionate about promoting healthy living and wellness.</p>
          <div className="profile-info">
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">john_smith@yahoo.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">(123) 456-7890</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">New York, USA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
