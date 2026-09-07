import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Logo } from '../components/common/Logo';

export function AuthLayout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-canvas)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top minimal brand header */}
      <header
        style={{
          padding: 'var(--space-6) var(--space-8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      >
        <Logo size="md" />
        <Link
          to="/"
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
          }}
        >
          ← Back to Website
        </Link>
      </header>

      {/* Centered Auth Card Shell */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-8) var(--space-4)',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '440px',
            backgroundColor: 'var(--color-bg-surface)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border-subtle)',
            boxShadow: 'var(--shadow-lg)',
            padding: 'var(--space-8)',
          }}
        >
          <Outlet />
        </div>
      </main>

      {/* Bottom Minimal Footer */}
      <footer
        style={{
          padding: 'var(--space-4)',
          textAlign: 'center',
          fontSize: '0.8125rem',
          color: 'var(--color-text-muted)',
          borderTop: '1px solid var(--color-border-subtle)',
        }}
      >
        © {new Date().getFullYear()} FlowPilot AI. Enterprise-grade autonomous operations.
      </footer>
    </div>
  );
}
