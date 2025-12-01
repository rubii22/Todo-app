import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  const baseStyle = "w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const styles = {
    primary: "bg-primary-deep-wine text-white hover:bg-opacity-90 active:scale-95 focus:ring-primary-deep-wine",
    secondary: "bg-soft-accent-beige text-primary-deep-wine hover:bg-opacity-90 active:scale-95 focus:ring-soft-accent-beige",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
