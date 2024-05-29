import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const Search = () => {
  const router = useRouter();
  const { query } = router.query;

  const calculators = [
    { name: 'Fashion Rating Calculator', link: '/fashion-rating' },
    { name: 'Dating Chances Calculator', link: '/dating-chances' },
    { name: 'Diet and Exercise Calculator', link: '/diet-exercise' }
  ];

  const results = calculators.filter(calculator =>
    calculator.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Search Results for "{query}"</h1>
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index} className="mb-2">
                <Link href={result.link}>
                  <span className="text-blue-500 hover:underline cursor-pointer">{result.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </main>
    </div>
  );
};

export default Search;
