import React from 'react';
import './About.css';

const About = () => {
  const brandPillars = [
    {
      icon: 'fa-brain',
      title: 'Deep Technology',
      tags: ['Artificial Intelligence', 'Robotics', 'IoT', 'Embedded Systems']
    },
    {
      icon: 'fa-microchip',
      title: 'Advanced Engineering',
      tags: ['Hardware Design', 'Electronics', 'Edge Computing', 'Software Architecture']
    },
    {
      icon: 'fa-lightbulb',
      title: 'Continuous Innovation',
      tags: ['R&D Research', 'Prototyping', 'Emerging Tech', 'Scalable Platforms']
    },
    {
      icon: 'fa-earth-americas',
      title: 'Real-World Impact',
      tags: ['Healthcare & MedTech', 'Critical Infrastructure', 'Mobility', 'Industrial Safety']
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">DEEP-TECH COMPANY</span>
          <h2 className="section-title">Driven by Purpose & Technology</h2>
          <p className="section-subtitle">
            Pioneering intelligent systems and advanced engineering solutions to build a smarter, safer, and sustainable future.
          </p>
        </div>

        {/* Mission & Vision Dual Cards */}
        <div className="mission-vision-grid">
          {/* Mission Card */}
          <div className="mv-card mission-card">
            <div className="mv-card-header">
              <div className="mv-icon-box mission-icon-box">
                <i className="fas fa-bullseye"></i>
              </div>
              <div>
                <span className="mv-eyebrow">OUR MISSION</span>
                <h3 className="mv-title">Transforming Challenges Through Deep Technology</h3>
              </div>
            </div>
            <p className="mv-statement">
              "To create and develop transformative deep-tech solutions by combining artificial intelligence, robotics, IoT, embedded systems, advanced engineering and emerging technologies to solve complex real-world challenges across industries, including healthcare and MedTech."
            </p>
            <div className="mv-card-footer">
              <span className="mv-tag"><i className="fas fa-check-circle"></i> Impact Driven</span>
              <span className="mv-tag"><i className="fas fa-check-circle"></i> Cross-Industry</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="mv-card vision-card">
            <div className="mv-card-header">
              <div className="mv-icon-box vision-icon-box">
                <i className="fas fa-eye"></i>
              </div>
              <div>
                <span className="mv-eyebrow">OUR VISION</span>
                <h3 className="mv-title">Building Technology for a Smarter Future</h3>
              </div>
            </div>
            <p className="mv-statement">
              "To build OLT Innovations into a globally recognized deep-tech innovation company, pioneering technologies that shape a smarter, safer, healthier, more connected and sustainable future."
            </p>
            <div className="mv-card-footer">
              <span className="mv-tag"><i className="fas fa-globe"></i> Global Ambition</span>
              <span className="mv-tag"><i className="fas fa-leaf"></i> Sustainable Future</span>
            </div>
          </div>
        </div>

        {/* Corporate Brand Positioning Grid */}
        <div className="pillars-wrapper">
          <div className="pillars-header">
            <h3 className="pillars-section-title">Core Technology & Domain Spectrum</h3>
            <p className="pillars-section-subtitle">Combining core engineering disciplines to deliver end-to-end intelligent solutions</p>
          </div>

          <div className="pillars-grid">
            {brandPillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-card-top">
                  <div className="pillar-icon-box">
                    <i className={`fas ${pillar.icon}`}></i>
                  </div>
                  <h4 className="pillar-card-title">{pillar.title}</h4>
                </div>
                <div className="pillar-tags-flex">
                  {pillar.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="pillar-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 