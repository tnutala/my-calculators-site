import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center py-4 px-8 bg-gray-800 text-white">
      <div className="flex items-center space-x-2 mb-4 sm:mb-0">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <Link href="/" className="text-xl font-bold">Calculators For Life</Link>
      </div>
      <div className="space-x-4">
        <Link href="/blog" className="hover:underline">Blog</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
