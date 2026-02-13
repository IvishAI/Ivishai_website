import React from 'react';

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`input ${className} transition-all duration-300`}
      {...props}
    />
  );
});

export default Input;
