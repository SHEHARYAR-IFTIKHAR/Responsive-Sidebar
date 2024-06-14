import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          <ul className="mt-6">
            <li className="mb-2">
              <a href="#" className="text-white">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white">Services</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Burger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 text-2xl bg-gray-800 text-white fixed top-4 left-4 z-50 md:hidden"
      >
        &#9776;
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64 md:ml-0">
        <h1 className="text-4xl">Main Content</h1>
        <p>Your main content goes here.</p>
      </div>
    </div>
  );
};

export default Sidebar;
