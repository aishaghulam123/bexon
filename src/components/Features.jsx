import React from 'react';
import './Features.css';

const Features = () => {
  const featureList = [
    { 
      id: 1, 
      title: "Friendly support", 
      desc: "Our goal is customer satisfaction. For any query, contact Theme Junction",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    { 
      id: 2, 
      title: "Lifetime updates", 
      desc: "You will get lifetime updates to the theme included with all future fixes.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"></polyline>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
        </svg>
      )
    },
    { 
      id: 3, 
      title: "Colors board", 
      desc: "Feel free to rearrange the entire color palette, whether static or gradient colors.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5"></circle>
          <circle cx="17.5" cy="10.5" r=".5"></circle>
          <circle cx="8.5" cy="7.5" r=".5"></circle>
          <circle cx="6.5" cy="12.5" r=".5"></circle>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.77 1.7-1.7 0-.41-.16-.79-.44-1.07-.27-.27-.44-.65-.44-1.07 0-.93.77-1.7 1.7-1.7H17c2.8 0 5-2.2 5-5 0-6.1-4.9-11-10-11z"></path>
        </svg>
      )
    },
    { 
      id: 4, 
      title: "Template customize", 
      desc: "Our template provides full flexibility to customize various elements with ease.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    },
    { 
      id: 5, 
      title: "SEO friendly", 
      desc: "Get more visitors by making your website content fully optimized for search engines.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    { 
      id: 6, 
      title: "Font management", 
      desc: "Easily customize font styles using Google Webfonts, Typekit, or custom fonts.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 4 4 20 4 20 7"></polyline>
          <line x1="9" y1="20" x2="15" y2="20"></line>
          <line x1="12" y1="4" x2="12" y2="20"></line>
        </svg>
      )
    },
    { 
      id: 7, 
      title: "Browsers support", 
      desc: "Fully compatible with major browsers and behaves identically on Google Chrome.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    { 
      id: 8, 
      title: "Fast performance", 
      desc: "Built using industry best practices and optimized clean code for high speed.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    }
  ];

  return (
    <section className="features-dark-section" id="features">
      <div className="features-container">
        
        {/* Top Header Row */}
        <div className="features-top-row">
          <div className="features-title-box">
            <div className="badge-pill">
              <span className="badge-dot"></span> KEY FEATURES
            </div>
            <h2>Packed with powerful features for<br />seamless website building</h2>
          </div>
          <div className="features-desc-box">
            <p>
              Build stunning, responsive websites effortlessly with powerful features designed for speed, flexibility, and user experience.
            </p>
          </div>
        </div>

        {/* 4 Column Clean Features Grid */}
        <div className="features-grid">
          {featureList.map((item) => (
            <div className="feature-card-dark" key={item.id}>
              <div className="icon-badge">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;