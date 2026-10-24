import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const activeLabel = navItems.find((item) => item.id === activeSection)?.label || 'Home';

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo & Active Section Indicator */}
        <div className="navbar-brand-group">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="navbar-logo">
            <img src="/logo.png" alt="WebForge Lab" className="logo-img" />
            <div className="logo-text-wrapper">
              <span className="logo-brand-name">
                WEB<span className="logo-highlight">FORGE</span>
              </span>
              <span className="logo-dev-name">AMAN VERMA</span>
            </div>
          </a>

          {/* Section Indicator Badge */}
          <div className="active-section-pill">
            <span className="pulse-indicator"></span>
            <span className="active-pill-label">{activeLabel}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${isActive ? 'nav-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="navbar-actions">
          <a
            href="https://wa.me/918435856067?text=Hi%20Aman,%20I%20am%20interested%20in%20WebForge%20Lab%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-whatsapp-link"
            title="Chat directly on WhatsApp (+91 8435856067)"
          >
            <span>WhatsApp</span>
          </a>

          <button onClick={() => scrollToSection('contact')} className="btn-primary nav-contact-btn">
            Get In Touch
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-section-heading">
            Current Section: <strong>{activeLabel}</strong>
          </div>
          <nav className="mobile-nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span className="mobile-check">✓</span>}
              </button>
            ))}
          </nav>
          <div className="mobile-actions">
            <a
              href="tel:+918435856067"
              className="btn-secondary mobile-btn"
              title="Call Aman Verma directly"
            >
              📞 Call: +91 8435856067
            </a>
            <a
              href="https://wa.me/918435856067?text=Hi%20Aman,%20I%20am%20interested%20in%20WebForge%20Lab%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mobile-btn"
              title="WhatsApp Aman Verma"
            >
              💬 WhatsApp Chat
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary mobile-btn"
            >
              ✉️ Contact Aman
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
