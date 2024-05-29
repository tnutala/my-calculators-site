import { useState } from 'react';
import Navbar from '../components/Navbar';

const DietExercise = () => {
  const [score, setScore] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setScore(Math.floor(Math.random() * 100) + 1); // Placeholder logic for score calculation
  };

  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Diet and Exercise Calculator</h1>
        <p className="mb-4">Use this calculator to assess your diet and exercise regimen. Simply fill in the form and click "Calculate" to see your score.</p>
        <div className="flex">
          <form onSubmit={handleSubmit} className="w-1/2 space-y-4">
            {/* Form fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* Add more form fields as needed */}
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
              Calculate
            </button>
          </form>
          <div className="w-1/2 flex items-center justify-center">
            <div className="w-48 h-48 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md shadow-lg text-4xl font-bold">
              {score !== null ? score : 'N/A'}
            </div>
          </div>
        </div>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <ul>
            <li className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 border border-green-300 rounded-md shadow-lg text-lg font-bold">+20</div>
                <div className="ml-2 text-yellow-500">$$</div>
              </div>
              <div>
                <a href="#" className="text-blue-500 hover:underline">Nutrition Guide</a>
                <span className="ml-2 text-gray-500">- Enhance your diet</span>
              </div>
            </li>
            {/* Add more resources as needed */}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DietExercise;