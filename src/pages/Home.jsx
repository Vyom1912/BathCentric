import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import FinishSelector from '../components/FinishSelector';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/images/hero.jpg" alt="Architectural frameless glass shower enclosure and luxury bathroom accessories" fetchpriority="high" />
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-pill">
              <span className="hero-pill-dot" />
              Complete Bathroom Architectural Solutions
            </span>
            <h1 className="hero-title">
              Designed around <span className="text-gradient">your bathroom.</span>
            </h1>
            <p className="hero-subtitle">
              We engineer bespoke architectural glass, matching luxury brass accessories, and custom frameless shower enclosures. Everything designed, laser-measured, and crafted to elevate your bathroom into a private sanctuary.
            </p>
            <div className="hero-ctas">
              <Link to="/quote" className="btn btn-accent btn-lg">
                <Icon name="camera" size={20} strokeWidth={2} />
                Send Your Bathroom
              </Link>
              <Link to="/enclosures" className="btn btn-glass btn-lg">Explore Collections</Link>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">100%</div>
              <div className="hero-stat-label">Custom Millimeter Fit</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">10mm</div>
              <div className="hero-stat-label">Safety Toughened Glass</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">Full Suite</div>
              <div className="hero-stat-label">PVD Matching Accessories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust-strip" aria-label="Certifications and materials">
        <div className="container trust-strip-inner">
          <span>EN 12150 Certified Safety Glass</span>
          <span>IS 2553 Toughened</span>
          <span>SUS 304 Marine Stainless</span>
          <span>Solid Brass PVD Accessories</span>
          <span>Laser-Measured Custom Fit</span>
        </div>
      </div>

      {/* The 3 Core Bathroom Collections */}
      <section className="section" id="collections" style={{ backgroundColor: 'var(--color-bg-white)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Complete Bathroom Solutions</span>
            <h2 className="section-title">Glasses, Accessories &amp; Enclosures — All in One Place</h2>
            <p>
              Your bathroom deserves complete aesthetic harmony. We don't just sell shower cubicles; we engineer custom architectural glass panels, matching solid brass luxury accessories, and bespoke shower systems that work in perfect unison.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {/* Pillar 1: Architectural Glass */}
            <article className="category-card" style={{ height: '100%' }}>
              <div className="category-card-img" style={{ height: '220px' }}>
                <span className="category-badge">Custom Glass</span>
                <img src="/images/glass-fluted.jpg" alt="Architectural Fluted Bathroom Glass" loading="lazy" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">Architectural Bathroom Glass</h3>
                <p className="category-card-desc">
                  10mm &amp; 12mm certified safety glass cut to any shape. Explore fluted reeded glass for elegant privacy, low-iron ultra-clear for true tile fidelity, and wet/dry toilet dividing partitions.
                </p>
                <div className="category-card-footer" style={{ marginTop: 'auto' }}>
                  <Link to="/glass" className="link-arrow">Explore Glass Options <Icon name="arrow" size={16} strokeWidth={2} /></Link>
                </div>
              </div>
            </article>

            {/* Pillar 2: Luxury Accessories */}
            <article className="category-card" style={{ height: '100%' }}>
              <div className="category-card-img" style={{ height: '220px' }}>
                <span className="category-badge">Hardware &amp; Fittings</span>
                <img src="/images/hardware.jpg" alt="Solid Brass Luxury Bathroom Accessories" loading="lazy" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">Luxury Bathroom Accessories</h3>
                <p className="category-card-desc">
                  Solid brass towel bars, designer knurled robe hooks, floating tempered glass shelves, linear shower floor drains, and architectural door handles in 5 matching PVD finishes.
                </p>
                <div className="category-card-footer" style={{ marginTop: 'auto' }}>
                  <Link to="/hardware" className="link-arrow">Explore Accessories <Icon name="arrow" size={16} strokeWidth={2} /></Link>
                </div>
              </div>
            </article>

            {/* Pillar 3: Custom Enclosures */}
            <article className="category-card" style={{ height: '100%' }}>
              <div className="category-card-img" style={{ height: '220px' }}>
                <span className="category-badge">Shower Systems</span>
                <img src="/images/hero.jpg" alt="Custom Frameless Shower Enclosures" loading="lazy" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">Custom Shower Enclosures</h3>
                <p className="category-card-desc">
                  Minimalist fixed walk-in screens, smooth soft-close sliding enclosures, 180° swing doors, and 90° L-shaped corner units engineered for zero leaks and effortless gliding.
                </p>
                <div className="category-card-footer" style={{ marginTop: 'auto' }}>
                  <Link to="/enclosures" className="link-arrow">Explore Enclosures <Icon name="arrow" size={16} strokeWidth={2} /></Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Four Main Product Enclosures */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Precision Enclosure Systems</span>
            <h2 className="section-title">Engineered For Every Bathroom Layout</h2>
            <p>
              Whether you require a minimalist open walk-in screen, a space-saving slider, or an expansive corner enclosure, every system is tailored to your millimeter specifications.
            </p>
          </div>

          <div className="grid-4">
            {/* 1. Fixed Walk-In */}
            <article className="category-card">
              <div className="category-card-img">
                <span className="category-badge">Walk-In Wetroom</span>
                <img src="/images/fixed.jpg" alt="Fixed Walk-In Shower Screen" loading="lazy" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">Fixed Walk-In</h3>
                <p className="category-card-desc">Minimalist single glass screen with stabilizer bar. The ultimate barrier-free wetroom experience.</p>
                <div className="category-card-price">Starting from <strong>₹14,500*</strong></div>
                <div className="category-card-footer">
                  <Link to="/fixed" className="link-arrow">View Specs <Icon name="arrow" size={16} strokeWidth={2} /></Link>
                  <Link to="/quote?type=fixed" className="btn btn-outline btn-sm">Enquire</Link>
                </div>
              </div>
            </article>

            {/* 2. Swing / Frameless */}
            <article className="category-card">
              <div className="category-card-img">
                <span className="category-badge">Hinged Luxury</span>
                <img src="/images/swing.jpg" alt="Frameless Swing Hinged Shower Door" loading="lazy" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">Swing Frameless</h3>
                <p className="category-card-desc">Precision solid-brass 90°/180° hinges with watertight magnetic seals. Classic architectural elegance.</p>
                <div className="category-card-price">Starting from <strong>₹21,000*</strong></div>
                <div className="category-card-footer">
                  <Link to="/swing" className="link-arrow">View Specs <Icon name="arrow" size={16} strokeWidth={2} /></Link>
                  <Link to="/quote?type=swing" className="btn btn-outline btn-sm">Enquire</Link>
                </div>
              </div>
            </article>

            {/* 3. Sliding */}
            <article className="category-card">
              <div className="category-card-img">
                <span className="category-badge">Space Saving</span>
                <img src="/images/sliding.jpg" alt="Sliding Shower Door Enclosure" loading="lazy" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">Sliding Systems</h3>
                <p className="category-card-desc">Smooth top-roller gliding motion with integrated soft-close dampers. Perfect for compact master ensuites.</p>
                <div className="category-card-price">Starting from <strong>₹26,500*</strong></div>
                <div className="category-card-footer">
                  <Link to="/sliding" className="link-arrow">View Specs <Icon name="arrow" size={16} strokeWidth={2} /></Link>
                  <Link to="/quote?type=sliding" className="btn btn-outline btn-sm">Enquire</Link>
                </div>
              </div>
            </article>

            {/* 4. L-Shaped Corner */}
            <article className="category-card">
              <div className="category-card-img">
                <span className="category-badge">Corner Solution</span>
                <img src="/images/l-shaped.jpg" alt="L-Shaped Corner Glass Shower Enclosure" loading="lazy" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">L-Shaped Corner</h3>
                <p className="category-card-desc">Dual 90° glass panels maximizing corner spaces. Combines fixed return panels with swing or sliding access.</p>
                <div className="category-card-price">Starting from <strong>₹28,000*</strong></div>
                <div className="category-card-footer">
                  <Link to="/l-shaped" className="link-arrow">View Specs <Icon name="arrow" size={16} strokeWidth={2} /></Link>
                  <Link to="/quote?type=l-shaped" className="btn btn-outline btn-sm">Enquire</Link>
                </div>
              </div>
            </article>
          </div>

          <p className="fine-print">
            *Starting prices are indicative for standard configurations. Final quote depends on site dimensions, glass specification, and hardware finish.
          </p>
        </div>
      </section>

      {/* Dedicated Luxury Bathroom Accessories Showcase */}
      <section className="section section-white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow">The Coordinated Bathroom</span>
              <h2>Complete Luxury Accessories In Harmonized PVD Finishes</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Never settle for clashing metal tones in your bathroom. BathCentric manufactures and finishes every accessory in matching PVD coats — ensuring your towel rails, robe hooks, door handles, floor drains, and glass shelf brackets match your tapware flawlessly.
              </p>

              <FinishSelector defaultFinish="Brushed Brass / Gold" />

              <div className="grid-2" style={{ gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ background: 'var(--color-bg-light)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Towel Bars &amp; Rails</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Solid brass glass-mounted &amp; wall-mounted towel bars.</span>
                </div>
                <div style={{ background: 'var(--color-bg-light)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Designer Robe Hooks</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Knurled detail pegs, over-glass hooks &amp; dual hangers.</span>
                </div>
                <div style={{ background: 'var(--color-bg-light)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Tempered Glass Shelves</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Floating corner &amp; straight shelves with brass clamps.</span>
                </div>
                <div style={{ background: 'var(--color-bg-light)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Linear Floor Drains</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>SUS 304 shower drainage channels in matching finishes.</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/hardware" className="btn btn-primary">View Full Accessories Suite</Link>
                <Link to="/quote" className="btn btn-outline">Enquire for Accessories</Link>
              </div>
            </div>

            <div>
              <img
                src="/images/hardware.jpg"
                alt="Architectural Bathroom Accessories and PVD Hardware"
                style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why BathCentric / Key Architectural Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">The BathCentric Standard</span>
            <h2 className="section-title">Architectural Precision In Every Detail</h2>
            <p>We do not sell mass-market modular kits. Every enclosure is cut, tempered, and installed specifically for your bathroom walls and floor slopes.</p>
          </div>

          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon"><Icon name="shield" /></div>
              <h3 className="feature-title">10mm Toughened Safety Glass</h3>
              <p>Certified to EN 12150 and IS 2553 standards. 5x stronger than regular annealed glass, shatter-safe with polished chamfered pencil edges.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Icon name="sparkle" /></div>
              <h3 className="feature-title">Anti-Limescale Nano Coating</h3>
              <p>Factory-treated hydrophobic shield repels water droplets, soap scum, and hard water stains. Keeps glass crystal clear with minimal maintenance.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Icon name="lock" /></div>
              <h3 className="feature-title">Solid Brass &amp; SUS 304 Hardware</h3>
              <p>Architectural grade components with PVD physical vapor deposition finish. Will not corrode, peel, or tarnish even in high-moisture coastal environments.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Icon name="ruler" /></div>
              <h3 className="feature-title">Laser Precision Measurement</h3>
              <p>Our technicians conduct on-site digital laser surveying to account for wall plumb deviations, out-of-square corners, and floor gradient slopes.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Icon name="droplet" /></div>
              <h3 className="feature-title">100% Watertight Engineering</h3>
              <p>German-grade translucent magnetic door gaskets and minimal aluminum thresholds contain all spray within the shower zone.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Icon name="award" /></div>
              <h3 className="feature-title">5-Year Comprehensive Warranty</h3>
              <p>Full warranty coverage on all hardware mechanisms, rollers, and hinges, backed by our dedicated in-house service team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Glass & Partitions Preview */}
      <section className="section section-white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Architectural Glass Innovation</span>
              <h2>Custom Glass Partitions, Wet/Dry Dividers &amp; Mirrors</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Beyond shower doors, glass defines the architecture of modern bathrooms. We engineer custom floor-to-ceiling glass screens, acoustic toilet privacy cubicles, fluted room dividers, and backlit architectural mirrors.
              </p>
              <ul className="check-list">
                <li>
                  <span className="check-list-icon"><Icon name="check" size={14} strokeWidth={2.5} /></span>
                  <span><strong>Glass Varieties:</strong> Ultra-Clear Low-Iron, Tactile Fluted / Reeded, Satin Acid-Etched, Smoked Grey &amp; Bronze Tint.</span>
                </li>
                <li>
                  <span className="check-list-icon"><Icon name="check" size={14} strokeWidth={2.5} /></span>
                  <span><strong>Bathroom Partitions:</strong> Wetroom walk-in screens, WC cubicle dividers, and vanity privacy partitions.</span>
                </li>
                <li>
                  <span className="check-list-icon"><Icon name="check" size={14} strokeWidth={2.5} /></span>
                  <span><strong>Surface Protection:</strong> Hydrophobic anti-stain shield factory-bonded to repel hard water and limescale.</span>
                </li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/glass" className="btn btn-primary">Explore Glass &amp; Partitions</Link>
                <Link to="/quote" className="btn btn-outline">Request Glass Consultation</Link>
              </div>
            </div>
            <div className="media-frame">
              <img src="/images/glass-fluted.jpg" alt="Architectural fluted reeded glass and luxury bathroom fittings" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Seamless Execution</span>
            <h2>How It Works</h2>
            <p>From initial design consultation to final silicone water-testing, our white-glove process is seamless, precise, and transparent.</p>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3 className="step-title">Enquiry</h3>
              <p className="step-desc">Share your bathroom photos and layout ideas via our website form or WhatsApp for initial guidance.</p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <h3 className="step-title">Measurement</h3>
              <p className="step-desc">Our technical engineer visits your site with laser tools to record millimeter-accurate wall and floor angles.</p>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <h3 className="step-title">Quotation</h3>
              <p className="step-desc">Receive a transparent, fully itemized quotation with glass specifications and hardware selection.</p>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <h3 className="step-title">Manufacturing</h3>
              <p className="step-desc">Custom CNC cutting, edge chamfering, tempering, and nano-coating at our specialized glass facility.</p>
            </div>

            <div className="process-step">
              <div className="step-number">05</div>
              <h3 className="step-title">Installation</h3>
              <p className="step-desc">Certified BathCentric master installers assemble, align, and waterproof seal your enclosure in 3-4 hours.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/process" className="btn btn-accent">Read Full Process Details <Icon name="arrow" size={16} strokeWidth={2} /></Link>
          </div>
        </div>
      </section>

      {/* Selected Projects Showcase */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Real Installations</span>
            <h2 className="section-title">Selected Completed Projects</h2>
            <p>Explore recent bespoke shower enclosure installations across leading luxury residences.</p>
          </div>

          <div className="grid-3">
            <article className="project-card">
              <div className="project-img">
                <img src="/images/project-1.jpg" alt="Master Ensuite Walk-In Enclosure Mumbai" loading="lazy" />
              </div>
              <div className="project-body">
                <div className="project-loc">Worli, Mumbai</div>
                <h3 className="project-title">The Altamount Master Ensuite</h3>
                <p style={{ fontSize: '0.9rem' }}>10mm Low-Iron Clear Glass with Brushed Brass PVD Hinges and overhead ceiling-height stabilizer profile.</p>
                <div className="project-meta">
                  <span className="badge-tag">Swing Frameless</span>
                  <span className="badge-tag">Brushed Brass</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-img">
                <img src="/images/project-2.jpg" alt="Penthouse Sliding Shower System Bengaluru" loading="lazy" />
              </div>
              <div className="project-body">
                <div className="project-loc">Indiranagar, Bengaluru</div>
                <h3 className="project-title">Skyline Penthouse Wetroom</h3>
                <p style={{ fontSize: '0.9rem' }}>Reeded Fluted Glass Sliding Enclosure with Matte Black SUS 304 soft-close top roller track.</p>
                <div className="project-meta">
                  <span className="badge-tag">Sliding System</span>
                  <span className="badge-tag">Matte Black</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-img">
                <img src="/images/project-3.jpg" alt="Luxury Villa L-Shaped Corner Enclosure Delhi" loading="lazy" />
              </div>
              <div className="project-body">
                <div className="project-loc">Golf Links, New Delhi</div>
                <h3 className="project-title">Heritage Modern Villa</h3>
                <p style={{ fontSize: '0.9rem' }}>90° L-Shaped Corner Frameless Enclosure with 12mm Toughened Clear Glass and Polished Chrome fittings.</p>
                <div className="project-meta">
                  <span className="badge-tag">L-Shaped Corner</span>
                  <span className="badge-tag">Polished Chrome</span>
                </div>
              </div>
            </article>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/projects" className="btn btn-outline">Explore All Projects <Icon name="arrow" size={16} strokeWidth={2} /></Link>
          </div>
        </div>
      </section>

      {/* Send Your Bathroom Photo CTA Banner */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="send-bathroom-banner">
            <div className="banner-content">
              <span className="eyebrow">Instant Measurement Consultation</span>
              <h2 className="banner-title">Send Your Bathroom Photos. Get a Complete Architectural Proposal.</h2>
              <p className="banner-desc">
                Renovating or building a new bathroom? Upload 2–3 photos or layout drawings of your bathroom space. Our specialists will review plumbing clearances, suggest the ideal glass partitions and enclosures, and recommend matching luxury accessories with an itemized quotation.
              </p>
              <div className="banner-actions">
                <Link to="/quote" className="btn btn-accent btn-lg">
                  <Icon name="camera" size={20} strokeWidth={2} />
                  <span>Send Your Bathroom Photos</span>
                </Link>
                <a href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I%20have%20photos%20of%20my%20bathroom%20ready%20for%20a%20custom%20glass%20and%20accessories%20quote." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <span>Send via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
