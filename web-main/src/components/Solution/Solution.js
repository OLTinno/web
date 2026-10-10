import React from 'react';
import './Solution.css';

const Solution = () => {

  const primaryFeatures = [
    {
      num: '01',
      title: 'Autonomous Inspection',
      desc: 'Automates inspection workflows and reduces dependence on conventional manual track walk methods.',
      icon: 'fa-robot'
    },
    {
      num: '02',
      title: 'AI-Based Fault Detection',
      desc: 'Uses AI-driven computer vision to identify potential track faults, alignment shifts, and structural abnormalities.',
      icon: 'fa-microchip'
    },
    {
      num: '03',
      title: 'Real-Time Monitoring',
      desc: 'Processes inspection information directly onboard to support timely detection and immediate alert dispatch.',
      icon: 'fa-bolt'
    },
    {
      num: '04',
      title: 'Intelligent Reporting',
      desc: 'Transforms raw observations into structured digital logs and visual spatial intelligence for operational units.',
      icon: 'fa-chart-line'
    },
    {
      num: '05',
      title: 'Predictive Maintenance',
      desc: 'Supports a proactive shift from reactive track inspection toward data-driven scheduled maintenance planning.',
      icon: 'fa-shield-alt'
    },
    {
      num: '06',
      title: 'Security-Oriented Design',
      desc: 'Includes theft-proof and safety-focused physical features as part of the overall solution engineering concept.',
      icon: 'fa-lock'
    }
  ];




  const industryApplications = [
    {
      title: 'Railways',
      desc: 'AI-powered track inspection and intelligent railway safety monitoring systems.',
      icon: 'fa-train',
      tag: 'Core Focus'
    },
    {
      title: 'Industrial Infrastructure',
      desc: 'Automated inspection support for difficult-to-access high-rise structural assets.',
      icon: 'fa-building',
      tag: 'Asset Safety'
    },
    {
      title: 'Heavy Industry',
      desc: 'Robotic inspection support for industrial plants and hazardous operating environments.',
      icon: 'fa-industry',
      tag: 'Plant Operations'
    },
    {
      title: 'Maritime / Shipyards',
      desc: 'AI-assisted inspection concepts for ship hulls, docks, and marine structural components.',
      icon: 'fa-ship',
      tag: 'Maritime Concept'
    },
    {
      title: 'Critical Infrastructure',
      desc: 'Data-driven inspection intelligence for physical assets requiring continuous monitoring.',
      icon: 'fa-shield-virus',
      tag: 'Infrastructure'
    }
  ];

  const techStack = [
    {
      category: 'Robotics',
      items: ['Autonomous Robotic Platforms', 'Robot Control Systems'],
      icon: 'fa-robot'
    },
    {
      category: 'Perception',
      items: ['High-Res Cameras', 'LiDAR Sensors', 'Optional Thermal Sensing'],
      icon: 'fa-eye'
    },
    {
      category: 'Artificial Intelligence',
      items: ['Computer Vision', 'YOLO Object Detection', 'Edge AI Acceleration'],
      icon: 'fa-brain'
    },
    {
      category: 'Navigation',
      items: ['SLAM Mapping', 'Autonomous Pathing'],
      icon: 'fa-compass'
    },
    {
      category: 'Software Stack',
      items: ['Python Architecture', 'ROS Integration', 'Mavlink Communication'],
      icon: 'fa-code'
    },
    {
      category: 'Data & Intelligence',
      items: ['Real-Time Analysis', 'Digital Reporting', 'Predictive Maintenance Insights'],
      icon: 'fa-database'
    }
  ];


  return (
    <section id="solution" className="section solution-section">
      {/* 1. HERO SECTION OPENING */}
      <div className="container">
        <div className="section-header solution-hero-header">
          <span className="badge-tag">OUR SOLUTION</span>
          <h2 className="section-title solution-main-title">
            Intelligent Inspection.<br />
            <span className="gradient-text">Safer Infrastructure.</span>
          </h2>
          <p className="section-subtitle solution-main-subtext">
            AI-driven robotics and intelligent inspection systems designed to transform how critical infrastructure is monitored, understood, and maintained.
          </p>

          <div className="solution-hero-ctas">
            <a href="#primary-solution" className="btn btn-primary solution-btn-primary">
              <span>Explore Our Solutions</span>
              <i className="fas fa-arrow-down"></i>
            </a>
          </div>
        </div>



        {/* 3. PRIMARY SOLUTION CARD — RAILWAY ROBOT */}
        <div id="primary-solution" className="solution-card-primary">
          <div className="primary-card-header">
            <div className="card-title-group">
              <span className="status-badge badge-active">
                <span className="status-pulse"></span> FLAGSHIP SOLUTION
              </span>
              <h3 className="primary-card-title">AI-Powered Track Inspection Robot</h3>
            </div>
            <div className="primary-card-icon">
              <i className="fas fa-robot"></i>
            </div>
          </div>

          <p className="primary-card-description">
            An intelligent robotic inspection platform designed to automate railway track inspection, identify faults in real time, and provide actionable inspection intelligence for safer and more efficient railway operations.
          </p>

          <div className="primary-features-grid">
            {primaryFeatures.map((feat, i) => (
              <div key={i} className="feature-item-card">
                <div className="feature-card-top">
                  <span className="feature-num">{feat.num}</span>
                  <div className="feature-icon-box"><i className={`fas ${feat.icon}`}></i></div>
                </div>
                <h4 className="feature-title">{feat.title}</h4>
                <p className="feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>







        {/* 10. INDUSTRY APPLICATIONS */}
        <div className="applications-wrapper">
          <div className="section-header">
            <span className="badge-tag">VERSATILITY</span>
            <h2 className="section-title">Industry Applications</h2>
            <p className="section-subtitle">
              Engineered for critical sectors requiring reliable, data-driven physical asset monitoring.
            </p>
          </div>

          <div className="apps-grid">
            {industryApplications.map((app, idx) => (
              <div key={idx} className="app-card">
                <div className="app-card-top">
                  <div className="app-icon"><i className={`fas ${app.icon}`}></i></div>
                  <span className="app-tag">{app.tag}</span>
                </div>
                <h3 className="app-title">{app.title}</h3>
                <p className="app-desc">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 11. TECHNOLOGY STACK ARCHITECTURE */}
        <div className="tech-stack-wrapper">
          <div className="section-header">
            <span className="badge-tag">TECHNOLOGY STACK</span>
            <h2 className="section-title">The Technology Behind The Solution</h2>
            <p className="section-subtitle">
              Structured architectural components powering OLT’s robotic inspection ecosystems.
            </p>
          </div>

          <div className="tech-stack-grid">
            {techStack.map((tech, idx) => (
              <div key={idx} className="tech-stack-card">
                <div className="tech-card-header">
                  <i className={`fas ${tech.icon} tech-cat-icon`}></i>
                  <h4>{tech.category}</h4>
                </div>
                <ul className="tech-item-list">
                  {tech.items.map((item, i) => (
                    <li key={i}><i className="fas fa-check"></i> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>



        {/* 14. FINAL CALL TO ACTION (CTA) */}
        <div className="solution-final-cta">
          <div className="final-cta-content">
            <h2>Build the Future of Intelligent Inspection</h2>
            <p>
              Partner with OLT Innovations to explore AI-driven robotic inspection for railways, industrial infrastructure and other critical assets.
            </p>
            <div className="final-cta-buttons">
              <a href="#contact" className="btn btn-primary cta-btn-main">
                <span>Talk to Our Team</span>
                <i className="fas fa-envelope"></i>
              </a>
              <a href="#solution" className="btn btn-secondary cta-btn-sub">
                <span>Explore Our Technology</span>
                <i className="fas fa-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
