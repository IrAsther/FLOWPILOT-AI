import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg-canvas)',
        padding: 'var(--space-8)',
        textAlign: 'center',
        gap: 'var(--space-6)',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '6rem',
          fontWeight: 800,
          color: 'var(--color-teal)',
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}
      >
        Page not found
      </p>
      <p style={{ color: 'var(--color-text-secondary)', maxWidth: '400px' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          backgroundColor: 'var(--color-orange)',
          color: '#fff',
          padding: '12px 28px',
          borderRadius: 'var(--radius-md)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '0.9375rem',
          marginTop: 'var(--space-4)',
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
