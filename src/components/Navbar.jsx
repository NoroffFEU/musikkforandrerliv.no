import React, { useState } from 'react';
import LanguageSelector from './lang/select-language-button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
       
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src="/assets/placeholder-images/logo.png" alt="Logo" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="flex items-center text-[#000000] hover:text-[var(--color-alt-forest-green)] font-montserrat text-[14px] uppercase font-semibold">
              <svg className="mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </a>
            <a href="#" className="text-[#000000] hover:text-[var(--color-alt-forest-green)] font-montserrat text-[14px] uppercase font-semibold">News</a>
            <a href="#" className="text-[#000000] hover:text-[var(--color-alt-forest-green)] font-montserrat text-[14px] uppercase font-semibold">About Us</a>
            <div className="relative">
              <button className="text-[#000000] hover:text-[var(--color-alt-forest-green)] inline-flex items-center font-montserrat text-[14px] uppercase font-semibold">
                More
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="ml-2 px-4 py-2 rounded-md bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] text-white font-montserrat text-[14px] uppercase font-semibold">Donate</a>
            <LanguageSelector defaultText="Select a Language" />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#000000]"
            aria-expanded={isMenuOpen}
          >
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

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto border-l-4 border-[#9C27B0]">
          <div className="px-4 py-3 flex justify-between items-center">
            <h2 className="text-[#9C27B0] text-lg font-medium">Mobile nav menu</h2>
            
           
            <button onClick={toggleMenu} className="text-[#000000]">
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
          
         
          <div className="px-4 pt-4 pb-8 space-y-5">
         
            <div className="relative mb-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="search" 
                className="block w-full py-2 pl-10 pr-3 text-sm text-[#000000] border-0 rounded-md bg-transparent outline-none" 
                placeholder="SEARCH" 
              />
            </div>
            
            <a href="#" className="block py-2 font-montserrat text-[#000000] text-[14px] uppercase font-semibold">News</a>
            <a href="#" className="block py-2 font-montserrat text-[#000000] text-[14px] uppercase font-semibold">About Us</a>
            <a href="#" className="block py-2 font-montserrat text-[#000000] text-[14px] uppercase font-semibold">Events</a>
            <a href="#" className="block py-2 font-montserrat text-[#000000] text-[14px] uppercase font-semibold">Our Work</a>
            <a href="#" className="block py-2 font-montserrat text-[#000000] text-[14px] uppercase font-semibold">Contact</a>
          
            <a href="#" className="block py-3 mt-4 text-center rounded-md bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] text-white font-montserrat text-[14px] uppercase font-semibold">Donate</a>

            <div className="pt-4">
              <LanguageSelector className="w-full" defaultText="Select a Language" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;