import React from 'react';

const Navigation = ({ currentTab, setCurrentTab }) => {
  const tabs = ["Overview", "Professional Staff Development", "Staff Development Teams", "Holistic Staff Development", "Consolidated Staff Development Platform", "Individual Development Plan", "Contact Information"];
  
  return (
    <nav className="bg-gray-200 p-4 rounded-lg shadow-lg flex space-x-4 overflow-x-auto">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`p-2 rounded-md transition-colors duration-300 ${currentTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white'}`}
          onClick={() => setCurrentTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
