import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Simple GSAP entrance animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="bexon-hero">
      <div className="hero-content" ref={heroRef}>
        <div className="badge-pill">
          <span className="badge-icon">⚙</span> RECOGNIZED FOR EXCELLENCE
        </div>

        <h1 className="hero-title">
          Prestige Corporate Business<br />HTML Template
        </h1>

        <button className="btn-explore">
          Explore Demos <span className="arrow-icon">↗</span>
        </button>
      </div>

      {/* Feature Highlights Bar */}
      <div className="hero-features-bar">
        <div className="feature-item">
          <span className="item-icon">💻</span>
          <span>Fast load performance</span>
        </div>
        <div className="feature-item">
          <span className="item-icon">✏</span>
          <span>Fresh & clean design</span>
        </div>
        <div className="feature-item">
          <span className="item-icon">🎧</span>
          <span>Quick & friendly support</span>
        </div>
        <div className="feature-item">
          <span className="item-icon">🌐</span>
          <span>RTL Language Support</span>
        </div>
      </div>

      {/* Ticker Banner */}
      <div className="ticker-banner">
        <div className="ticker-track">
          <span>Founders And Vision ❖ Growth And Impact ❖ Team And Values ❖ Founders And Vision ❖ Growth And Impact ❖ Team And Values</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;