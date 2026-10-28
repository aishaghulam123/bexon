import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="bexon-nav">
      <div className="nav-container">
        {/* Brand Logo */}
        <div className="nav-logo">
          <span className="logo-icon">❖</span> Bexon
        </div>

        {/* Menu Items */}
        <ul className="nav-menu">
          <li><a href="#demos">Demos</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>

        {/* Header Right Action Button */}
        <button className="btn-buy-now">
          Buy Now
        </button>
      </div>
    </nav>
  );
};

export default Nav;