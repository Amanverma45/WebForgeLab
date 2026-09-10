import React, { useState } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please fill in your name and message.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Direct email submission to amanverma13112025@gmail.com via FormSubmit AJAX service
      const response = await fetch("https://formsubmit.co/ajax/amanverma13112025@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Contact_Email_Phone: formData.email || 'Not provided',
          Message: formData.message,
          _subject: `New WebForge Lab Inquiry from ${formData.name}`
        })
      });

      if (response.ok || response.status === 200) {
        setSubmitted(true);
      } else {
        // Fallback email trigger
        window.location.href = `mailto:amanverma13112025@gmail.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Email submission:', err);
      // Fallback email trigger on error
      window.location.href = `mailto:amanverma13112025@gmail.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container contact-simple-section">
      <div className="section-header">
        <div className="section-tag">Get In Touch</div>
        <h2 className="section-title">
          Contact <span className="text-gradient-lime">WebForge Lab</span>
        </h2>
        <p className="section-subtitle">
          Reach out directly via Call, WhatsApp, Email, or Instagram for quick project inquiries!
        </p>
      </div>

      {/* Direct Contact Cards Row */}
      <div className="contact-cards-grid">
        {/* Phone Call Card */}
        <a href="tel:8435856067" className="glass-card contact-channel-card">
          <div className="channel-icon">📞</div>
          <div className="channel-info">
            <span className="channel-label">Call Us</span>
            <h4 className="channel-val">8435856067</h4>
          </div>
        </a>

        {/* WhatsApp Card */}
        <a
          href="https://wa.me/918435856067"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card contact-channel-card whatsapp-card"
        >
          <div className="channel-icon">💬</div>
          <div className="channel-info">
            <span className="channel-label">WhatsApp</span>
            <h4 className="channel-val">8435856067</h4>
          </div>
        </a>

        {/* Email Card */}
        <a href="mailto:amanverma13112025@gmail.com" className="glass-card contact-channel-card">
          <div className="channel-icon">✉️</div>
          <div className="channel-info">
            <span className="channel-label">Email</span>
            <h4 className="channel-val email-text">amanverma13112025@gmail.com</h4>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href="https://instagram.com/webforge_lab"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card contact-channel-card insta-card"
        >
          <div className="channel-icon">📸</div>
          <div className="channel-info">
            <span className="channel-label">Instagram</span>
            <h4 className="channel-val">@webforge_lab</h4>
          </div>
        </a>
      </div>

      {/* Simple Quick Contact Form */}
      <div className="glass-card contact-simple-form-wrapper">
        <h3 className="form-title">Send Us a Quick Message</h3>
        <p className="form-subtitle-email">Submissions are delivered directly to <strong>WebForge Lab</strong></p>

        {submitted ? (
          <div className="form-success-box">
            <div className="success-icon">✔</div>
            <h4>Thank you, {formData.name}!</h4>
            <p>Your message has been sent directly to <strong>WebForge Lab</strong>. We will get back to you shortly.</p>
            <button
              className="btn-secondary"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
              }}
            >
              Send Another Message
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
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="input-group">
                <label>Email / Phone</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your email or phone number"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Message *</label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="How can WebForge Lab help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary form-send-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default GetInTouch;
