import React, { useRef } from 'react';
import './Hero.css';

function Hero() {
  const orbitRef = useRef(null);

  const scrollToPlanets = () => {
    const el = document.getElementById('planets');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Starfield */}
      <div className="stars-bg" aria-hidden="true"></div>

      {/* Nebula overlays */}
      <div className="hero__nebula hero__nebula--1" aria-hidden="true"></div>
      <div className="hero__nebula hero__nebula--2" aria-hidden="true"></div>
      <div className="hero__nebula hero__nebula--3" aria-hidden="true"></div>

      {/* Solar system visual */}
      <div className="hero__solar-system" aria-hidden="true" ref={orbitRef}>
        <div className="hero__sun">
          <div className="hero__sun-glow"></div>
          <div className="hero__sun-core"></div>
        </div>
        <div className="hero__orbit hero__orbit--1">
          <div className="hero__planet hero__planet--mercury"></div>
        </div>
        <div className="hero__orbit hero__orbit--2">
          <div className="hero__planet hero__planet--venus"></div>
        </div>
        <div className="hero__orbit hero__orbit--3">
          <div className="hero__planet hero__planet--earth">
            <div className="hero__moon"></div>
          </div>
        </div>
        <div className="hero__orbit hero__orbit--4">
          <div className="hero__planet hero__planet--mars"></div>
        </div>
      </div>

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            <span>Solar System Interactive</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">EXPLORE THE</span>
            <span className="hero__title-accent">COSMOS</span>
            <span className="hero__title-line">BEYOND</span>
          </h1>

          <p className="hero__subtitle">
            Journey through the vast expanse of our solar system. Discover the planets, 
            their mysteries, and the cosmic dance that defines our corner of the universe.
          </p>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">8</span>
              <span className="hero__stat-label">Planets</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">4.6B</span>
              <span className="hero__stat-label">Years Old</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">∞</span>
              <span className="hero__stat-label">Wonders</span>
            </div>
          </div>

          <div className="hero__ctas">
            <button className="hero__cta-primary" onClick={scrollToPlanets}>
              <span>Explore the Data</span>
              <svg className="hero__cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </button>
            <button className="hero__cta-secondary" onClick={scrollToContact}>
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-line"></div>
          <span className="hero__scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
