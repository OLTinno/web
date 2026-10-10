import React from 'react';
import './Projects.css';

const Projects = () => {
  const flagshipProject = {
    id: 'track-inspection-robot',
    title: 'Track Inspection Robot',
    category: 'AI & Robotic Automation',
    tagline: 'Autonomous Railway Safety & Maintenance System',
    description: 'AI-powered railway maintenance and theft prevention robot. Equipped with advanced optical sensors and machine learning algorithms for real-time track monitoring, defect detection, and structural anomaly alerts.',
    status: 'Active Development',
    tags: ['Computer Vision', 'LiDAR & Sensors', 'Theft Prevention', 'Edge AI'],
    highlights: [
      { icon: 'fa-shield-alt', title: 'Theft Prevention', desc: 'Real-time security monitoring' },
      { icon: 'fa-brain', title: 'Computer Vision', desc: 'Automated track fault detection' },
      { icon: 'fa-bolt', title: 'Real-Time Telemetry', desc: 'Instant operational alerts' }
    ],
    video: '/videos/olt-hero.mp4'
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">INNOVATIONS & PRODUCTS</span>
          <h2 className="section-title">Our Flagship Project</h2>
          <p className="section-subtitle">
            Building intelligent hardware-software convergence solutions for critical infrastructure challenges.
          </p>
        </div>

        {/* Featured Flagship Project Showcase */}
        <div className="featured-project-card">
          <div className="project-glass-backdrop"></div>
          
          <div className="featured-project-inner">
            {/* Visual Column */}
            <div className="project-visual-column">
              <div className="visual-frame">
                <div className="visual-grid-overlay"></div>
                <video 
                  className="project-video-preview" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  preload="metadata"
                >
                  <source src={process.env.PUBLIC_URL + flagshipProject.video} type="video/mp4" />
                </video>
                <div className="visual-gradient-overlay"></div>

                {/* Floating HUD Badges */}
                <div className="hud-panel hud-top-left">
                  <span className="hud-pulse"></span>
                  <span className="hud-text">STATUS: {flagshipProject.status.toUpperCase()}</span>
                </div>

                <div className="hud-panel hud-bottom-right">
                  <i className="fas fa-microchip hud-icon"></i>
                  <span className="hud-text">PERCEPTION: CV + LIDAR</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="project-content-column">
              <div className="content-meta">
                <span className="featured-badge-pill">
                  <i className="fas fa-star"></i> PRIMARY FLAGSHIP INNOVATION
                </span>
                <span className="project-cat-name">{flagshipProject.category}</span>
              </div>

              <h3 className="project-main-title">{flagshipProject.title}</h3>
              <span className="project-tagline">{flagshipProject.tagline}</span>

              <p className="project-main-description">
                {flagshipProject.description}
              </p>

              {/* Core Feature Highlights */}
              <div className="project-highlights-grid">
                {flagshipProject.highlights.map((item, idx) => (
                  <div key={idx} className="highlight-mini-card">
                    <div className="mini-icon-box"><i className={`fas ${item.icon}`}></i></div>
                    <div>
                      <h4 className="mini-title">{item.title}</h4>
                      <p className="mini-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology Tags */}
              <div className="project-tech-tags">
                {flagshipProject.tags.map((tag, idx) => (
                  <span key={idx} className="tech-tag-chip">
                    <i className="fas fa-code-branch"></i> {tag}
                  </span>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="project-action-buttons">
                <a href="#solution" className="btn btn-primary project-primary-btn">
                  <span>Explore Solution Details</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
                <a href="#contact" className="btn btn-secondary project-secondary-btn">
                  <span>Inquire About Product</span>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;