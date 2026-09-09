import React from 'react';
import { Link } from 'react-router-dom';

export function LogoIcon({
  size = 'md',
  inverse = false,
  className = '',
  style = {},
  iconStyle = {},
  polygonClassName = '',
}) {
  const sizeMap = {
    sm: { boxPx: 28, icon: '16px' },
    md: { boxPx: 32, icon: '20px' },
    lg: { boxPx: 40, icon: '24px' },
    xl: { boxPx: 48, icon: '28px' },
    splash: { boxPx: 68, icon: '34px' },
  };

  const current = sizeMap[size] || sizeMap.md;
  const boxDimension = current.boxPx || (size === 'sm' ? 28 : size === 'lg' ? 40 : 32);

  return (
    <div
      className={className}
      style={{
        width: boxDimension,
        height: boxDimension,
        backgroundColor: 'var(--color-teal)',
        borderRadius: size === 'splash' ? '16px' : 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: inverse ? '0 8px 24px rgba(0, 70, 66, 0.4)' : 'var(--shadow-xs)',
        border: inverse ? '1px solid rgba(254, 133, 44, 0.5)' : 'none',
        flexShrink: 0,
        ...style,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-orange)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: current.icon, height: current.icon, ...iconStyle }}
      >
        <polygon
          className={polygonClassName}
          points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
          fill="var(--color-orange)"
        />
      </svg>
    </div>
  );
}

export function Logo({ size = 'md', link = true, className = '', inverse = false }) {
  const sizeMap = {
    sm: { textRem: '1rem' },
    md: { textRem: '1.25rem' },
    lg: { textRem: '1.5rem' },
    xl: { textRem: '1.875rem' },
    splash: { textRem: '2.25rem' },
  };

  const current = sizeMap[size] || sizeMap.md;
  const fontSize = current.textRem || (size === 'sm' ? '1rem' : size === 'lg' ? '1.5rem' : '1.25rem');

  const content = (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{ gap: size === 'splash' ? '20px' : '16px' }}
    >
      <LogoIcon size={size} inverse={inverse} />
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          color: inverse ? '#FFFFFF' : 'var(--color-text-primary)',
          letterSpacing: '-0.02em',
          fontSize: fontSize,
          whiteSpace: 'nowrap',
        }}
      >
        FlowPilot <span style={{ color: inverse ? 'var(--color-orange)' : 'var(--color-teal)' }}>AI</span>
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
