// LoadingScreen.tsx
import React, { useEffect } from "react";

const LoadingScreen: React.FC<{ onLoaded: () => void }> = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(onLoaded, 3000);
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-background text-text z-50">
      <div className="flex flex-col items-center space-y-2 text-2xl animate-slide-in">
        <div className="flex space-x-2">
          <p className="font-bold">Front-End</p>
          <p className="font-extrabold">·</p>
          <p className="font-bold text-primary">SEO</p>
          <p className="font-extrabold">·</p>
          <p className="font-bold">Copy-writing</p>
        </div>
      </div>
      <p className="mt-4 text-4xl font-medium animate-fade-in ">Grey<span className="text-accent">X</span> Developments</p>
    </div>
  );
};

export default LoadingScreen;
