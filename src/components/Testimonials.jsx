import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Marvin McKinney",
      role: "Customer",
      quote: "Taylor is a professional designer really helps my business by providing value. Highly recommended!",
      stars: 5
    },
    {
      id: 2,
      name: "Flawlessmedianl",
      role: "Customer",
      quote: "Their willingness to reach out and resolve issues was exceptional. Great customer care!",
      stars: 5
    },
    {
      id: 3,
      name: "Developeromar01",
      role: "Customer",
      quote: "I recently bought the theme, and it's top-notch. Functionality design is amazing.",
      stars: 5
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="text-center mb-5">
          <div className="badge-pill light">
            <span>❖ CLIENT FEEDBACK</span>
          </div>
          <h2 className="testimonials-title">Client testimonials that speak<br />for themselves</h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((item) => (
            <div className="review-card" key={item.id}>
              <div className="stars">★★★★★</div>
              <p className="quote-text">"{item.quote}"</p>
              <div className="user-info">
                <div className="user-avatar">👤</div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;