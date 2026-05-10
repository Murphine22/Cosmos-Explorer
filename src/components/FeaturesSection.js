import React from 'react';
import './FeaturesSection.css';

const FEATURES = [
  {
    icon: '🌌',
    title: 'Live Planetary Data',
    description: 'All planet information is fetched in real-time via our REST API, giving you accurate and up-to-date astronomical data.',
  },
  {
    icon: '📡',
    title: 'Deep Space Research',
    description: 'Explore curated facts about each planet — from atmospheric composition to orbital mechanics and surface conditions.',
  },
  {
    icon: '🛰️',
    title: 'Interactive Exploration',
    description: 'Navigate through the solar system with smooth animations and interactive elements designed for discovery.',
  },
  {
    icon: '🔭',
    title: 'Astronomical Precision',
    description: 'Distance data is measured in millions of kilometers from the Sun, providing a true sense of cosmic scale.',
  },
  {
    icon: '🌍',
    title: 'Responsive Design',
    description: 'Optimized for every device — explore the cosmos from your desktop, tablet, or mobile phone seamlessly.',
  },
  {
    icon: '⚡',
    title: 'Built with React',
    description: 'Component-based architecture for a fast, modular, and maintainable codebase using modern React hooks.',
  },
];

function FeatureCard({ icon, title, description, index }) {
  return (
    <div className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
      <div className="feature-card__corner feature-card__corner--tl"></div>
      <div className="feature-card__corner feature-card__corner--br"></div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="features-section__bg" aria-hidden="true"></div>

      <div className="container">
        <div className="features-section__layout">
          {/* Left: Header */}
          <div className="features-section__left">
            <div className="section-label">Why Explore</div>
            <h2 className="section-title">A Universe of<br />Knowledge</h2>
            <p className="features-section__desc">
              Cosmos Explorer brings the wonders of the solar system to your fingertips. 
              Powered by real data, built with modern web technologies, 
              and designed for curious minds.
            </p>

            <div className="features-section__metric">
              <div className="features-section__metric-item">
                <span className="features-section__metric-num">4.5B</span>
                <span className="features-section__metric-label">km — Pluto's orbit</span>
              </div>
              <div className="features-section__metric-item">
                <span className="features-section__metric-num">~8</span>
                <span className="features-section__metric-label">min — Light travel to Earth</span>
              </div>
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="features-section__grid">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
