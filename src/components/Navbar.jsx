import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';

const navClass = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Close drawer with Escape
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const isEnclosureActive = ['/enclosures', '/fixed', '/swing', '/sliding', '/l-shaped'].includes(location.pathname);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-shell">
            <Link to="/" className="brand-logo" aria-label="BathCentric Home">
              <img src="/images/logo.svg" alt="BathCentric Architectural Glass" width="220" height="36" />
            </Link>

            <nav className="nav-desktop" aria-label="Primary Navigation">
              <NavLink to="/" className={navClass} end>
                Home
              </NavLink>

              <div className="nav-dropdown">
                <Link to="/enclosures" className={`nav-link ${isEnclosureActive ? 'active' : ''}`}>
                  Shower Enclosures
                  <Icon name="chevron" size={14} strokeWidth={2.2} className="nav-chevron" />
                </Link>
                <div className="dropdown-menu">
                  <Link to="/enclosures" className="dropdown-item">All Enclosure Systems</Link>
                  <Link to="/fixed" className="dropdown-item">Fixed Walk-In Screens</Link>
                  <Link to="/sliding" className="dropdown-item">Sliding Glass Systems</Link>
                  <Link to="/swing" className="dropdown-item">Swing Frameless Doors</Link>
                  <Link to="/l-shaped" className="dropdown-item">L-Shaped Corner Units</Link>
                </div>
              </div>

              <NavLink to="/glass" className={navClass}>Bathroom Glass</NavLink>
              <NavLink to="/hardware" className={navClass}>Accessories &amp; Hardware</NavLink>
              <NavLink to="/projects" className={navClass}>Projects</NavLink>
              <NavLink to="/about" className={navClass}>About</NavLink>
              <NavLink to="/contact" className={navClass}>Contact</NavLink>
            </nav>

            <div className="header-actions">
              <a
                href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20book%20a%20free%20site%20visit%20for%20my%20bathroom."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm header-whatsapp"
                aria-label="Chat on WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.777.818 2.795.818 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.769-5.766-5.769zm10.22 5.766c0 5.655-4.598 10.252-10.25 10.252-1.777 0-3.488-.46-4.994-1.328l-5.556 1.458 1.488-5.419c-.958-1.564-1.464-3.376-1.464-5.234 0-5.655 4.598-10.253 10.25-10.253 5.654 0 10.25 4.598 10.25 10.253z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              <Link to="/quote" className="btn btn-accent btn-sm header-quote">Book Free Visit</Link>

              <button
                className={`nav-toggle-btn ${mobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
                aria-expanded={mobileMenuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />
      <aside
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <Link to="/" className="brand-logo" style={{ marginBottom: '1rem' }}>
          <img src="/images/logo.svg" alt="BathCentric" width="180" />
        </Link>
        <Link to="/" className="mobile-nav-link">Home</Link>
        <Link to="/enclosures" className="mobile-nav-link">Shower Enclosures</Link>
        <div className="mobile-nav-sublist">
          <Link to="/fixed" className="mobile-nav-sublink">Fixed Walk-In</Link>
          <Link to="/swing" className="mobile-nav-sublink">Swing Frameless</Link>
          <Link to="/sliding" className="mobile-nav-sublink">Sliding Systems</Link>
          <Link to="/l-shaped" className="mobile-nav-sublink">L-Shaped Corner</Link>
        </div>
        <Link to="/glass" className="mobile-nav-link">Bathroom Glass &amp; Partitions</Link>
        <Link to="/hardware" className="mobile-nav-link">Accessories &amp; Hardware</Link>
        <Link to="/projects" className="mobile-nav-link">Completed Projects</Link>
        <Link to="/about" className="mobile-nav-link">About Us</Link>
        <Link to="/contact" className="mobile-nav-link">Contact</Link>

        <div className="mobile-nav-cta">
          <Link to="/quote" className="btn btn-accent">Book Free Site Visit</Link>
          <a href="tel:+919876543210" className="btn btn-outline">Call +91 98765 43210</a>
        </div>
      </aside>
    </>
  );
}
