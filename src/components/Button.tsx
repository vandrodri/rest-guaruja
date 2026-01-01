
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 font-extrabold text-lg uppercase tracking-wider transition-all duration-300 active:shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff] rounded-2xl border-none";
  
  const variants = {
    primary: "bg-[#2563eb] text-white shadow-[6px_6px_12px_#b8b8b8,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]",
    secondary: "bg-[#e0e0e0] text-zinc-800 shadow-[6px_6px_12px_#b8b8b8,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : 'inline-block'} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
