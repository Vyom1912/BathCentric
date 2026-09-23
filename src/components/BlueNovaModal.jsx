import { useState, useEffect } from 'react';
import { BLUENOVA_CONFIG } from '../config/bluenovaConfig';

export default function BlueNovaModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: 'Custom Showroom / Catalog Website',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Website Enquiry from BathCentric Demo*\n` +
      `👤 *Name:* ${formData.name || 'Not provided'}\n` +
      `📞 *Phone/WhatsApp:* ${formData.phone || 'Not provided'}\n` +
      `🏢 *Project Type:* ${formData.businessType}\n` +
      `💬 *Requirements:* ${formData.message || 'I would like a website like BathCentric.'}`
    );
    window.open(`https://wa.me/${BLUENOVA_CONFIG.whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="bluenova-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bluenova-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="bluenova-modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="bluenova-modal-header">
          <div className="bluenova-modal-badge">
            <img src="/images/BlueNovaIcon.png" alt="BlueNova Icon" width="22" height="22" />
            <span>DEVELOPED BY BLUENOVA TECH</span>
          </div>
          <img
            src="/images/BlueNovaFullLogo-white.png"
            alt="BlueNova Tech"
            className="bluenova-modal-logo"
            height="32"
          />
          <h3>Want a high-impact website like this for your brand?</h3>
          <p>
            We design, develop, and deploy ultra-fast, luxury websites and lead generation engines tailored to your business.
          </p>
        </div>

        {submitted ? (
          <div className="bluenova-modal-success">
            <div className="bluenova-success-icon">✓</div>
            <h4>Redirecting to WhatsApp...</h4>
            <p>Our senior web engineering team will connect with you shortly!</p>
          </div>
        ) : (
          <form className="bluenova-modal-form" onSubmit={handleSubmit}>
            <div className="bluenova-quick-actions">
              <a
                href={BLUENOVA_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bluenova-quick-btn whatsapp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.777.818 2.795.818 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.769-5.766-5.769zm10.22 5.766c0 5.655-4.598 10.252-10.25 10.252-1.777 0-3.488-.46-4.994-1.328l-5.556 1.458 1.488-5.419c-.958-1.564-1.464-3.376-1.464-5.234 0-5.655 4.598-10.253 10.25-10.253 5.654 0 10.25 4.598 10.25 10.253z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
              <a href={`tel:${BLUENOVA_CONFIG.phoneTel}`} className="bluenova-quick-btn call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Call {BLUENOVA_CONFIG.phone}</span>
              </a>
            </div>

            <div className="bluenova-divider">
              <span>Or send a direct enquiry</span>
            </div>

            <div className="bluenova-field">
              <label htmlFor="bn-name">Your Name</label>
              <input
                id="bn-name"
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="bluenova-field">
              <label htmlFor="bn-phone">Phone / WhatsApp Number</label>
              <input
                id="bn-phone"
                type="tel"
                required
                placeholder="+91 98765 00000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="bluenova-field">
              <label htmlFor="bn-type">Type of Website Needed</label>
              <select
                id="bn-type"
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              >
                <option value="Custom Architectural / Showroom Website">Luxury Showroom / Catalog Website</option>
                <option value="Interactive 3D / Quoting Website">Interactive 3D / Quoting Calculator Website</option>
                <option value="Corporate / Company Website">Corporate / Brand Website</option>
                <option value="E-Commerce / Direct Selling Platform">E-Commerce / Direct Selling Store</option>
                <option value="Redesign of Existing Website">Redesign / Revamp Existing Website</option>
              </select>
            </div>

            <div className="bluenova-field">
              <label htmlFor="bn-msg">Project Details or Questions (Optional)</label>
              <textarea
                id="bn-msg"
                rows="3"
                placeholder="Tell us about your brand, requirements, or timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="bluenova-submit-btn">
              <span>Send Enquiry via WhatsApp</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="bluenova-modal-footer-note">
              <span>🔒 100% Confidential • Direct discussion with our tech leads</span>
              <div style={{ marginTop: '0.4rem' }}>
                <a
                  href={BLUENOVA_CONFIG.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#60A5FA', textDecoration: 'none', fontSize: '0.78rem' }}
                >
                  🌐 Visit Official Website: <strong>www.bluenovatech.in</strong> &rarr;
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
