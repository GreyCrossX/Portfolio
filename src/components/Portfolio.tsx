// src/components/Portfolio.tsx
import React from 'react';
import { FaReact, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiAstro } from 'react-icons/si';

const projects = [
  {
    title: 'Dr Jose Athie',
    description: 'Services page for Dr Jose M. Athie using Astro',
    technologies: [<FaReact />, <SiAstro />],
    imageUrl: 'https://via.placeholder.com/300',
    projectLink: '#',
    gitHubLink:""
  },
  {
    title: 'Little Lemon CDMX',
    description: 'Final project for the React specialization',
    technologies: [<FaReact />],
    imageUrl: 'https://via.placeholder.com/300',
    projectLink: '#',
    gitHubLink:""
  },
  {
    title: 'The PrintShop',

    description: 'Web application for a printing company',
    technologies: [<FaReact />, <SiMongodb />],
    imageUrl: 'https://via.placeholder.com/300',
    projectLink: '#',
    gitHubLink:""
  },
];

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="min-h-screen pl-48 pt-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-700 dark:text-primary-300">
        My Portfolio
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
        <a href={project.projectLink}>
          <div key={index} className="project-card bg-white/50 dark:bg-black/50 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105">
            <img src={project.imageUrl} alt={project.title} className="rounded-md mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-primary-700 dark:text-primary-300">{project.title}</h2>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="flex space-x-4 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-3xl">{tech}</span>
              ))}
            </div>
            <a href={project.gitHubLink} className="text-primary-500 font-bold hover:text-primary-700 transition-colors duration-300">
              <FaGithub size="2rem" />
            </a>
          </div>
        </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
