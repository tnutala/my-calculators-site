import Image from 'next/image';
import Link from 'next/link';

const CalculatorCard = ({ title, iconSrc, link, external = false }) => {
  if (external) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block border p-4 rounded-xl shadow hover:bg-gray-100 transition-colors duration-200">
        <div className="flex flex-col items-center">
          <Image src={iconSrc} alt={`${title} Icon`} width={50} height={50} />
          <h2 className="text-2xl font-bold mb-2 mt-4">{title}</h2>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Use Calculator</button>
        </div>
      </a>
    );
  }

  return (
    <Link href={link} className="block border p-4 rounded-xl shadow hover:bg-gray-100 transition-colors duration-200">
      <div className="flex flex-col items-center">
        <Image src={iconSrc} alt={`${title} Icon`} width={50} height={50} />
        <h2 className="text-2xl font-bold mb-2 mt-4">{title}</h2>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Use Calculator</button>
      </div>
    </Link>
  );
};

export default CalculatorCard;
