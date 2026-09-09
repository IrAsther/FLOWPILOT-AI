import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { footerLinks } from '../../data/navigation';

export function Footer() {
  return (
    <footer
      id="site-footer"
      style={{
        backgroundColor: 'var(--color-bg-surface-low)',
        borderTop: '1px solid var(--color-border-subtle)',
        paddingTop: 'var(--space-16)',
        paddingBottom: 'var(--space-12)',
      }}
    >
      <div className="container">
        <div
          className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4"
          style={{ gap: 'var(--space-8)', marginBottom: 'var(--space-12)' }}
        >
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Logo size="md" />
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', maxWidth: '280px' }}>
              Your AI Operations Team. Autonomous Gmail triage and WhatsApp dispatch engineered for operational leaders.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-teal)',
                width: 'fit-content',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-success)',
                }}
              />
              <span>All systems operational</span>
            </div>
          </div>

          {/* Platform Col */}
          <div>
            <h4
              style={{
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: 'var(--space-4)',
              }}
            >
              Platform
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {footerLinks.platform.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Col */}
          <div>
            <h4
              style={{
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: 'var(--space-4)',
              }}
            >
              Solutions
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {footerLinks.solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Col */}
          <div>
            <h4
              style={{
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: 'var(--space-4)',
              }}
            >
              Company
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div
          style={{
            paddingTop: 'var(--space-8)',
            borderTop: '1px solid var(--color-border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <p>© {new Date().getFullYear()} FlowPilot AI Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
            <span>Deterministic Operations</span>
            <span>•</span>
            <span>Zero Hallucinations</span>
            <span>•</span>
            <span>SOC2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
