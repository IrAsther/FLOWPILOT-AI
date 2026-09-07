import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { publicNavLinks } from '../../data/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        height: 'var(--header-height)',
        backgroundColor: 'rgba(253, 249, 244, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--color-border-subtle)',
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
          style={{
            alignItems: 'center',
            gap: 'var(--space-8)',
          }}
        >
          {publicNavLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              style={({ isActive }) => ({
                fontSize: '0.875rem',
                fontFamily: 'var(--font-display)',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-teal)' : 'var(--color-text-secondary)',
                transition: 'color var(--transition-fast)',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
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
            className="visible-mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              padding: 'var(--space-2)',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="visible-mobile-only animate-fade-in"
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--color-bg-surface)',
            borderTop: '1px solid var(--color-border-subtle)',
            padding: 'var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-6)',
            zIndex: 49,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {publicNavLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                  padding: 'var(--space-2) 0',
                  borderBottom: '1px solid var(--color-border-subtle)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <Button
              to="/login"
              variant="outline"
              size="lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Button>
            <Button
              to="/book-a-demo"
              variant="primary"
              size="lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
