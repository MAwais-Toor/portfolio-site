import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <img
        src="./404.jpg"
        alt="404"
        className="w-80 md:w-96 mb-8"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
