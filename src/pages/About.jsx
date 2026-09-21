import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>About</span>
          </nav>
          <span className="eyebrow" style={{ color: '#C5A880' }}>The BathCentric Philosophy</span>
          <h1>Bespoke Shower Architecture</h1>
          <p>
            We founded BathCentric on a singular principle: your bathroom is an intimate architectural retreat, and mass-market prefabricated kits do not belong in it.
          </p>
        </div>
      </section>

      {/* Brand Story & Core Ethos */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Our Story & Positioning</span>
              <h2>Rejecting The "One-Size-Fits-All" Box</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                For decades, bathroom renovation required homeowners to compromise. Either choose a clumsy plastic-framed modular cubicle that leaked and rattled, or hire local uncertified glass contractors who lacked proper structural engineering, resulting in sagging doors and stained glass.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                <strong>BathCentric was built to bridge this chasm.</strong> We operate as an architectural partner for architects, interior designers, and homeowners. Every enclosure we manufacture is measured on-site with laser precision, CNC cut with digital tolerances, and installed by trained master craftsmen.
              </p>
              <div className="stat-row">
                <div className="stat-item">
                  <div className="stat-number">1,500+</div>
                  <div className="stat-label">Enclosures Installed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.4%</div>
                  <div className="stat-label">Plumb &amp; Water Tightness</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5 Years</div>
                  <div className="stat-label">Warranty Promise</div>
                </div>
              </div>
            </div>
            <div>
              <img src="/images/about.jpg" alt="BathCentric Architectural Craftsmanship" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Quality Pillars */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Integrity In Every Detail</span>
            <h2>The Four Quality Pillars</h2>
            <p>How we ensure unmatched longevity and beauty in high-moisture bathroom spaces.</p>
          </div>

          <div className="grid-4">
            <div className="feature-card">
              <div className="feature-icon"><Icon name="gem" /></div>
              <h3 className="feature-title">Pure Certified Glass</h3>
              <p style={{ fontSize: '0.95rem' }}>Only 10mm & 12mm thermally tempered safety glass meeting EN 12150 and IS 2553 standards with diamond-polished pencil edges.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Icon name="shield" /></div>
              <h3 className="feature-title">Solid Brass & Stainless</h3>
              <p style={{ fontSize: '0.95rem' }}>Zero zinc alloy or hollow pot-metal. We use only drop-forged solid brass and SUS 304 marine-grade stainless steel.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Icon name="sparkle" /></div>
              <h3 className="feature-title">PVD Surface Technology</h3>
              <p style={{ fontSize: '0.95rem' }}>Physical Vapor Deposition creates an atomic bond impervious to steam, moisture, and cleaning detergents without tarnishing.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Icon name="hardhat" /></div>
              <h3 className="feature-title">Certified In-House Crews</h3>
              <p style={{ fontSize: '0.95rem' }}>We never outsource installations to unvetted third parties. Every installer is full-time, trained, and accountable to BathCentric.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Presence */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <img src="/images/hero.jpg" alt="BathCentric Service Standards" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            <div>
              <span className="eyebrow">Service Footprint</span>
              <h2>Serving Discerning Homes Across India</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Headquartered with dedicated regional survey teams across <strong>Mumbai, Bengaluru, Delhi NCR, Hyderabad, Chennai, and Pune</strong>.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Whether collaborating directly with leading architectural practices or private homeowners constructing their dream villas, BathCentric delivers personalized attention, rapid turnaround, and relentless pursuit of perfection.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/quote" className="btn btn-primary">Book A Site Survey</Link>
                <Link to="/contact" className="btn btn-outline">Contact Regional Office</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
