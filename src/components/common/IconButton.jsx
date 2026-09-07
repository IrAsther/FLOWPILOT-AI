import React from 'react';

export function IconButton({
  icon: Icon,
  label,
  onClick,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) {
  const sizeMap = {
    sm: { size: 32, icon: 16 },
    md: { size: 40, icon: 20 },
    lg: { size: 48, icon: 24 },
  };

  const { size: btnSize, icon: iconSize } = sizeMap[size] || sizeMap.md;

  const variantStyles = {
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-secondary)',
    },
    surface: {
      backgroundColor: 'var(--color-bg-surface-low)',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-border-subtle)',
    },
    teal: {
      backgroundColor: 'var(--color-teal-tint)',
      color: 'var(--color-teal)',
    },
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center rounded-md transition-colors ${className}`}
      style={{
        width: btnSize,
        height: btnSize,
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        ...variantStyles[variant],
      }}
      {...props}
    >
      {Icon && <Icon size={iconSize} />}
    </button>
  );
}
