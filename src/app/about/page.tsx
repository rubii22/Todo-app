import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const features = [
    {
      title: 'Elegant Welcome Page',
      description: 'A beautiful, modern welcome screen that provides a great first impression.'
    },
    {
      title: 'Seamless Authentication',
      description: 'Frontend-only sign-in and sign-up forms with a clean, user-friendly interface.'
    },
    {
      title: 'Intuitive Todo Management',
      description: 'Full control over your tasks with add, edit, delete, and complete functionality.'
    },
    {
      title: 'Responsive & Modern Design',
      description: 'A premium, minimal design that looks great on all devices, from mobile phones to desktops.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-light-background-cream">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary-deep-wine">About TaskMaster</h1>
          <p className="mt-4 text-lg text-neutral-gray">
            Elegance in organization. Built by <span className="font-semibold">Rubab</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-semibold text-primary-deep-wine mb-3">{feature.title}</h3>
              <p className="text-neutral-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
