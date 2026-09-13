import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">About Company</span>
          <h2 className="section-title">Pioneering Intelligent Industrial Solutions</h2>
          <p className="section-subtitle">
            Tackling complex real-world challenges with scalable, cost-effective, and secure technologies.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Visual Highlight Box */}
          <div className="about-card-featured">
            <div className="about-card-content">
              <span className="featured-badge">Core Pillars</span>
              <h3 className="featured-title">AI · IoT · Robotics</h3>
              <p className="featured-desc">
                We bridge the gap between embedded hardware and intelligent cloud applications to transform modern infrastructure.
              </p>
              
              <div className="pillars-list">
                <div className="pillar-item">
                  <div className="pillar-icon"><i className="fas fa-brain"></i></div>
                  <div>
                    <h4>Artificial Intelligence</h4>
                    <p>Computer vision and machine learning for predictive monitoring.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon"><i className="fas fa-network-wired"></i></div>
                  <div>
                    <h4>Industrial IoT</h4>
                    <p>Connected sensors, telematics, and real-time tracking systems.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon"><i className="fas fa-robot"></i></div>
                  <div>
                    <h4>Autonomous Robotics</h4>
                    <p>Robotic maintenance and automated safety inspection tools.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Description & Mission */}
          <div className="about-text-column">
            <div className="about-info-block">
              <h3 className="block-title">Our Mission</h3>
              <p className="about-paragraph">
                We're dedicated to revolutionizing industries and enhancing everyday life through cutting-edge AI, IoT, and robotics solutions. Our mission is to deliver secure, efficient, and eco-friendly innovations that tackle real-world challenges while empowering individuals and businesses with scalable, cost-effective technology for a smarter, more connected world.
              </p>
            </div>

            <div className="capabilities-grid">
              <div className="capability-card">
                <i className="fas fa-microchip capability-icon"></i>
                <h4>Embedded Systems</h4>
                <p>Custom microcontrollers & sensor nodes.</p>
              </div>
              <div className="capability-card">
                <i className="fas fa-shield-alt capability-icon"></i>
                <h4>Industrial Security</h4>
                <p>Theft prevention & anomaly detection.</p>
              </div>
              <div className="capability-card">
                <i className="fas fa-leaf capability-icon"></i>
                <h4>Eco Innovations</h4>
                <p>Energy-efficient hardware design.</p>
              </div>
              <div className="capability-card">
                <i className="fas fa-expand-arrows-alt capability-icon"></i>
                <h4>Scalable Tech</h4>
                <p>Modular architecture for enterprise growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 