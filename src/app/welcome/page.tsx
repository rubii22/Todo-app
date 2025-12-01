import Link from 'next/link';
import Button from '../components/Button';

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-light-background-cream">
      <main className="flex-grow flex flex-col items-center justify-center animate-fade-in">
        <div 
          className="w-full max-w-4xl p-10 md:p-20 bg-soft-accent-beige rounded-2xl shadow-2xl"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary-deep-wine mb-4">
            TaskMaster
          </h1>
          <p className="text-lg md:text-xl text-neutral-gray mb-8">
            Elegance in organization. Your tasks, simplified.
          </p>
          <Link href="/auth" className="inline-block">
            <Button variant="primary">Get Started</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
