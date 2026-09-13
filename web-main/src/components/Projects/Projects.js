import React from 'react';
import './Projects.css';

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: 'Track Inspection Robot',
      category: 'AI & Autonomous Robotics',
      description: 'AI-powered railway maintenance and theft prevention robot. Advanced sensors and machine learning algorithms for real-time track monitoring and anomaly detection.',
      icon: 'fa-robot',
      tags: ['Computer Vision', 'LiDAR & Sensors', 'Theft Prevention'],
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Smart Bike Key Reminder',
      category: 'IoT & Microelectronics',
      description: 'IoT-based key safety device for bikers. Intelligent reminder system with mobile connectivity and location tracking features.',
      icon: 'fa-key',
      tags: ['Bluetooth Low Energy', 'Mobile Connectivity', 'Location Tracking'],
      status: 'In Progress'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Innovations</span>
          <h2 className="section-title">Our Flagship Projects</h2>
          <p className="section-subtitle">
            Leveraging hardware-software convergence to create scalable, real-world technology solutions.
          </p>
        </div>
        
        <div className="projects-grid">
          {allProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <span className="project-category">{project.category}</span>
                {project.status && (
                  <span className="project-status-badge">
                    <span className="status-dot"></span>
                    {project.status}
                  </span>
                )}
              </div>

              <div className="project-icon-box">
                <i className={`fas ${project.icon}`}></i>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-card-footer">
                <a href="#contact" className="project-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 