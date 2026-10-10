import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-img">
                <img src="/images/logo olt.jpg" alt="OLT Innovations Logo" />
              </div>
              <span className="footer-logo-text">OLT Innovations</span>
            </div>
            <p className="footer-bio">
              OLT Innovations Private Limited is a deep-tech innovation company dedicated to developing transformative solutions by combining AI, robotics, IoT, embedded systems, and advanced engineering for real-world applications across global industries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#solution">Our Solution</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Reach Us</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Information</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>6/6 Alur Road, Prasanti Colony, Guntakal, AP - 515801</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>oltinnovations@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} OLT Innovations Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;