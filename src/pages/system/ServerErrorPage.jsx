import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

export function ServerErrorPage() {
  const error = useRouteError();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdf9f4',
        padding: '32px',
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h1
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '5rem',
          fontWeight: 800,
          color: '#01605a',
          lineHeight: 1,
          margin: '0 0 16px 0',
        }}
      >
        500
      </h1>
      <h2
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1c1c19',
          margin: '0 0 12px 0',
        }}
      >
        Internal Server Error
      </h2>
      <p style={{ color: '#3f4947', maxWidth: '440px', fontSize: '15px', lineHeight: 1.6, margin: '0 0 28px 0' }}>
        An unexpected error occurred while loading this view. Our autonomous reliability monitoring has flagged this incident.
      </p>

      {error?.message && (
        <pre
          style={{
            maxWidth: '500px',
            overflowX: 'auto',
            padding: '12px 16px',
            borderRadius: '8px',
            backgroundColor: '#f1ede8',
            color: '#ba1a1a',
            fontSize: '12px',
            marginBottom: '24px',
          }}
        >
          {error.message}
        </pre>
      )}

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => window.location.reload()}
          style={{
            backgroundColor: '#01605a',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '10px',
            border: 'none',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Reload Page
        </button>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#fe852c',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '10px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '14px',
            textDecoration: 'none',
          }}
        >
          ← Return to Home
        </Link>
      </div>
    </div>
  );
}
