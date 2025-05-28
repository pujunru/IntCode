import React from 'react';

type TopBarProps = {
  onSubmit: () => void;
};

const TopBar: React.FC<TopBarProps> = ({ onSubmit }) => (
  <nav className="top-bar">
    <div className="logo">System Design Pro</div>
    <div className="nav-links">
      <a href="#">Problems</a>
      <a href="#">Explore</a>
      <a href="#">Interview Prep</a>
    </div>
    <div className="topbar-actions">
      <button className="submit-btn" onClick={onSubmit}>Submit</button>
      <div className="profile-icon">👤</div>
    </div>
  </nav>
);

export default TopBar; 