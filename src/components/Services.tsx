import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaReact, FaPython, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiDjango } from 'react-icons/si';

const Services: React.FC = () => {
  const [iconColor, setIconColor] = useState<string>('#000');

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    const observer = new MutationObserver(() => {
      if (htmlElement?.classList.contains('dark')) {
        setIconColor('#fff');
      } else {
        setIconColor('#000');
      }
    });

    observer.observe(htmlElement!, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="visual-storytelling min-h-screen pl-48 pt-12 flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-700 dark:text-primary-300 fade-in">
        Freelance Services
      </h1>

      {/* Services Section */}
      <section className="services-section w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Web Development */}
        <div className="service-card bg-black/20 dark:bg-white/20 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ease-in-out fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary-700 dark:text-primary-300">Web Dev</h2>
          <p className="text-lg">
            I specialize in building responsive web applications using React and Next.js. From dynamic frontends to seamless user experiences, I bring your designs to life.
          </p>
        </div>

        {/* SEO */}
        <div className="service-card bg-black/20 dark:bg-white/20 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ease-in-out fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary-700 dark:text-primary-300">SEO</h2>
          <p className="text-lg">
            Enhance your website's visibility and drive organic traffic with SEO strategies tailored to your business goals. Improve search engine rankings and attract more visitors.
          </p>
        </div>

        {/* Copywriting */}
        <div className="service-card bg-black/20 dark:bg-white/20 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ease-in-out fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary-700 dark:text-primary-300">Copywriting</h2>
          <p className="text-lg">
            Engage your audience and convert visitors into customers with compelling copy. From website content to marketing materials, I craft messages that resonate with your audience.
          </p>
        </div>
      </section>

      {/* Technology Stack */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-700 dark:text-primary-300 fade-in">
        Tech Stack
      </h1>
      <div className="tech-stack w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center fade-in">
        <IconContext.Provider value={{ color: iconColor }}>
          <div className="relative group tech-icon">
            <FaReact size="6rem" />
            <div className="absolute inset-0 flex items-center justify-center bg-primary-900/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              React
            </div>
          </div>
          <div className="relative group tech-icon">
            <SiNextdotjs size="6rem" />
            <div className="absolute inset-0 flex items-center justify-center bg-primary-900/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Next.js
            </div>
          </div>
          <div className="relative group tech-icon">
            <SiDjango size="6rem" />
            <div className="absolute inset-0 flex items-center justify-center bg-primary-900/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Django
            </div>
          </div>
          <div className="relative group tech-icon">
            <FaNodeJs size="6rem" />
            <div className="absolute inset-0 flex items-center justify-center bg-primary-900/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Node.js
            </div>
          </div>
          <div className="relative group tech-icon">
            <FaPython size="6rem" />
            <div className="absolute inset-0 flex items-center justify-center bg-primary-900/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Python
            </div>
          </div>
          <div className="relative group tech-icon">
            <FaDatabase size="6rem" />
            <div className="absolute inset-0 flex items-center justify-center bg-primary-900/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              MongoDB
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Services;
