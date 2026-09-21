import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2>Ready for glass that fits <em>your</em> bathroom?</h2>
          </div>
          <Link to="/quote" className="btn btn-accent btn-lg">
            Request a Measurement
            <Icon name="arrow" size={18} strokeWidth={2} />
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo-white.svg" alt="BathCentric" width="200" />
            <p>
              Custom architectural shower enclosures and bespoke glass solutions. Engineered for precision, longevity, and pure minimalist luxury.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                WhatsApp Enquiries
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Enclosure Systems</h5>
            <ul className="footer-links">
              <li><Link to="/fixed">Fixed Walk-In Screens</Link></li>
              <li><Link to="/swing">Swing / Frameless Hinged</Link></li>
              <li><Link to="/sliding">Sliding Glass Systems</Link></li>
              <li><Link to="/l-shaped">L-Shaped Corner Enclosures</Link></li>
              <li><Link to="/enclosures">Comparison Guide</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Architectural Details</h5>
            <ul className="footer-links">
              <li><Link to="/glass">Toughened &amp; Fluted Glass</Link></li>
              <li><Link to="/hardware">Hardware &amp; PVD Finishes</Link></li>
              <li><Link to="/process">5-Step Process</Link></li>
              <li><Link to="/projects">Completed Projects</Link></li>
              <li><Link to="/about">About BathCentric</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact &amp; Service</h5>
            <ul className="footer-links footer-contact">
              <li><a href="tel:+919876543210"><Icon name="phone" size={16} /> +91 98765 43210</a></li>
              <li><a href="mailto:enquiries@bathcentric.in"><Icon name="mail" size={16} /> enquiries@bathcentric.in</a></li>
              <li><span><Icon name="pin" size={16} /> Mumbai • Bengaluru • Delhi NCR • Hyderabad • Pune</span></li>
              <li><Link to="/quote" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Request Measurement &rarr;</Link></li>
              <li style={{ marginTop: '0.75rem' }}><Link to="/admin" className="admin-badge">Admin Portal</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 BATHCENTRIC. All rights reserved. Domain: <a href="https://bathcentric.in" style={{ color: 'inherit' }}>bathcentric.in</a></div>
          <div>Toughened Safety Glass Certified EN 12150 / IS 2553 • 5-Year Hardware Warranty</div>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">BATHCENTRIC</div>
    </footer>
  );
}
