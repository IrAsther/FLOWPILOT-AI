import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { publicNavLinks } from '../../data/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ── Scroll shadow effect ───────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Body scroll lock when mobile menu is open ──────────────────────────────
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      {/* ── Global Navbar CSS ─────────────────────────────────────────────── */}
      <style>{`
        .navbar-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9998;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          animation: navBackdropIn 0.2s ease both;
        }
        .navbar-mobile-panel {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          background-color: var(--color-bg-surface, #fdf9f4);
          display: flex;
          flex-direction: column;
          transform: translateY(-4px);
          opacity: 0;
          animation: navPanelIn 0.22s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        @keyframes navBackdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes navPanelIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @media (prefers-reduced-motion: reduce) {
          .navbar-backdrop,
          .navbar-mobile-panel {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
        .navbar-mobile-link {
          display: flex;
          align-items: center;
          font-size: 1.125rem;
          font-family: var(--font-display, 'Plus Jakarta Sans', sans-serif);
          font-weight: 600;
          color: var(--color-text-primary, #1c1c19);
          padding: 16px 0;
          border-bottom: 1px solid var(--color-border-subtle, rgba(190,201,198,0.3));
          text-decoration: none;
          min-height: 56px;
          transition: color 0.15s ease;
        }
        .navbar-mobile-link:hover {
          color: var(--color-teal, #004642);
        }
        .navbar-mobile-link:last-child {
          border-bottom: none;
        }
        .navbar-hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 8px;
          color: var(--color-text-primary, #1c1c19);
          cursor: pointer;
          background: none;
          border: none;
          transition: background-color 0.15s ease;
        }
        .navbar-hamburger:hover {
          background-color: rgba(0, 70, 66, 0.06);
        }
      `}</style>

      {/* ── Sticky Header Bar ───────────────────────────────────────────────── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          width: '100%',
          height: 'var(--header-height)',
          backgroundColor: isScrolled ? 'rgba(253, 249, 244, 0.96)' : 'rgba(253, 249, 244, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid rgba(190, 201, 198, 0.55)'
            : '1px solid var(--color-border-subtle)',
          boxShadow: isScrolled ? '0 4px 20px -2px rgba(0, 70, 66, 0.08)' : 'none',
          transition:
            'background-color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav
            className="hidden-mobile"
            style={{ alignItems: 'center', gap: 'var(--space-8)' }}
          >
            {publicNavLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                style={({ isActive }) => ({
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive
                    ? 'var(--color-teal)'
                    : 'var(--color-text-secondary)',
                  transition: 'color var(--transition-fast)',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <Link
              to="/login"
              className="hidden-mobile"
              style={{
                fontSize: '0.875rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                padding: '0 var(--space-3)',
              }}
            >
              Sign In
            </Link>
            <Button to="/book-a-demo" variant="primary" size="sm" iconRight={ArrowRight}>
              Book a Demo
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="visible-mobile-only navbar-hamburger"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu: Backdrop + Full-Screen Panel ─────────────────────── */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop — clicking it closes menu */}
          <div
            className="navbar-backdrop visible-mobile-only"
            aria-hidden="true"
            onClick={closeMobileMenu}
          />

          {/* Full-screen slide-down panel */}
          <div
            className="navbar-mobile-panel visible-mobile-only"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Panel Header — Logo + Close Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 var(--space-6)',
                height: 'var(--header-height)',
                borderBottom: '1px solid var(--color-border-subtle)',
                flexShrink: 0,
              }}
            >
              <Logo size="md" />
              <button
                type="button"
                className="navbar-hamburger"
                onClick={closeMobileMenu}
                aria-label="Close Navigation Menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav Links */}
            <nav
              style={{
                flex: 1,
                padding: '12px var(--space-6) 0',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {publicNavLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="navbar-mobile-link"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Bottom CTA Buttons */}
            <div
              style={{
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                borderTop: '1px solid var(--color-border-subtle)',
                flexShrink: 0,
              }}
            >
              <Button
                to="/login"
                variant="outline"
                size="lg"
                onClick={closeMobileMenu}
              >
                Sign In
              </Button>
              <Button
                to="/book-a-demo"
                variant="primary"
                size="lg"
                iconRight={ArrowRight}
                onClick={closeMobileMenu}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
