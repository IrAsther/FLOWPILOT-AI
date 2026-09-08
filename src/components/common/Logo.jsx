import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ size = 'md', link = true, className = '' }) {
  const sizeMap = {
    sm: { box: 'w-7 h-7', icon: '16px', text: 'text-h4', padding: 'p-1' },
    md: { box: 'w-8 h-8', icon: '20px', text: 'text-h3', padding: 'p-1.5' },
    lg: { box: 'w-10 h-10', icon: '24px', text: 'text-h2', padding: 'p-2' },
  };

  const current = sizeMap[size] || sizeMap.md;

  const content = (
    <div className={`inline-flex items-center select-none ${className}`} style={{ gap: '16px' }}>
      <div
        style={{
          width: size === 'sm' ? 28 : size === 'lg' ? 40 : 32,
          height: size === 'sm' ? 28 : size === 'lg' ? 40 : 32,
          backgroundColor: 'var(--color-teal)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-xs)'
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-orange)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: current.icon, height: current.icon }}
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="var(--color-orange)" />
        </svg>
      </div>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.02em',
          fontSize: size === 'sm' ? '1rem' : size === 'lg' ? '1.5rem' : '1.25rem',
        }}
      >
        FlowPilot <span style={{ color: 'var(--color-teal)' }}>AI</span>
      </span>
    </div>
  );

  if (!link) return content;

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      {content}
    </Link>
  );
}
