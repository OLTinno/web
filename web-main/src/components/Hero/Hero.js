import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

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

  const handleVideoCanPlay = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Background Video Layer */}
      <div className={`hero-video-container ${videoLoaded ? 'loaded' : ''}`}>
        {!videoError && (
          <video
            ref={videoRef}
            className="hero-background-video"
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={handleVideoCanPlay}
            onError={handleVideoError}
          >
            <source src={process.env.PUBLIC_URL + '/videos/olt-hero.mp4'} type="video/mp4" />
            <source src={process.env.PUBLIC_URL + '/OLT_video/WhatsApp Video 2026-09-12 at 9.41.27 AM.mp4'} type="video/mp4" />
          </video>
        )}
        {/* Dark Fallback Layer */}
        <div className={`hero-fallback-image ${videoError || !videoLoaded ? 'visible' : ''}`}></div>
      </div>

      {/* Cinematic Asymmetric Dark Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content Overlay */}
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">OLT INNOVATIONS · INDUSTRIAL TECHNOLOGY</span>
          </div>

          <h1 className="hero-title">
            ENGINEERING<br />
            <span className="highlight-text">WHAT'S NEXT.</span>
          </h1>

          <p className="hero-description">
            Intelligent technology, autonomous robotics, and IoT systems built to address real-world industrial challenges.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-cinematic-primary">
              <span>EXPLORE OUR WORK</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn-cinematic-secondary">
              <span>GET IN TOUCH</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to About section">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line">
          <div className="scroll-point"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;