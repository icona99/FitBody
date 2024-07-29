import React, { useContext } from 'react';
import { authContext } from '../../context/authContext';
import './Profile.css';

const Profile = () => {
  const { userData } = useContext(authContext);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <section className="profile-content">
        <div className="profile-picture">
          <img src={userData.profilePicture || "/images/default-profile-pic.png"} alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>{userData.name}</h2>
          <p className="profile-bio">{userData.bio}</p>
          <div className="profile-info">
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{userData.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Member since:</span>
              <span className="info-value">{formatDate(userData.memberSince)}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;

