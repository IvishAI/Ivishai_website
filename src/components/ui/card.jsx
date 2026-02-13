import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`card ${className} transition-all duration-300`}>
      {children}
    </div>
  );
};

export default Card;
