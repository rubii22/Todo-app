import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // You can add any custom props here if needed
}

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="w-full px-4 py-3 border border-soft-accent-beige rounded-xl bg-white text-neutral-gray placeholder-neutral-gray focus:outline-none focus:ring-2 focus:ring-primary-deep-wine transition-shadow duration-300"
      {...props}
    />
  );
};

export default Input;
