import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  label?: string; // Add label prop
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, label }) => {
  return (
    <button onClick={onClick} className={`btn ${className || ''}`}>
      {children || label}
    </button>
  );
};

export default Button;