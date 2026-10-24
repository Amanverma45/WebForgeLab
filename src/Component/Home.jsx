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
      {/* Ambient background glows */}
      <div className="home-bg-glow-1"></div>
      <div className="home-bg-glow-2"></div>

      <div className="section-container home-simple-container">
        {/* Creator Badge at top */}
        <div className="home-badge-wrapper">
          <span className="home-creator-badge">
            <span className="creator-dot"></span>
            Aman Verma • Full-Stack Developer
          </span>
        </div>

        {/* Hero Main Flex (Desktop: Left Brand Card, Right Content | Mobile: Vertical) */}
        <div className="home-hero-main-flex">
          {/* Left Column: Brand Showcase Card */}
          <div className="home-brand-card glass-card">
            <div className="home-logo-wrapper">
              <img src="/logo.png" alt="WebForge Lab Logo" className="home-main-logo" />
              <span className="logo-verified-badge" title="Verified Developer">✓</span>
            </div>

            <div className="brand-card-info">
              <h3 className="brand-card-name">WebForge Lab</h3>
              <p className="brand-card-sub">Digital Engineering Studio</p>
            </div>

            <div className="brand-status-pill">
              <span className="status-ping"></span>
              <span>Available for Projects</span>
            </div>

            <div className="brand-card-pills">
              <span className="tech-chip">React</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">MERN</span>
              <span className="tech-chip">APIs</span>
            </div>
          </div>

          {/* Right Column: Title, Motto, and About Card */}
          <div className="home-hero-content-col">
            {/* Title */}
            <h1 className="home-main-title">
              Modern Web Development & <span className="text-accent-gradient">Full-Stack Solutions</span>
            </h1>
            
            {/* Motto Chips */}
            <div className="home-motto-row">
              <span className="motto-pill">⚡ CLEAN CODE</span>
              <span className="motto-divider">•</span>
              <span className="motto-pill">🎨 MODERN DESIGN</span>
              <span className="motto-divider">•</span>
              <span className="motto-pill">🚀 FAST DEPLOYMENT</span>
            </div>

            {/* Real About Intro Card */}
            <div className="home-about-card glass-card">
              <div className="about-card-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="about-card-tag">webforge-lab.dev</span>
              </div>

              <p className="about-text">
                Welcome to <strong>WebForge Lab</strong>! I’m <strong>Aman Verma</strong>, a passionate web developer focused on building fast, mobile-friendly websites and robust full-stack applications. From custom business portals to full-featured MERN-stack systems with real-time workflows, I engineer reliable web experiences that help you succeed.
              </p>

              <div className="about-features-list">
                <div className="about-feat-item">
                  <span className="feat-check">✓</span>
                  <span>Custom Web Portals</span>
                </div>
                <div className="about-feat-item">
                  <span className="feat-check">✓</span>
                  <span>100% Mobile Responsive</span>
                </div>
                <div className="about-feat-item">
                  <span className="feat-check">✓</span>
                  <span>Speed & SEO Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Stats Bar */}
        <div className="home-stats-bar glass-card">
          <div className="stat-item">
            <div className="stat-icon-wrap">🚀</div>
            <div className="stat-content">
              <span className="stat-number">3+</span>
              <span className="stat-label">Live Deployed Apps</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon-wrap">📱</div>
            <div className="stat-content">
              <span className="stat-number">100%</span>
              <span className="stat-label">Mobile Responsive</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon-wrap">⚡</div>
            <div className="stat-content">
              <span className="stat-number">MERN</span>
              <span className="stat-label">Full-Stack Stack</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon-wrap">🤝</div>
            <div className="stat-content">
              <span className="stat-number">Direct</span>
              <span className="stat-label">Developer Support</span>
            </div>
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
            href="https://wa.me/918435856067?text=Hi%20Aman,%20I%20am%20interested%20in%20WebForge%20Lab%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary btn-whatsapp"
            title="Chat directly on WhatsApp"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.838.813 2.796.814 3.183 0 5.769-2.588 5.77-5.767 0-3.182-2.587-5.769-5.77-5.769zm3.385 8.169c-.144.405-.837.774-1.17.824-.312.045-.634.053-.984-.047-.282-.081-.613-.194-1.026-.372-1.815-.783-3.003-2.607-3.094-2.729-.091-.122-.738-.981-.738-1.872 0-.89.467-1.328.634-1.507.167-.179.364-.224.486-.224.122 0 .243.002.349.007.113.005.263-.043.412.316.155.372.532 1.297.579 1.392.047.095.078.207.016.331-.062.124-.093.201-.185.31-.093.109-.196.243-.28.327-.093.093-.19.195-.082.382.109.186.483.797 1.034 1.288.71.632 1.309.828 1.495.92.186.093.296.082.406-.044.111-.127.476-.554.603-.744.127-.19.254-.159.423-.095.17.064 1.077.508 1.262.601.185.093.308.138.353.216.046.079.046.455-.098.86z"/>
            </svg>
            <span>Message on WhatsApp</span>
          </a>

          <a
            href="tel:+918435856067"
            className="btn-secondary btn-call"
            title="Call Aman Verma directly"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Call: +91 8435856067</span>
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
