import React, { useState } from 'react';
import Layout from './components/Layout';

import LoadingScreen from './components/LoadingScreen';
import { NavigationProvider } from './components/NavigationContext';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main>
      <NavigationProvider>
        <Layout>
          {!isLoaded && <LoadingScreen onLoaded={() => setIsLoaded(true)} />}
        </Layout>
      </NavigationProvider>
    </main>
  );
};

export default App;
