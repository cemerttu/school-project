// components/Header.js
import React from 'react';

const Header = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'youth', label: 'Youth Unemployment' },
    { id: 'regional', label: 'Regional Analysis' },
    { id: 'solutions', label: 'Solutions' }
  ];

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-blue-800">Kenya Unemployment Analysis</h1>
          <p className="text-sm text-gray-600">Understanding the challenges and solutions</p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === item.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;