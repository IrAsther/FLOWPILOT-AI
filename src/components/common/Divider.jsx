import React from 'react';

export function Divider({ label, className = '', style = {} }) {
  if (!label) {
    return (
      <hr
        className={`w-full border-0 ${className}`}
        style={{
          borderTop: '1px solid var(--color-border-subtle)',
          margin: 'var(--space-6) 0',
          ...style,
        }}
      />
    );
  }

  return (
    <div
      className={`flex items-center w-full gap-4 ${className}`}
      style={{ margin: 'var(--space-6) 0', ...style }}
    >
      <div style={{ flex: 1, height: 1, backgroundColor: 'var(--color-border-subtle)' }} />
      <span
        style={{
          fontSize: '0.8125rem',
          color: 'var(--color-text-muted)',
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: 1, backgroundColor: 'var(--color-border-subtle)' }} />
    </div>
  );
}
