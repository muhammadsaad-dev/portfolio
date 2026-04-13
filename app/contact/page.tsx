'use client'; // Required because we are using React state and event listeners

import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'' | 'submitting' | 'success' | 'error'>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default browser redirect
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xpqkzakn', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); // Clears the form fields
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="container section">
      <div className="section-header">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Let's talk</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Open to opportunities</h3>
          <p>I'm actively looking for full-time roles and internships in software engineering, full-stack development, and AI/ML. If you have an opportunity or just want to connect, feel free to reach out.</p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:saadcs.dev@gmail.com">
              <span className="contact-link-icon">@</span>
              saadcs.dev@gmail.com
            </a>
            <a className="contact-link" href="tel:+923211673839">
              <span className="contact-link-icon">#</span>
              +92-321-1673839
            </a>
            <a className="contact-link" href="https://github.com/muhammadsaad-dev" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">gh</span>
              github.com/muhammadsaad-dev
            </a>
            <a className="contact-link" href="https://linkedin.com/in/muhammad-saad-78a308267" target="_blank" rel="noreferrer">
              <span className="contact-link-icon">in</span>
              linkedin.com/in/muhammad-saad
            </a>
          </div>
        </div>
        
        <div>
          {status === 'success' ? (
            <div style={{ 
              background: 'var(--bg2)', 
              border: '1px solid var(--border)', 
              borderRadius: 'var(--radius)', 
              padding: '2rem', 
              textAlign: 'center',
              color: 'var(--green)' 
            }}>
              <h3 style={{ marginBottom: '10px', color: '#fff' }}>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setStatus('')} 
                className="btn-secondary" 
                style={{ marginTop: '1.5rem' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" name="message" placeholder="Tell me about the opportunity or just say hello..." required></textarea>
              </div>
              
              {status === 'error' && (
                <p style={{ color: '#ef4444', fontSize: '13px', margin: '0' }}>Oops! There was a problem submitting your form.</p>
              )}

              <button 
                type="submit" 
                className="btn-primary" 
                disabled={status === 'submitting'}
                style={{ 
                  textAlign: 'center', 
                  width: '100%', 
                  border: 'none', 
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer', 
                  fontFamily: 'inherit',
                  opacity: status === 'submitting' ? 0.7 : 1
                }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}