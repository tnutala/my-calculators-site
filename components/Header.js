import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  
  const calculators = [
    { name: 'Fashion Rating Calculator', link: '/fashion-rating' },
    { name: 'Dating Chances Calculator', link: '/dating-chances' },
    { name: 'Diet and Exercise Calculator', link: '/diet-exercise' }
  ];

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const filteredSuggestions = calculators.filter(calculator =>
        calculator.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const match = calculators.find(calculator =>
        calculator.name.toLowerCase() === searchTerm.toLowerCase()
      );
      if (match) {
        router.push(match.link);
      } else {
        router.push({
          pathname: '/search',
          query: { query: searchTerm }
        });
      }
    }
  };

  return (
    <header className="text-center my-16">
      <h1 className="text-5xl font-extrabold mb-4">Calculators For Life</h1>
      <p className="text-lg text-gray-600 mb-8">Unlock insights into your life with our smart calculators!</p>
      <div className="relative inline-block w-3/4 md:w-1/2">
        <input
          type="text"
          placeholder="Search for a calculator..."
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full px-6 py-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setSearchTerm(suggestion.name);
                  setSuggestions([]);
                  router.push(suggestion.link);
                }}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button className="inline-flex items-center px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span className="mr-1">⚡</span>Speed
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
