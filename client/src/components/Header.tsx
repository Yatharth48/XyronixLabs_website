import React from 'react';
import { Link } from 'react-router-dom';
//import './CSS/Header.css';

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;