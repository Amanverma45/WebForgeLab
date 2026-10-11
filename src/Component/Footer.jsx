import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="section-container footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="footer-logo">
            <img src="/logo.png" alt="WebForge Lab" className="footer-logo-img" />
            <div className="logo-text-wrapper">
              <span className="logo-brand-name">
                WEB<span className="logo-highlight">FORGE</span>
              </span>
              <span className="logo-dev-name">BY AMAN VERMA</span>
            </div>
          </a>

          <p className="footer-desc">
            WebForge Lab is founded by <strong>Aman Verma</strong>. Dedicated to crafting fast client websites, full-stack MERN architectures, and reliable digital solutions.
          </p>

          <div className="footer-contact-snippets">
            <div className="footer-snip-item">
              <span>Phone:</span>
              <a href="tel:8435856067">8435856067</a>
            </div>
            <div className="footer-snip-item">
              <span>Email:</span>
              <a href="mailto:amanverma13112025@gmail.com">amanverma13112025@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            <li><button onClick={() => scrollTo('home')}>Home</button></li>
            <li><button onClick={() => scrollTo('about')}>About Aman</button></li>
            <li><button onClick={() => scrollTo('services')}>Services</button></li>
            <li><button onClick={() => scrollTo('projects')}>Projects</button></li>
            <li><button onClick={() => scrollTo('why-us')}>Why Choose Us</button></li>
            <li><button onClick={() => scrollTo('faq')}>FAQ</button></li>
            <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
          </ul>
        </div>

        {/* Live Projects Quick Links */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Live Work</h4>
          <ul className="footer-links">
            <li>
              <a href="https://hanumatkripa-pt.com" target="_blank" rel="noreferrer" className="footer-ext-link">
                Pt. Hariom Sharma (hanumatkripa-pt.com) ↗
              </a>
            </li>
            <li>
              <a href="https://swaphub45.netlify.app" target="_blank" rel="noreferrer" className="footer-ext-link">
                SwapHub Platform ↗
              </a>
            </li>
            <li>
              <a href="https://yourcareerbridge.netlify.app" target="_blank" rel="noreferrer" className="footer-ext-link">
                CareerBridge Portal ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Action Column */}
        <div className="footer-action-col">
          <h4 className="footer-col-title">Connect</h4>
          <p className="footer-action-sub">
            Direct communication for project inquiries:
          </p>
          
          <div className="social-links-row">
            <a 
              href="https://wa.me/918435856067" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn" 
              title="WhatsApp"
            >
              WhatsApp
            </a>

            <a 
              href="https://instagram.com/webforge_lab" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn" 
              title="Instagram"
            >
              Instagram
            </a>

            <a 
              href="tel:8435856067" 
              className="social-btn" 
              title="Call"
            >
              Call
            </a>
          </div>

          <button onClick={scrollToTop} className="btn-secondary back-to-top-btn">
            Back to Top ↑
          </button>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>© {new Date().getFullYear()} WebForge Lab • Aman Verma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
