import React, { useState } from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const [activeMember, setActiveMember] = useState(0);

  const teamData = [
    { id: 0, name: "Eade Marren", role: "Chief Executive", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80" },
    { id: 1, name: "Savannah Ngueen", role: "Chief Executive", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
    { id: 2, name: "Emma Richardson", role: "Chief Executive", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80" },
    { id: 3, name: "Nathaniel Ellington", role: "Chief Executive", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" }
  ];

  return (
    <section className="team-accordion-section">
      <div className="team-max-container">
        <div className="text-center mb-5">
          <span className="dot-pill-teal">• MEET OUR TEAM</span>
          <h2>Empowering Business<br />with Expertise.</h2>
        </div>

        <div className="team-rows-list">
          {teamData.map((member) => (
            <div 
              key={member.id} 
              className={`team-row-card ${activeMember === member.id ? 'active-teal' : ''}`}
              onMouseEnter={() => setActiveMember(member.id)}
            >
              <div className="member-meta-info">
                <h3>{member.name}</h3>
                <span className="role-tag">{member.role}</span>
              </div>

              {activeMember === member.id && (
                <div className="avatar-preview-center">
                  <img src={member.img} alt={member.name} />
                </div>
              )}

              <button className="btn-know-more-pill">
                {activeMember === member.id ? 'Know More ↗' : '↗'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;