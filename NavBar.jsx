import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">🚀 MyPortfolio</div>
      <ul className="nav-links">
        <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/platform" activeclassname="active">Platform</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
        <li><NavLink to="/more" activeclassname="active">Education</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;