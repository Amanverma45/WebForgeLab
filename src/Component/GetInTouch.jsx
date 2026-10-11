import React, { useState } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please enter your name and message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/amanverma13112025@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Contact_Email_Phone: formData.email || 'Not provided',
          Project_Type: formData.projectType,
          Message: formData.message,
          _subject: `New Project Inquiry from ${formData.name} (${formData.projectType})`
        })
      });

      if (response.ok || response.status === 200) {
        setSubmitted(true);
      } else {
        window.location.href = `mailto:amanverma13112025@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Project Type: ${formData.projectType}\nContact: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Email submission error:', err);
      window.location.href = `mailto:amanverma13112025@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Project Type: ${formData.projectType}\nContact: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container contact-simple-section">
      <div className="section-header">
        <div className="section-tag">Contact</div>
        <h2 className="section-title">
          Get In Touch with <span className="text-accent">Aman Verma</span>
        </h2>
        <p className="section-subtitle">
          Have an idea or need a website? Reach out directly via WhatsApp, Phone, or Email.
        </p>
      </div>

      {/* Direct Contact Channels Grid */}
      <div className="contact-cards-grid">
        {/* Phone Call Card */}
        <a href="tel:8435856067" className="glass-card contact-channel-card">
          <div className="channel-info">
            <span className="channel-label">Direct Phone</span>
            <h4 className="channel-val">8435856067</h4>
            <span className="channel-sub">Available 9 AM – 9 PM</span>
          </div>
        </a>

        {/* WhatsApp Card */}
        <a
          href="https://wa.me/918435856067"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card contact-channel-card"
        >
          <div className="channel-info">
            <span className="channel-label">WhatsApp Chat</span>
            <h4 className="channel-val">8435856067</h4>
            <span className="channel-sub text-accent">Chat Directly →</span>
          </div>
        </a>

        {/* Email Card */}
        <a href="mailto:amanverma13112025@gmail.com" className="glass-card contact-channel-card">
          <div className="channel-info">
            <span className="channel-label">Email Address</span>
            <h4 className="channel-val email-text">amanverma13112025@gmail.com</h4>
            <span className="channel-sub">Direct Inbox</span>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href="https://instagram.com/webforge_lab"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card contact-channel-card"
        >
          <div className="channel-info">
            <span className="channel-label">Instagram</span>
            <h4 className="channel-val">@webforge_lab</h4>
            <span className="channel-sub">Updates & Work</span>
          </div>
        </a>
      </div>

      {/* Quick Contact & Inquiry Form */}
      <div className="glass-card contact-simple-form-wrapper">
        <div className="form-header-area">
          <h3 className="form-title">Send a Project Inquiry</h3>
          <p className="form-subtitle-email">
            Delivered directly to Aman Verma at <strong>amanverma13112025@gmail.com</strong>
          </p>
        </div>

        {submitted ? (
          <div className="form-success-box">
            <div className="success-icon">✓</div>
            <h4>Thank you, {formData.name}!</h4>
            <p>Your message has been received. I will review your requirements and reach out to you shortly.</p>
            <button
              className="btn-secondary"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', projectType: 'Business Website', message: '' });
              }}
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="simple-form">
            <div className="form-row-2">
              <div className="input-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="input-group">
                <label>Email or WhatsApp Number *</label>
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="e.g. name@example.com or 9876543210"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="input-select"
              >
                <option value="Business Website">Custom Business / Client Website</option>
                <option value="Full-Stack MERN App">Full-Stack MERN Web Application</option>
                <option value="Website Redesign">UI/UX Modernization & Redesign</option>
                <option value="Deployment / Cloud">Hosting, Domain & Cloud Setup</option>
                <option value="Other Consultation">Other Consultation / General Inquiry</option>
              </select>
            </div>

            <div className="input-group">
              <label>Project Details / Message *</label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Tell me about your project goals, required features, or any questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary form-send-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending Message...' : 'Send Inquiry to Aman'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default GetInTouch;
