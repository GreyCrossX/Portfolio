// src/components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  setActivePage: (page: 'home' | 'about' | 'services' | 'portfolio' | 'contact') => void;
  activePage: 'home' | 'about' | 'services' | 'portfolio' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ setActivePage, activePage }) => {
  return (
    <nav className='navbar'>
      <ul>
        <li className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>Home</li>
        <li className={activePage === 'about' ? 'active' : ''} onClick={() => setActivePage('about')}>About Me</li>
        <li className={activePage === 'services' ? 'active' : ''} onClick={() => setActivePage('services')}>Services</li>
        <li className={activePage === 'portfolio' ? 'active' : ''} onClick={() => setActivePage('portfolio')}>Portfolio</li>
        <li className={activePage === 'contact' ? 'active' : ''} onClick={() => setActivePage('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
