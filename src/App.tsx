// src/App.tsx
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');

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
    <Layout setActivePage={setActivePage}>
      {renderContent()}
    </Layout>
  );
};

export default App;
