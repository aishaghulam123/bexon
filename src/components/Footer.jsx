import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bexon-footer" id="contact">
      {/* Background Graphic Pattern Overlay */}
      <div className="footer-pattern"></div>

      <div className="footer-container">
        {/* Top Tagline Badge */}
        <div className="badge-pill footer-pill mb-3">
          <span>❖ YOUR NEXT CORPORATE BUSINESS THEME</span>
        </div>

        {/* Headline with Oval Highlight around '6' */}
        <h2 className="footer-headline">
          Life-time license, free updates<br />
          and <span className="highlight-circle">6</span> months of free support.
        </h2>

        {/* CTA Button */}
        <div className="mt-4">
          <button className="btn-buy-footer">
            Buy Now 
          </button>
        </div>

        {/* Mockup Showcase Images Bar */}
        <div className="footer-mockups">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" 
            alt="Desktop Demo Mockup" 
            className="mockup-img desktop" 
          />
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80" 
            alt="Mobile Demo Mockup" 
            className="mockup-img mobile" 
          />
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-brand">
            <span className="brand-dot">❖</span> Bexon
          </div>
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Bexon Corporate Theme. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;