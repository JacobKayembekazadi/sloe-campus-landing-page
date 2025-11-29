import React from 'react';
import { trackCheckoutClick } from '../utils/pixel';

interface CheckoutLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Checkout link component that automatically tracks conversion events
 */
const CheckoutLink: React.FC<CheckoutLinkProps> = ({
  href,
  children,
  className,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track checkout click before navigation
    trackCheckoutClick();
    
    // Call any additional onClick handler
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default CheckoutLink;

