import React from 'react';
import './Demos.css';

const Demos = ({ onSelectDemo }) => {
  const demoCards = [
    { id: 1, title: "Homepage - 01", tag: "New", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
    { id: 2, title: "Homepage - 02", tag: "New", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
    { id: 3, title: "Homepage - 03", tag: "New", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80" },
    { id: 4, title: "Homepage - 04", tag: "", image: "https://images.unsplash.com/photo-1542744801-43245f1c7314?w=600&q=80" },
    { id: 5, title: "Homepage - 05", tag: "", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" },
    { id: 6, title: "Homepage - 06", tag: "", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" }
  ];

  return (
    <section className="demos-section" id="demos">
      <div className="demos-container">
        <div className="section-header text-center">
          <div className="badge-pill light">
            <span>❖ PRE-BUILT HOMEPAGES</span>
          </div>
          <h2>Explore <span className="circle-highlight">6+</span> ready-to-use websites<br />for Corporate Business</h2>
          <p>Experience a clean, modern design built for business success.</p>
        </div>

        <div className="demos-grid">
          {demoCards.map((card) => (
            <div 
              className="demo-card" 
              key={card.id}
              onClick={() => onSelectDemo(card.id)}
            >
              <div className="card-image-box">
                {card.tag && <span className="card-badge">{card.tag}</span>}
                <img src={card.image} alt={card.title} />
                <div className="hover-overlay">
                  <button className="btn-demo-view">Explore Demo ↗</button>
                </div>
              </div>
              <div className="card-footer">
                <h3>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demos;