import React from 'react';

export function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  className = '',
  style = {}
}) {
  const variantStyles = {
    neutral: {
      backgroundColor: 'var(--color-bg-surface-container)',
      color: 'var(--color-text-secondary)',
      border: '1px solid var(--color-border-subtle)',
    },
    teal: {
      backgroundColor: 'var(--color-teal-tint)',
      color: 'var(--color-teal)',
      border: '1px solid rgba(1, 96, 90, 0.25)',
    },
    orange: {
      backgroundColor: 'var(--color-orange-tint)',
      color: 'var(--color-orange-dark)',
      border: '1px solid rgba(255, 134, 45, 0.3)',
    },
    peach: {
      backgroundColor: 'var(--color-peach-soft)',
      color: 'var(--color-text-primary)',
      border: '1px solid rgba(255, 134, 45, 0.2)',
    },
    success: {
      backgroundColor: 'var(--color-success-bg)',
      color: 'var(--color-success)',
      border: '1px solid rgba(22, 163, 74, 0.25)',
    },
    warning: {
      backgroundColor: 'var(--color-warning-bg)',
      color: 'var(--color-warning)',
      border: '1px solid rgba(217, 119, 6, 0.25)',
    },
  };

  const sizeStyles = {
    sm: { height: '22px', padding: '0 8px', fontSize: '0.6875rem' },
    md: { height: '26px', padding: '0 10px', fontSize: '0.75rem' },
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-display font-medium rounded-full tracking-wide ${className}`}
      style={{
        ...sizeStyles[size],
        ...variantStyles[variant],
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-pill)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
          }}
        />
      )}
      {children}
    </span>
  );
}
