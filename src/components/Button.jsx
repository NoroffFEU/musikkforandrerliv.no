import React from 'react';

import { Link } from 'react-router-dom';

/**
 * Button component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The button content
 * @param {string} [props.type='button'] - The button type
 * @param {string} [props.size='normal'] - The button size
 */
const Button = ({
  children,
  type = 'button',
  size = 'normal',
  variant = 'primary',
  outline = false,
  className = '',
  onClick,
  href,
  isExternalLink,
  ...props
}) => {
  const baseClasses =
    'font-montserrat font-semibold text-center rounded-md transition-all duration-200';

  const sizeClasses = {
    small: 'px-2 py-2 text-[14px]',
    normal: 'px-4 py-3 text-[16px]',
    large: 'px-6 py-4 text-[18px]',
  };

  const filledVariantClasses = {
    primary:
      'bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] text-white',
    secondary:
      'bg-[var(--color-alt-forest-green)] hover:bg-[var(--color-light-green)] text-white',
  };

  const outlineVariantClasses = {
    primary:
      'border-2 border-[var(--color-sunset-red)] text-[var(--color-sunset-red)] hover:bg-[var(--color-sunset-red)] hover:text-white',
    secondary:
      'border-2 border-[var(--color-alt-forest-green)] text-[var(--color-alt-forest-green)] hover:bg-[var(--color-alt-forest-green)] hover:text-white',
  };

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${outline ? outlineVariantClasses[variant] : filledVariantClasses[variant]}
    ${className}
  `.trim();

  if (href && isExternalLink) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  if (href && !isExternalLink) {
    return (
      <Link to={href} className={buttonClasses} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
