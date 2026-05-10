import React from 'react';
import './Footer.css';

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__glow-line" aria-hidden="true"></div>

      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">✦</span>
              <span className="footer__logo-text">COSMOS EXPLORER</span>
            </div>
            <p className="footer__tagline">
              A TS Academy Capstone Project. Built with React, Fetch API, 
              and a deep love for the cosmos.
            </p>
            <div className="footer__tech-stack">
              {['React', 'Fetch API', 'CSS3', 'HTML5', 'Git'].map((tech) => (
                <span key={tech} className="footer__tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="footer__links">
            <div className="footer__links-group">
              <h4 className="footer__links-title">Navigate</h4>
              <ul className="footer__links-list">
                <li><button onClick={() => document.getElementById('planets')?.scrollIntoView({ behavior: 'smooth' })}>Planets</button></li>
                <li><button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
                <li><button onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}>Watch</button></li>
                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
              </ul>
            </div>

            <div className="footer__links-group">
              <h4 className="footer__links-title">Resources</h4>
              <ul className="footer__links-list">
                <li><a href="https://anurella.github.io/json/planets.json" target="_blank" rel="noreferrer">Planet API</a></li>
                <li><a href="https://reactjs.org" target="_blank" rel="noreferrer">React Docs</a></li>
                <li><a href="https://www.nasa.gov" target="_blank" rel="noreferrer">NASA</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
              </ul>
            </div>
          </div>

          {/* Back to top */}
          <div className="footer__back-top">
            <button className="footer__back-btn" onClick={scrollToTop} aria-label="Back to top">
              <span className="footer__back-arrow">↑</span>
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Cosmos Explorer · TS Academy Capstone Group
          </p>
          <p className="footer__copy footer__copy--muted">
            Data source: <a href="https://anurella.github.io/json/planets.json" target="_blank" rel="noreferrer">anurella.github.io</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
