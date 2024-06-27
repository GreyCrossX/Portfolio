import React from 'react';
import { useNavigation } from './NavigationContext';

const Navbar: React.FC = () => {
  const { activePage, setActivePage } = useNavigation();

  const handleClick = (page: 'home' | 'about' | 'services' | 'portfolio' | 'contact') => {
    setActivePage(page);
  }

  return (
    <nav className="navbar max-w-12">
      <ul className="flex space-x-4 max-w-12">
        {['home', 'about', 'services', 'portfolio', 'contact'].map((page) => (
          <li key={page} className='z-10 max-w-12'>
            <a
              href={`#${page}`}
              className={`inline-block cursor-pointer ${
                activePage === page 
                ? 'text-primary-600 dark:text-primary-400 text-xl lg:text-4xl font-semibold'
                : 'text-text text-md lg:text-2xl font-medium dark:text-text hover:font-extrabold hover:text-primary-500 hover:dark:text-primary-500'
              }`}
              onClick={() => handleClick(page as 'home' | 'about' | 'services' | 'portfolio' | 'contact')}>
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
