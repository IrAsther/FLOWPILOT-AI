import React from 'react';

export function LoadingSpinner({ size = 'md', color = 'var(--color-teal)', className = '' }) {
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 36,
  };

  const dim = sizeMap[size] || 24;

  return (
    <svg
      className={`animate-spin-slow ${className}`}
      width={dim}
      height={dim}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block' }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeOpacity="0.2"
        style={{ color }}
      />
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        style={{ color }}
      />
    </svg>
  );
}
