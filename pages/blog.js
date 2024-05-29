import Navbar from '../components/Navbar';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-4">This is the blog page.</p>
      </main>
    </div>
  );
};

export default Blog;
