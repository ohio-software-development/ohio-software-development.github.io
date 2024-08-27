// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
