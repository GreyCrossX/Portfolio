// Home.tsx
import React from 'react';
import image from '../assets/IMG_3307.png';

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen p-4">
      <div className="text-center mb-8 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-text dark:text-gray-200 mb-2">MIGUEL A. ATHIE</h1>
        <h2 className="text-2xl md:text-4xl text-gray- dark:text-gray-300 mb-4">A.K.A. GreyX</h2>
        <h3 className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-6">
          Elevate your startup with our{' '}
          <span className="text-primary-700 dark:text-primary-300">quick and affordable</span> solutions
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-100 px-4">Software Development, SEO, Copywriting</p>
      </div>
      <img
        src={image}
        alt="Mike Athie IA driven face picture"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
    </div>
  );
};

export default Home;