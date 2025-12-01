'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';
import Input from './Input';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication: just redirect to the dashboard
    router.push('/dashboard');
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-light-background-cream rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-primary-deep-wine">
        {isSignUp ? 'Create an Account' : 'Welcome Back'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        {isSignUp && (
          <Input type="password" placeholder="Confirm Password" required />
        )}
        <Button type="submit">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
      </form>

      <p className="text-center text-sm text-neutral-gray">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        <button 
          onClick={() => setIsSignUp(!isSignUp)}
          className="ml-1 font-semibold text-primary-deep-wine hover:underline"
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
