import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black px-6 text-center">
      <h2 className="text-3xl md:text-8xl font-bold text-white mb-4">
        Oops!
      </h2>

      {/* Error Code */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-red-500 mb-4">
        404
      </h1>

      {/* Error Message */}
      <p className="text-base md:text-lg text-gray-300 max-w-xl mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <a
        href="/"
        className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
