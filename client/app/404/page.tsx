'use client';
import React from 'react';
import Lottie from 'lottie-react';

const animationPath = '/Assets/404-animation.json';

const NotFoundPage = () => {
  const [animationData, setAnimationData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch(animationPath)
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 pt-16">
      {/* Logo */}
      <img
        src="/Assets/xyronix-logo.png"
        alt="Xyronix Labs Logo"
        className="h-12 w-12"
      />

      {/* Text */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you’re looking for doesn’t exist.
      </p>

      {/* Animation */}
      {animationData && (
        <div className="w-full max-w-sm">
          <Lottie animationData={animationData} loop={true} />
        </div>
      )}
    </div>
  );
};

export default NotFoundPage;
