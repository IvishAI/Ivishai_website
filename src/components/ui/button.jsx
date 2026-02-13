import React from 'react';

const Button = ({ children, onClick, variant = 'default', className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${variant} ${className} transition-all duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
