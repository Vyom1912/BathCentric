import { Link } from 'react-router-dom';
import FinishSelector from '../components/FinishSelector';
import Icon from '../components/Icon';

export default function Hardware() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Hardware & Finishes</span>
          </nav>
          <span className="eyebrow" style={{ color: '#C5A880' }}>Architectural Engineering</span>
          <h1>Precision Hardware & Luxury Finishes</h1>
          <p>
            Crafted from drop-forged solid brass and marine-grade SUS 304 stainless steel. Treated with microscopic Physical Vapor Deposition (PVD) to ensure enduring beauty in high-humidity environments.
          </p>
        </div>
      </section>

      {/* Interactive Luxury Finish Palette */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">The Color Library</span>
            <h2>Harmonize With Your Bathroom Brassware</h2>
            <p>Select any of our five architectural finishes to coordinate flawlessly with your shower mixers, taps, and vanity hardware.</p>
          </div>

          <div className="grid-2" style={{ alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <FinishSelector defaultFinish="Brushed Brass / Gold" />

              <div style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginTop: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Why BathCentric Uses PVD Coating:</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Unlike conventional spray-painting or electroplating that peels and chips over time, Physical Vapor Deposition (PVD) bonds vaporized zirconium molecules into the crystal lattice of the metal in a high-vacuum chamber. The result is an ultra-hard, scratch-resistant barrier that will never flake, peel, or tarnish.
                </p>
              </div>
            </div>

            <div>
              <img src="/images/hardware.jpg" alt="Architectural Shower Hardware and Brassware" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }} />
            </div>
          </div>

        </div>
      </section>

      {/* Component Categories */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Component Architecture</span>
            <h2>Engineered For Decades of Operation</h2>
            <p>Every mechanical component is stress-tested to exceed international commercial durability benchmarks.</p>
          </div>

          <div className="grid-3">
            
            {/* 1. Hinges */}
            <div className="feature-card">
              <div className="feature-icon"><Icon name="door" /></div>
              <h3 className="feature-title">Forged Solid Brass Hinges</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Drop-forged for high tensile strength (supports glass doors up to 55kg). Features dual internal stainless steel springs that self-close automatically from 25 degrees.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>• Wall-to-Glass 90° Hinges</li>
                <li>• Glass-to-Glass 180° In-line Hinges</li>
                <li>• Glass-to-Glass 90° Corner Hinges</li>
                <li>• Cycle tested to 100,000 openings</li>
              </ul>
            </div>

            {/* 2. Handles */}
            <div className="feature-card">
              <div className="feature-icon"><Icon name="hand" /></div>
              <h3 className="feature-title">Architectural Handle Suite</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Ergonomically weighted back-to-back handle designs with concealed screw fixings and high-durability neoprene gaskets protecting the glass clamp point.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>• Minimalist D-Pulls (250mm, 300mm)</li>
                <li>• Architectural Ladder Pulls (450mm, 600mm)</li>
                <li>• Contemporary Square Profile Pulls</li>
                <li>• Discrete Finger Knobs for Compact Spaces</li>
              </ul>
            </div>

            {/* 3. Rollers */}
            <div className="feature-card">
              <div className="feature-icon"><Icon name="cog" /></div>
              <h3 className="feature-title">SUS 304 Sliding Rollers</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Top-hung stainless steel roller carriers with precision sealed ball bearings. Quiet nylon tire inserts ensure silence and vibration-free motion.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>• Exposed Architectural Roller Wheels</li>
                <li>• Concealed Slim Track Sliding System</li>
                <li>• Dual Hydraulic Soft-Close Dampers</li>
                <li>• Anti-jump safety lock pins</li>
              </ul>
            </div>

            {/* 4. Stabilizers */}
            <div className="feature-card">
              <div className="feature-icon"><Icon name="ruler" /></div>
              <h3 className="feature-title">Stabilizer Support Bars</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Eliminates top-edge glass deflection and absorbs lateral vibration. Available in round or rectangular tubular profiles with multi-directional swivel heads.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>• 45° Diagonal Wall-to-Glass Braces</li>
                <li>• 90° Perpendicular Wall Brackets</li>
                <li>• Direct Vertical Ceiling-Mount Rods</li>
                <li>• Matching PVD colored finishes</li>
              </ul>
            </div>

            {/* 5. Wall Profiles & Channels */}
            <div className="feature-card">
              <div className="feature-icon"><Icon name="layers" /></div>
              <h3 className="feature-title">Slimline Wall Profiles</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Architectural aluminum wall U-channels with a sleek 15mm visible face. Provides 15mm of built-in out-of-plumb adjustment to compensate for uneven wall tiling.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>• Slimline U-Channel Profiles</li>
                <li>• Discrete Brass Floor Clamps</li>
                <li>• Recessed Flush Floor Track Options</li>
                <li>• Anodized and PVD color matched</li>
              </ul>
            </div>

            {/* 6. Magnetic Seals */}
            <div className="feature-card">
              <div className="feature-icon"><Icon name="shield" /></div>
              <h3 className="feature-title">Magnetic Sealing & Gaskets</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                UV-stabilized virgin PVC and silicone gaskets that will not yellow, crack, or harden. Strong neodymium magnetic cores snap shut securely.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>• 90° & 180° Magnetic Door Seals</li>
                <li>• Dual-Fin Bottom Drip Sweeps</li>
                <li>• Low-Profile Aluminum Water Dams</li>
                <li>• Sanitary Anti-Bacterial Silicone</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Warranty Assurance Banner */}
      <section className="section">
        <div className="container">
          <div className="send-bathroom-banner">
            <div className="banner-content">
              <span className="eyebrow" style={{ color: '#C5A880' }}>Our Guarantee</span>
              <h2 className="banner-title">5-Year Comprehensive Hardware Warranty</h2>
              <p className="banner-desc">Every hinge, handle, track, and bracket installed by BathCentric is covered by our 5-year replacement warranty against mechanical failure, sagging, peeling, or corrosion.</p>
              <div className="banner-actions">
                <Link to="/quote" className="btn btn-accent btn-lg">Plan Your Bathroom Enclosure</Link>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">Consult a Hardware Specialist</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
