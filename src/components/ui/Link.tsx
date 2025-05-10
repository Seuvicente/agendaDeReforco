import React, { ReactNode } from 'react';

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, children, className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <a 
      href={to} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};