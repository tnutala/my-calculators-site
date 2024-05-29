import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">This is the about page.</p>
      </main>
    </div>
  );
};

export default About;
