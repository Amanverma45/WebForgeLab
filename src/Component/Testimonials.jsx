import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const STORAGE_KEY = 'webforge_client_reviews_v2';

const Testimonials = () => {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Filter out any default mock reviews if present
          return parsed.filter(r => r.id !== 1 && r.id !== 2 && r.id !== 3);
        }
      }
    } catch (e) {
      console.error("Error reading reviews from localStorage", e);
    }
    return [];
  });

  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  // Save to localStorage when reviews change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    } catch (e) {
      console.error("Error saving reviews to localStorage", e);
    }
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) {
      alert("Please fill in your name and review.");
      return;
    }

    // Generate Initials
    const initials = name
      .trim()
      .split(' ')
      .map(part => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'CU';

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim() || 'Verified Client',
      avatar: initials,
      rating: Number(rating) || 5,
      date: 'Just Now',
      badge: 'Client Review',
      review: reviewText.trim()
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setRole('');
    setRating(5);
    setReviewText('');
    setShowForm(false);
    setSubmittedMessage(true);

    setTimeout(() => {
      setSubmittedMessage(false);
    }, 5000);
  };

  const hasReviews = reviews.length > 0;
  const averageRating = hasReviews
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : '5.0';

  return (
    <section id="reviews" className="section-container testimonials-section">
      <div className="section-header">
        <div className="section-tag">Client Feedback</div>
        <h2 className="section-title">
          Client Reviews & <span className="text-accent">Testimonials</span>
        </h2>
        <p className="section-subtitle">
          Genuine feedback from business owners, clients, and platform users who have worked directly with Aman Verma.
        </p>
      </div>

      {/* Top Trust Summary Bar */}
      <div className="reviews-trust-bar glass-card">
        <div className="trust-item">
          <div className="trust-stars">★★★★★</div>
          <div className="trust-info">
            <span className="trust-number">{hasReviews ? `${averageRating} / 5.0` : '5.0 / 5.0'}</span>
            <span className="trust-label">{hasReviews ? 'Average Rating' : 'Target Rating'}</span>
          </div>
        </div>

        <div className="trust-divider"></div>

        <div className="trust-item">
          <span className="trust-icon">🚀</span>
          <div className="trust-info">
            <span className="trust-number">100%</span>
            <span className="trust-label">On-Time Handover</span>
          </div>
        </div>

        <div className="trust-divider"></div>

        <div className="trust-item">
          <span className="trust-icon">🤝</span>
          <div className="trust-info">
            <span className="trust-number">{reviews.length}</span>
            <span className="trust-label">Client Reviews</span>
          </div>
        </div>

        <div className="trust-cta-wrap">
          <button 
            onClick={() => setShowForm(!showForm)} 
            className="btn-primary write-review-toggle-btn"
          >
            {showForm ? '✕ Close Form' : '★ Write a Review'}
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {submittedMessage && (
        <div className="review-success-toast glass-card">
          <span className="toast-icon">✓</span>
          <div>
            <strong>Thank you for your feedback!</strong>
            <p>Your review has been saved and published successfully.</p>
          </div>
        </div>
      )}

      {/* Interactive Review Form */}
      {showForm && (
        <div className="write-review-card glass-card">
          <div className="form-card-header">
            <h3 className="form-card-title">Share Your Experience with WebForge Lab</h3>
            <p className="form-card-subtitle">Your genuine review will be visible directly on this website.</p>
          </div>

          <form onSubmit={handleSubmit} className="review-form">
            <div className="rating-select-group">
              <label>Select Your Rating:</label>
              <div className="star-picker">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={`star-btn ${(hoverRating || rating) >= star ? 'active' : ''}`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    ★
                  </button>
                ))}
                <span className="rating-text">({rating} of 5 Stars)</span>
              </div>
            </div>

            <div className="form-row-2">
              <div className="review-input-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="review-input-group">
                <label>Designation or Project Name</label>
                <input
                  type="text"
                  placeholder="e.g. Business Owner / E-commerce Site"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
            </div>

            <div className="review-input-group">
              <label>Your Review & Feedback *</label>
              <textarea
                required
                rows="4"
                placeholder="How was your experience working with Aman Verma? Mention communication, speed, responsiveness..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
            </div>

            <div className="form-actions-row">
              <button type="submit" className="btn-primary submit-review-btn">
                <span>Publish Review</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>

              <button 
                type="button" 
                onClick={() => setShowForm(false)} 
                className="btn-secondary cancel-review-btn"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews Display */}
      {hasReviews ? (
        <div className="reviews-grid">
          {reviews.map((item) => (
            <div key={item.id} className="glass-card review-card">
              <div className="review-card-top">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">{item.avatar}</div>
                  <div>
                    <h4 className="reviewer-name">{item.name}</h4>
                    <p className="reviewer-role">{item.role}</p>
                  </div>
                </div>
                <span className="review-badge">{item.badge}</span>
              </div>

              <div className="review-rating-row">
                <div className="review-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < item.rating ? 'star-filled' : 'star-empty'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="review-date">{item.date}</span>
              </div>

              <p className="review-text">"{item.review}"</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="reviews-empty-state glass-card">
          <div className="empty-state-icon">⭐</div>
          <h3 className="empty-state-title">No Client Reviews Yet</h3>
          <p className="empty-state-sub">
            Have you worked with Aman Verma at WebForge Lab? Click below to share your genuine client review!
          </p>
          <button 
            onClick={() => setShowForm(true)} 
            className="btn-primary"
          >
            ★ Be the First to Leave a Review
          </button>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
