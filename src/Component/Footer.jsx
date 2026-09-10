import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="section-container footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="footer-logo">
            <img src="/logo.png" alt="WebForge Lab Logo" className="footer-logo-img" />
            <div className="logo-text-wrapper">
              <span className="logo-brand-name">
                WEB<span className="logo-highlight">FORGE</span> <span className="logo-lab">LAB</span>
              </span>
              <span className="logo-tagline">BUILD • DESIGN • DEPLOY</span>
            </div>
          </a>

          <p className="footer-desc">
            WebForge Lab is a modern web development studio crafting high-performance, responsive single-page applications, custom SaaS architectures, and bespoke digital design systems.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            <li><button onClick={() => scrollTo('home')}>Home</button></li>
            <li><button onClick={() => scrollTo('why-us')}>Why Choose Us</button></li>
            <li><button onClick={() => scrollTo('services')}>Services</button></li>
            <li><button onClick={() => scrollTo('projects')}>Projects</button></li>
            <li><button onClick={() => scrollTo('contact')}>Get In Touch</button></li>
          </ul>
        </div>

        {/* Services Quick Links */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Core Services</h4>
          <ul className="footer-links">
            <li><button onClick={() => scrollTo('services')}>Web App Development</button></li>
            <li><button onClick={() => scrollTo('services')}>UI/UX & Web Design</button></li>
            <li><button onClick={() => scrollTo('services')}>API & Cloud Integration</button></li>
            <li><button onClick={() => scrollTo('services')}>Full-Stack MERN Systems</button></li>
          </ul>
        </div>

        {/* Socials & Action Column */}
        <div className="footer-action-col">
          <h4 className="footer-col-title">Connect With Us</h4>
          <div className="social-links-row">
            {/* Instagram */}
            <a href="https://instagram.com/webforge_lab" target="_blank" rel="noreferrer" className="social-btn" title="Instagram @webforge_lab">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/918435856067" target="_blank" rel="noreferrer" className="social-btn" title="WhatsApp 8435856067">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn" title="GitHub">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>

            {/* Email */}
            <a href="mailto:amanverma13112025@gmail.com" className="social-btn" title="Email amanverma13112025@gmail.com">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>

          <button onClick={scrollToTop} className="btn-secondary back-to-top-btn">
            <span>Back to Top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg>
          </button>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>© {new Date().getFullYear()} WebForge Lab. All rights reserved. BUILD • DESIGN • DEPLOY</p>
      </div>
    </footer>
  );
};

export default Footer;
