import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="header__logo-icon">✦</span>
          <span className="header__logo-text">COSMOS</span>
          <span className="header__logo-sub">EXPLORER</span>
        </div>

        {/* Desktop Nav */}
        <nav className="header__nav">
          <button className="header__nav-link" onClick={() => scrollToSection('planets')}>Planets</button>
          <button className="header__nav-link" onClick={() => scrollToSection('features')}>About</button>
          <button className="header__nav-link" onClick={() => scrollToSection('video')}>Watch</button>
          <button className="header__nav-cta" onClick={() => scrollToSection('contact')}>Contact Us</button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`header__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        <button className="header__mobile-link" onClick={() => scrollToSection('planets')}>Planets</button>
        <button className="header__mobile-link" onClick={() => scrollToSection('features')}>About</button>
        <button className="header__mobile-link" onClick={() => scrollToSection('video')}>Watch</button>
        <button className="header__mobile-link" onClick={() => scrollToSection('contact')}>Contact Us</button>
      </div>
    </header>
  );
}

export default Header;
