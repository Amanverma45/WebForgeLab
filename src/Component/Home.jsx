import React from 'react';
import './Home.css';

const Home = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-hero-section">
      <div className="section-container home-simple-container">
        {/* Creator Badge */}
        <div className="home-badge-wrapper">
          <span className="home-creator-badge">
            <span className="creator-dot"></span>
            Aman Verma • Full-Stack Developer
          </span>
        </div>

        {/* Brand Logo */}
        <div className="home-logo-box">
          <img src="/logo.png" alt="WebForge Lab Logo" className="home-main-logo" />
        </div>

        {/* Title */}
        <h1 className="home-main-title">
          Modern Web Development & <span className="text-accent">Full-Stack Solutions</span>
        </h1>
        
        <p className="home-motto-tag">CLEAN CODE • MODERN DESIGN • FAST DEPLOYMENT</p>

        {/* Real About Intro */}
        <div className="home-about-card glass-card">
          <p className="about-text">
            Welcome to <strong>WebForge Lab</strong>! I’m <strong>Aman Verma</strong>, a passionate web developer focused on building fast, mobile-friendly websites and robust full-stack applications. From custom business portals to full-featured MERN-stack systems with real-time workflows, I engineer reliable web experiences that help you succeed.
          </p>
        </div>

        {/* Real Stats Bar */}
        <div className="home-stats-bar glass-card">
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Live Deployed Apps</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Mobile Responsive</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">MERN</span>
            <span className="stat-label">Full-Stack Stack</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">Direct</span>
            <span className="stat-label">Developer Support</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="home-buttons-row">
          <button onClick={() => scrollTo('projects')} className="btn-primary">
            <span>Explore Live Projects</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
          
          <a
            href="https://wa.me/918435856067"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>Message on WhatsApp</span>
          </a>

          <button onClick={() => scrollTo('contact')} className="btn-secondary">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
