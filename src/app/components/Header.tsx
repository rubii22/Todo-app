import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-light-background-cream">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/welcome" className="text-2xl font-bold text-primary-deep-wine">
          TaskMaster
        </Link>
        <nav className="flex space-x-4">
          <Link href="/dashboard" className="text-neutral-gray hover:text-primary-deep-wine transition-colors">
            Dashboard
          </Link>
          <Link href="/about" className="text-neutral-gray hover:text-primary-deep-wine transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
