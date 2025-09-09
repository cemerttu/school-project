// components/Header.js
import React from 'react';

const Header = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-chart-line' },
    { id: 'youth', label: 'Youth Unemployment', icon: 'fas fa-users' },
    { id: 'regional', label: 'Regional Analysis', icon: 'fas fa-map' },
    { id: 'solutions', label: 'Solutions', icon: 'fas fa-lightbulb' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-blue-800 flex items-center">
            <i className="fas fa-chart-bar mr-2"></i>
            Kenya Unemployment Analysis
          </h1>
          <p className="text-sm text-gray-600">Understanding the challenges and solutions</p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-3">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center nav-item ${
                currentView === item.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className={`${item.icon} mr-2`}></i>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;