import React from 'react';
import './Milestones.css';

const Milestones = () => {
  const milestones = [
    {
      year: '2024',
      tag: 'Equity Grant & Incubation',
      achievement: 'Received ₹4 Lakhs from Kalpataru CoE, STPI Vizag (Equity Based)',
      logo: '/images/kalpataru-logo.png',
      institution: 'Kalpataru CoE · STPI Vizag'
    },
    {
      year: '2024',
      tag: 'Seed Funding',
      achievement: 'Secured ₹40,000 from KL University ACIC Incubation Centre',
      logo: '/images/klu-logo.jpg',
      institution: 'KL University ACIC Incubation Centre'
    }
  ];

  return (
    <section id="milestones" className="section milestones">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Growth & Recognition</span>
          <h2 className="section-title">Key Company Milestones</h2>
          <p className="section-subtitle">
            Backed by premier government incubation centers and technological centers of excellence.
          </p>
        </div>

        <div className="milestones-timeline">
          <div className="timeline-line"></div>

          <div className="milestones-grid">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-card">
                <div className="milestone-card-top">
                  <div className="milestone-logo-frame">
                    <img src={milestone.logo} alt={milestone.institution} />
                  </div>
                  <div className="milestone-meta">
                    <span className="milestone-year-badge">{milestone.year}</span>
                    <span className="milestone-tag">{milestone.tag}</span>
                  </div>
                </div>

                <div className="milestone-content">
                  <h3 className="milestone-institution">{milestone.institution}</h3>
                  <p className="milestone-achievement">{milestone.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
