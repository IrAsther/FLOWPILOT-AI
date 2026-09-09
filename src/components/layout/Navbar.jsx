import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { publicNavLinks } from '../../data/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE MENU PORTAL
// Rendered directly into document.body so NO parent stacking context
// (PublicLayout, header, sections) can ever clip or layer above the menu.
// ─────────────────────────────────────────────────────────────────────────────
function MobileMenuPortal({ onClose }) {
  const panelRef = useRef(null);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.cssText;
    document.body.style.overflow  = 'hidden';
    document.body.style.height    = '100%';
    return () => {
      document.body.style.cssText = prev;
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Focus trap — move focus into the panel when it opens
  useEffect(() => {
    if (panelRef.current) {
      const firstBtn = panelRef.current.querySelector('button, a');
      if (firstBtn) firstBtn.focus();
    }
  }, []);

  const portal = (
    <>
      {/* ── Backdrop ──────────────────────────────────────────────────────── */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position:       'fixed',
          inset:          0,
          zIndex:         9998,
          background:     'rgba(0, 0, 0, 0.50)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          animation:      'fpNavBackdrop 0.25s ease-out both',
        }}
      />

      {/* ── Slide-in Panel ────────────────────────────────────────────────── */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          right:           0,
          bottom:          0,
          zIndex:          9999,
          display:         'flex',
          flexDirection:   'column',
          backgroundColor: '#FDF9F4',   /* SOLID — page never bleeds through */
          overflowY:       'auto',
          WebkitOverflowScrolling: 'touch',
          animation:       'fpNavPanel 0.28s cubic-bezier(0.22, 1, 0.36, 1) both',
        }}
      >
        {/* Panel Header */}
        <div
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            height:         '72px',
            padding:        '0 24px',
            borderBottom:   '1px solid rgba(111,121,119,0.20)',
            flexShrink:     0,
            backgroundColor: '#FDF9F4',
          }}
        >
          <Logo size="md" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Navigation Menu"
            style={{
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              width:           44,
              height:          44,
              borderRadius:    8,
              background:      'none',
              border:          'none',
              cursor:          'pointer',
              color:           '#1c1c19',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav Links */}
        <nav
          style={{
            flex:            1,
            padding:         '8px 24px',
            display:         'flex',
            flexDirection:   'column',
            backgroundColor: '#FDF9F4',
          }}
        >
          {publicNavLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={onClose}
              style={({ isActive }) => ({
                display:         'flex',
                alignItems:      'center',
                minHeight:       56,
                fontSize:        '1.125rem',
                fontFamily:      "'Plus Jakarta Sans', sans-serif",
                fontWeight:      isActive ? 700 : 600,
                color:           isActive ? '#01605A' : '#1c1c19',
                padding:         '0 0',
                borderBottom:    '1px solid rgba(111,121,119,0.18)',
                textDecoration:  'none',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div
          style={{
            padding:         '24px',
            display:         'flex',
            flexDirection:   'column',
            gap:             12,
            borderTop:       '1px solid rgba(111,121,119,0.20)',
            flexShrink:      0,
            backgroundColor: '#FDF9F4',
          }}
        >
          <Button to="/login"      variant="outline"  size="lg" onClick={onClose}>
            Sign In
          </Button>
          <Button to="/book-a-demo" variant="primary" size="lg" iconRight={ArrowRight} onClick={onClose}>
            Book a Demo
          </Button>
        </div>
      </div>

      {/* ── Keyframe animations injected once ─────────────────────────────── */}
      <style>{`
        @keyframes fpNavBackdrop {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fpNavPanel {
          from { opacity: 0; transform: translateX(100%); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes fpNavBackdrop { from { opacity:1; } to { opacity:1; } }
          @keyframes fpNavPanel    { from { opacity:1; transform:none; } to { opacity:1; transform:none; } }
        }
      `}</style>
    </>
  );

  // Mount into document.body — completely outside React's component tree
  return ReactDOM.createPortal(portal, document.body);
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────────────────
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled,     setIsScrolled]     = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu  = useCallback(() => setMobileMenuOpen(true),  []);
  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      {/* ── Sticky Header ─────────────────────────────────────────────────── */}
      <header
        style={{
          position:         'sticky',
          top:              0,
          zIndex:           100,
          width:            '100%',
          height:           '72px',
          backgroundColor:  isScrolled
            ? 'rgba(253, 249, 244, 0.96)'
            : 'rgba(253, 249, 244, 0.82)',
          backdropFilter:   'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom:     isScrolled
            ? '1px solid rgba(190, 201, 198, 0.55)'
            : '1px solid rgba(111, 121, 119, 0.20)',
          boxShadow:        isScrolled
            ? '0 4px 20px -2px rgba(0, 70, 66, 0.08)'
            : 'none',
          transition:
            'background-color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        }}
      >
        <div
          className="container"
          style={{
            height:          '100%',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'space-between',
          }}
        >
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav
            className="hidden-mobile"
            style={{ alignItems: 'center', gap: '32px' }}
          >
            {publicNavLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                style={({ isActive }) => ({
                  fontSize:   '0.875rem',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: isActive ? 700 : 500,
                  color:      isActive ? '#01605A' : '#3f4947',
                  transition: 'color 150ms ease',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop + Mobile Action Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link
              to="/login"
              className="hidden-mobile"
              style={{
                fontSize:   '0.875rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                color:      '#3f4947',
                padding:    '0 12px',
              }}
            >
              Sign In
            </Link>

            <Button to="/book-a-demo" variant="primary" size="sm" iconRight={ArrowRight}>
              Book a Demo
            </Button>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              className="visible-mobile-only"
              onClick={openMenu}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              style={{
                display:         'flex',
                alignItems:      'center',
                justifyContent:  'center',
                width:           44,
                height:          44,
                borderRadius:    8,
                background:      'none',
                border:          'none',
                cursor:          'pointer',
                color:           '#1c1c19',
              }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Portal-based mobile menu — renders into document.body */}
      {mobileMenuOpen && <MobileMenuPortal onClose={closeMenu} />}
    </>
  );
}
