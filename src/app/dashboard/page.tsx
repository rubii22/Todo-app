import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-light-background-cream">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary-deep-wine mb-8 text-center">
          My Tasks
        </h1>
        <TodoList />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
