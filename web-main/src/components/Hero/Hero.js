import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const phrases = [
  "WHAT'S NEXT",
  "INDUSTRIAL IOT",
  "CUTTING-EDGE AI",
  "SMART ENGINEERING"
];

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
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
      }, 2200);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }

    return () => clearTimeout(typingTimer);
  }, [typedText, isDeleting, phraseIndex]);

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
            <span className="highlight-text">
              {typedText}
              <span className="typing-cursor">|</span>
            </span>
          </h1>

          <p className="hero-description">
            Intelligent technology, advanced robotics, and IoT systems built to address real-world industrial challenges.
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