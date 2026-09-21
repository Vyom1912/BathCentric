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

              <NavLink to="/mirrors" className={navClass}>Smart Mirrors</NavLink>
              <NavLink to="/drains" className={navClass}>Linear Drains</NavLink>
              <NavLink to="/glass" className={navClass}>Bathroom Glass</NavLink>
              <NavLink to="/hardware" className={navClass}>Accessories</NavLink>
              <NavLink to="/projects" className={navClass}>Projects</NavLink>
              <NavLink to="/about" className={navClass}>About &amp; Services</NavLink>
              <NavLink to="/contact" className={navClass}>Contact</NavLink>
            </nav>

            <div className="header-actions">
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
        <Link to="/mirrors" className="mobile-nav-link">Smart LED Mirrors</Link>
        <Link to="/drains" className="mobile-nav-link">Linear Floor Drains</Link>
        <Link to="/glass" className="mobile-nav-link">Bathroom Glass &amp; Partitions</Link>
        <Link to="/hardware" className="mobile-nav-link">Accessories &amp; Hardware</Link>
        <Link to="/projects" className="mobile-nav-link">Completed Projects</Link>
        <Link to="/about" className="mobile-nav-link">About &amp; Services</Link>
        <Link to="/contact" className="mobile-nav-link">Contact</Link>

        <div className="mobile-nav-cta">
          <Link to="/quote" className="btn btn-accent">Book Free Site Visit</Link>
          <a href="tel:+919876543210" className="btn btn-outline">Call +91 98765 43210</a>
        </div>
      </aside>
    </>
  );
}
