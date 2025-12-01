const Footer = () => {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-light-background-cream">
      <div className="container mx-auto text-center text-neutral-gray">
        <p>&copy; {new Date().getFullYear()} TaskMaster. Created by Rubab.</p>
      </div>
    </footer>
  );
};

export default Footer;
