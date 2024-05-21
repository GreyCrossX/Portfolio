// src/components/Layout.tsx
import React, { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Background from './Background';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  setActivePage: (page: 'home' | 'about' | 'services' | 'portfolio' | 'contact') => void;
  activePage: 'home' | 'about' | 'services' | 'portfolio' | 'contact';
}

const Layout: React.FC<LayoutProps> = ({ children, setActivePage }) => {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html')?.classList.add("dark");
    } else {
      document.querySelector('html')?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="layout">
      <Navbar setActivePage={setActivePage} />
      <div className="content-frame">
        <Background />
        <div className="translucent-background">
          <div className="content-container">
            {children}
          </div>
        </div>
      </div>
      <div className="theme-switch" onClick={handleChangeTheme}>
        <input type="checkbox" id="theme-toggle" />
        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </div>
    </div>
  );
};

export default Layout;
