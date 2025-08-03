'use client';
import * as React from 'react';
import Lottie from 'lottie-react';

const UnderDevelopmentPage = () => {
  const [backgroundData, setBackgroundData] = React.useState<any>(null);
  const [foregroundData, setForegroundData] = React.useState<any>(null);

  React.useEffect(() => {
    
    fetch('/Assets/under-dev-animation.json')
      .then((res) => res.json())
      .then((data) => setForegroundData(data));
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#191970] to-[#000000] text-center">
      {/* Background Animation */}
      {backgroundData && (
        <Lottie
          animationData={backgroundData}
          loop
          autoPlay
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none"
        />
      )}

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 mt-16 space-y-6">
        {/* Logo */}
        <img
          src="/Assets/xyronix-logo.png"
          alt="Xyronix Labs Logo"
          className="w-40 h-auto"
        />

        {/* Text */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          This Page is Under Development.
        </h1>

        {/* Foreground Animation */}
        {foregroundData && (
          <div className="w-full max-w-2xl mb-8">
            <Lottie animationData={foregroundData} loop autoPlay />
          </div>
        )}
      </div>
    </div>
  );
};

export default UnderDevelopmentPage;
