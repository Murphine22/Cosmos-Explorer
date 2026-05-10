import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          <span className="header__logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
              <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </span>
          <span className="header__logo-text">COSMOS</span>
          <span className="header__logo-sub">EXPLORER</span>
        </div>

        {/* Desktop Nav */}
        <nav className="header__nav">
          <button className="header__nav-link" onClick={() => scrollToSection('planets')}>Planets</button>
          <button className="header__nav-link" onClick={() => scrollToSection('features')}>About</button>
          <button className="header__nav-link" onClick={() => scrollToSection('video')}>Watch</button>
          <button className="header__nav-cta" onClick={() => scrollToSection('contact')}>Contact Us</button>
          <button
            className="header__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="header__mobile-controls">
          <button
            className="header__theme-toggle header__theme-toggle--mobile"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
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
