import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main navbar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Placeholder for your circular logo */}
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
              {/* Replace this with your actual logo */}
              <span className="text-gray-500 text-xs">Logo</span>
            </div>
          </div>

          {/* Desktop menu - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
              <svg className="mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">News</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
            <div className="relative">
              <button className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                More
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="ml-2 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600">DONATE</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700"
            aria-expanded={isMenuOpen}
          >
            {/* Simple hamburger icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto">
          <div className="px-4 py-3 flex justify-between items-center border-b border-gray-200">
            {/* Logo in mobile menu */}
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xs">Logo</span>
            </div>
            
            {/* Close button */}
            <button onClick={toggleMenu} className="text-gray-700">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Mobile menu links */}
          <div className="px-4 pt-4 pb-8 space-y-4">
            <a href="#" className="flex items-center py-2 text-base font-medium text-gray-700">
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </a>
            <a href="#" className="block py-2 text-base font-medium text-gray-700">News</a>
            <a href="#" className="block py-2 text-base font-medium text-gray-700">About Us</a>
            <a href="#" className="block py-2 text-base font-medium text-gray-700">More</a>
            <a href="#" className="block py-2 mt-4 px-4 text-center rounded-md bg-red-500 text-white font-medium">DONATE</a>
            
            {/* Globe icon at the bottom */}
            <div className="pt-4 flex justify-center">
              <a href="#" className="text-gray-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;