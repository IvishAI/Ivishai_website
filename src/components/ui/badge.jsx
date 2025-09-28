import React from 'react';

const Badge = ({ children, className = '', variant = 'default' }) => {
  return (
    <span className={`badge ${variant} ${className} transition-all duration-300`}>
      {children}
    </span>
  );
};

export default Badge;
