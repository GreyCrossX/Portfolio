import React, { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Background from './Background';
import './Layout.css';
import { useNavigation } from './NavigationContext';
import Home from './Home';
import AboutMe from './AboutMe';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { activePage } = useNavigation();
  const [theme, setTheme] = useState("dark");

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html')?.classList.add("dark");
    } else {
      document.querySelector('html')?.classList.remove("dark");
    }
  }, [theme]);

  const renderContent = () => {
    switch (activePage) {
      case 'about':
        return <AboutMe />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="layout">
      <div className="solid-background"></div>
      <div className="content-frame">
        <Background />
        <Navbar />
        <div className="translucent-background">
          <div className="content-container">
            {renderContent()}
            <div className="theme-switch" onClick={handleChangeTheme}>
              <input type="checkbox" id="theme-toggle" />
              <span className='text-text dark:text-text hover:text-primary dark:hover:text-primary'>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
