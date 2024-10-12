import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Avatar"
          className="profile-avatar"
        />
        <h1 className="profile-name">John Doe</h1>
        <p className="profile-title">Software Developer</p>
      </div>
    </div>
  );
}

export default Profile;
