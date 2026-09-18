import React, { useState } from 'react';
import './ReachUs.css';

const ReachUs = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xldjdzgr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="section reach-us" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Get in Touch</span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Have a project query or looking for smart technology partnerships? We'd love to hear from you.
          </p>
        </div>

        <div className="reach-us-grid">
          {/* Left Column: Contact Info Cards */}
          <div className="reach-us-info">
            <div className="contact-card-header">
              <h3>Contact Information</h3>
              <p>Reach out directly to our engineering office or send us a message.</p>
            </div>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Registered Address</h4>
                  <p>
                    OLT INNOVATIONS PRIVATE LIMITED<br />
                    6/6, Alur Road, Prasanti Colony,<br />
                    Guntakal, Ananthapur - 515801,<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email Address</h4>
                  <p>oltinnovations@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="reach-us-form-wrap">
            {showSuccess ? (
              <div className="success-message">
                <div className="success-icon"><i className="fas fa-check-circle"></i></div>
                <h3>Thank You!</h3>
                <p>We have received your message and our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-heading">Send Us a Message</h3>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachUs; 