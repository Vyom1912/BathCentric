import { BLUENOVA_CONFIG } from '../config/bluenovaConfig';

export default function BlueNovaSection({ onOpenModal }) {
  const handleOpenModal = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      window.dispatchEvent(new CustomEvent('open-bluenova-modal'));
    }
  };

  return (
    <section className="bluenova-promo-section" id="bluenova-promo" aria-label="Website Developed by BlueNova Tech">
      {/* Blind watermark in background as requested */}
      <div className="bluenova-blind-watermark" aria-hidden="true">
        <span>BLUENOVA TECH</span>
      </div>

      <div className="container">
        <div className="bluenova-promo-card">
          <div className="bluenova-ambient-glow" aria-hidden="true" />

          {/* Top developer badge */}
          <div className="bluenova-eyebrow-wrapper">
            <div className="bluenova-tag">
              <img
                src="/images/BlueNovaIcon.png"
                alt="BlueNova Tech Icon"
                className="bluenova-tag-icon"
                width="20"
                height="20"
              />
              <span>CLIENT DEMO SHOWCASE • DEVELOPED BY BLUENOVA TECH</span>
            </div>
          </div>

          <div className="bluenova-main-grid">
            <div className="bluenova-content-col">
              <div className="bluenova-brand-lockup">
                <img
                  src="/images/BlueNovaFullLogo-white.png"
                  alt="BlueNova Tech"
                  className="bluenova-full-logo"
                  width="180"
                  height="42"
                />
                <span className="bluenova-client-badge">Official Development Partner</span>
                <a
                  href={BLUENOVA_CONFIG.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bluenova-website-chip"
                >
                  🌐 www.bluenovatech.in &rarr;
                </a>
              </div>

              <h2 className="bluenova-heading">
                Looking for an Exceptional, High-Converting Website Like This?
              </h2>

              <p className="bluenova-subheading">
                <strong>{BLUENOVA_CONFIG.legalName}</strong> provides innovative IT solutions, bespoke website development, and digital marketing. 
                We engineered this entire digital platform from scratch — complete with custom quotation calculators, WhatsApp lead routing, and sub-second load times.
              </p>

              <div className="bluenova-features-grid">
                {BLUENOVA_CONFIG.services.map((service, index) => (
                  <div key={index} className="bluenova-feature-item">
                    <div className="bluenova-feature-bullet">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <strong className="bluenova-feature-title">{service.title}</strong>
                        {service.badge && <span className="bluenova-mini-badge">{service.badge}</span>}
                      </div>
                      <p className="bluenova-feature-desc">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bluenova-actions-row">
                <button
                  type="button"
                  className="btn btn-bluenova-primary"
                  onClick={handleOpenModal}
                  id="btn-bluenova-consultation"
                >
                  <img src="/images/BlueNovaIcon.png" alt="" width="18" height="18" />
                  <span>Start Your Website Project</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                <a
                  href={BLUENOVA_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-bluenova-whatsapp"
                  id="btn-bluenova-whatsapp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.777.818 2.795.818 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.769-5.766-5.769zm10.22 5.766c0 5.655-4.598 10.252-10.25 10.252-1.777 0-3.488-.46-4.994-1.328l-5.556 1.458 1.488-5.419c-.958-1.564-1.464-3.376-1.464-5.234 0-5.655 4.598-10.253 10.25-10.253 5.654 0 10.25 4.598 10.25 10.253z"/>
                  </svg>
                  <span>WhatsApp: {BLUENOVA_CONFIG.phone}</span>
                </a>

                <a
                  href={`tel:${BLUENOVA_CONFIG.phoneTel}`}
                  className="btn btn-bluenova-ghost"
                  id="btn-bluenova-call"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Call {BLUENOVA_CONFIG.phone}</span>
                </a>

                <a
                  href={BLUENOVA_CONFIG.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-bluenova-ghost"
                  id="btn-bluenova-website"
                >
                  <span>Visit bluenovatech.in &rarr;</span>
                </a>
              </div>
            </div>

            {/* Right side interactive card showcase */}
            <div className="bluenova-side-col">
              <div className="bluenova-tech-card">
                <div className="bluenova-tech-card-header">
                  <div className="bluenova-dot red"></div>
                  <div className="bluenova-dot yellow"></div>
                  <div className="bluenova-dot green"></div>
                  <span className="bluenova-card-status">LIVE CLIENT DEMO ENVIRONMENT</span>
                </div>

                <div className="bluenova-demo-specs">
                  <h5>Features Engineered in this Project:</h5>
                  <ul className="bluenova-specs-list">
                    <li>
                      <span className="spec-check">✓</span>
                      <div>
                        <strong>Custom Architectural UI/UX</strong>
                        <span>Brushed brass &amp; obsidian dark design system</span>
                      </div>
                    </li>
                    <li>
                      <span className="spec-check">✓</span>
                      <div>
                        <strong>Interactive Enclosure Quotation Engine</strong>
                        <span>Custom laser-measurement &amp; glass thickness calculator</span>
                      </div>
                    </li>
                    <li>
                      <span className="spec-check">✓</span>
                      <div>
                        <strong>Direct WhatsApp Lead Funnel</strong>
                        <span>One-click enquiry routing with pre-filled specs</span>
                      </div>
                    </li>
                    <li>
                      <span className="spec-check">✓</span>
                      <div>
                        <strong>Sub-Second Loading &amp; Responsive Layout</strong>
                        <span>Optimized for 100% mobile fluidity and SEO</span>
                      </div>
                    </li>
                  </ul>

                  <div className="bluenova-stat-pills">
                    {BLUENOVA_CONFIG.stats.map((stat, i) => (
                      <div key={i} className="bluenova-stat-pill">
                        <span className="stat-val">{stat.value}</span>
                        <span className="stat-lbl">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bluenova-callout-box">
                    <p>
                      <strong>Have a project in mind?</strong> We provide end-to-end IT solutions, website engineering, and rapid deployment.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <button
                        type="button"
                        className="bluenova-inline-link"
                        onClick={handleOpenModal}
                      >
                        Book Free Consultation &rarr;
                      </button>
                      <a
                        href={BLUENOVA_CONFIG.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.8rem', color: '#60A5FA', textDecoration: 'none' }}
                      >
                        bluenovatech.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
