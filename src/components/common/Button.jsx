import React from 'react';
import { Link } from 'react-router-dom';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  icon: Icon,
  iconRight: IconRight,
  style = {},
  ...props
}) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all var(--transition-fast)',
    textDecoration: 'none',
    border: 'none',
    whiteSpace: 'nowrap',
    ...style,
  };

  const sizeStyles = {
    sm: { height: '36px', padding: '0 14px', fontSize: '0.8125rem' },
    md: { height: '44px', padding: '0 20px', fontSize: '0.875rem' },
    lg: { height: '52px', padding: '0 28px', fontSize: '1rem', borderRadius: 'var(--radius-lg)' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-orange)',
      color: '#ffffff',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      backgroundColor: 'var(--color-teal)',
      color: '#ffffff',
      boxShadow: 'var(--shadow-sm)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-border-medium)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-secondary)',
    },
    tint: {
      backgroundColor: 'var(--color-teal-tint)',
      color: 'var(--color-teal)',
      border: '1px solid rgba(1, 96, 90, 0.2)',
    },
  };

  const mergedStyles = {
    ...baseStyles,
    ...(sizeStyles[size] || sizeStyles.md),
    ...(variantStyles[variant] || variantStyles.primary),
  };

  const content = (
    <>
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
      <span>{children}</span>
      {IconRight && <IconRight size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} style={mergedStyles} className={`btn btn-${variant} ${className}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a href={href} style={mergedStyles} className={`btn btn-${variant} ${className}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={mergedStyles}
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
