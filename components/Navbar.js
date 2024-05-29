import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <Link href="/" className="text-xl font-bold">Calculators For Life</Link>
      </div>
      <div className="space-x-4">
        <Link href="/blog" className="hover:underline">Blog</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-2 py-1 border rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
  );
};

export default Navbar;
