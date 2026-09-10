import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const points = [
    "🚀 Fast & Responsive Performance — Optimized code for lightning-speed page loading.",
    "🎨 Modern Custom UI/UX Design — Unique designs tailored to your brand identity.",
    "⚡ Reliable & On-Time Delivery — Clean engineering with guaranteed project deadlines."
  ];

  return (
    <section id="why-us" className="section-container why-us-simple-section">
      <div className="section-header">
        <div className="section-tag">Why Choose Us</div>
        <h2 className="section-title">
          Why Work With <span className="text-gradient-lime">WebForge Lab</span>?
        </h2>
      </div>

      <div className="glass-card why-us-simple-card">
        <ul className="why-us-list">
          {points.map((pt, i) => (
            <li key={i} className="why-us-item">
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
