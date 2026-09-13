import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const phrases = [
  'Smart Engineering',
  'Autonomous Robotics',
  'Industrial IoT Systems',
  'Cutting-Edge AI Solutions'
];

const Hero = () => {
  const heroRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const element = heroRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typingTimer;

    if (isDeleting) {
      typingTimer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      }, 45);
    } else {
      typingTimer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, 75);
    }

    if (!isDeleting && typedText === currentPhrase) {
      typingTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }

    return () => clearTimeout(typingTimer);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Background Video Container Placeholder - Prepared for Phase 3 */}
      <div className="hero-video-container">
        {/* Background video element will be mounted here in Phase 3 */}
      </div>

      {/* Hero Overlay */}
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>AI · IOT · ROBOTICS INNOVATIONS</span>
          </div>

          <h1 className="hero-title">
            Driving Industrial Evolution through{' '}
            <span className="typing-highlight">
              {typedText}
              <span className="typing-cursor">|</span>
            </span>
          </h1>

          <p className="hero-mission">
            Welcome to OLT Innovations Private Limited. We innovate and develop impactful products leveraging cutting-edge AI, IoT, and robotics, addressing real-world challenges across industries.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore Projects <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-outline-white">
              Get in Touch <i className="fas fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;