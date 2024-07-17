import React from 'react';

const Banner: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
        <div className="text-2xl font-bold text-green-800 mr-5">bright.</div>
        <div className="flex-grow flex items-center border border-gray-300 rounded-full px-3 py-1">
          <input 
            type="text" 
            placeholder="Sök med titel, författare, ISBN, kurskod eller ämne" 
            className="w-full outline-none"
            readOnly    
          />
        </div>
        <button className="ml-3 text-xl">+</button>
        <button className="ml-3">Logga in</button>
        <button className="ml-3 text-xl">🛒</button>
      </div>
    </header>
  );
};

export default Banner;