import React, { createContext, useContext, useState } from 'react';

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

interface NavigationContextProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const NavigationProvider: React.FC = ({ children }) => {
  const [activePage, setActivePage] = useState<Page>('home');

  return (
    <NavigationContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
