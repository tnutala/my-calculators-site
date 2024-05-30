import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CalculatorCard from '../components/CalculatorCard';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

// Featured Calculators should drive the most traffic and affilaite links or be sponsored

const Home = () => {
  return (

    <div>
      <Navbar />
      <Header />
      <main className="p-4 sm:p-8">
        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Featured Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <CalculatorCard title="Fashion Rating Calculator" iconSrc="/icons/fashion-rating.png" link="/fashion-rating" />
            <CalculatorCard title="Dating Chances Calculator" iconSrc="/icons/dating-chances.png" link="/dating-chances" />
            <CalculatorCard title="Diet and Exercise Calculator" iconSrc="/icons/diet-exercise.png" link="/diet-exercise" />
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Other Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <CalculatorCard title="College Chances Calculator" iconSrc="/icons/college-chances.png" link="https://collegechances.vercel.app" external />
          </div>
        </section>
      </main>
        <Analytics />
        <SpeedInsights />

    </div>
  );
};

export default Home;