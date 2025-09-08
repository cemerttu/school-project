// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Kenya Unemployment Analysis</h3>
            <p className="text-gray-400">Understanding the challenges and solutions</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">Data sourced from Kenya National Bureau of Statistics</p>
            <p className="text-gray-400">© {new Date().getFullYear()} - All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;