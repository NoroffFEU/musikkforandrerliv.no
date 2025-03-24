import React, { useState, useEffect } from 'react';
import SelectLanguageButton from './lang/select-language-button';
import * as Icon from './lang/language-icons';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageOpen(false);
  };

  const languages = [
    { name: "Norwegian", code: "No" },
    { name: "English", code: "En" },
    { name: "Malagasy", code: "Mg" },
  ];

  return (
    <nav className="bg-transparent font-montserrat">
      <div className="max-w-screen-2xl mx-auto py-8 px-14">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img 
              src="/assets/placeholder-images/logo.png" 
              alt="Logo" 
              className="h-36 w-36 rounded-full" 
              style={{ width: '144px', height: '144px', borderRadius: '160px' }}
            />
          </div>

        
          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="flex items-center text-[#363732] hover:text-[var(--color-alt-forest-green)] text-2xl font-medium">
              <svg className="mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </a>
            <a href="#" className="text-[#363732] hover:text-[var(--color-alt-forest-green)] text-2xl font-medium">News</a>
            <a href="#" className="text-[#363732] hover:text-[var(--color-alt-forest-green)] text-2xl font-medium">About Us</a>
            <div className="relative">
              <button className="text-[#363732] hover:text-[var(--color-alt-forest-green)] inline-flex items-center text-2xl font-medium">
                More
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
        
            <a 
              href="#" 
              className="bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] text-white rounded-md uppercase font-medium"
              style={{ 
                width: '172px', 
                height: '49px', 
                borderRadius: '9px',
                paddingTop: '16px',
                paddingRight: '32px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Donate
            </a>
            
        
            <SelectLanguageButton />
          </div>

      
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#000000] hover:bg-[#B2CAC2] rounded-md"
            aria-expanded={isMenuOpen}
            style={{ borderRadius: '9px' }} 
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
        <div className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto">
          <div className="flex justify-between items-center p-3">
            <div>
              <img 
                src="/assets/placeholder-images/logo.png" 
                alt="Logo" 
                style={{ 
                  width: '84px', 
                  height: '84px', 
                  borderRadius: '160px',
                  position: 'relative',
                  top: '22px',
                  left: '22px'
                }} 
              />
            </div>
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
          
          <div className="px-4 pt-2 pb-8 space-y-4">
          
            <div className="relative mb-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="search" 
                className="block w-full py-2 pl-10 pr-3 text-sm text-[#363732] border-0 rounded-md bg-transparent outline-none font-montserrat" 
                placeholder="SEARCH" 
              />
            </div>
            
         
            <a href="#" className="block py-2 font-montserrat text-[#363732] text-[16px] uppercase font-medium">News</a>
            <a href="#" className="block py-2 font-montserrat text-[#363732] text-[16px] uppercase font-medium">About Us</a>
            <a href="#" className="block py-2 font-montserrat text-[#363732] text-[16px] uppercase font-medium">Events</a>
            <a href="#" className="block py-2 font-montserrat text-[#363732] text-[16px] uppercase font-medium">Our Work</a>
            <a href="#" className="block py-2 font-montserrat text-[#363732] text-[16px] uppercase font-medium">Contact</a>
          
       
            <a 
              href="#" 
              className="block text-center rounded-md bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] text-white font-montserrat text-[16px] uppercase font-medium"
              style={{ 
                borderRadius: '9px',
                paddingTop: '16px',
                paddingRight: '32px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                margin: '16px 0'
              }}
            >
              Donate
            </a>

        
            <div className="pt-4">
              <div className="relative w-1/2 ml-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between w-full text-[#363732] py-2 focus:outline-none"
                >
                  {selectedLanguage ? (
                    <>
                      <span className="inline-block mr-2">
                        {React.createElement(Icon[selectedLanguage.code])}
                      </span>
                      <span>{selectedLanguage.name}</span>
                    </>
                  ) : (
                    <>
                      <span>Select a Language</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={isLanguageOpen ? "M7 15l5-5 5 5" : "M7 9l5 5 5-5"} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute left-0 mt-1 bg-transparent z-50 py-1 w-full">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => selectLanguage(lang)}
                      >
                        <span>{lang.name}</span>
                        <span className="inline-block ml-6">
                          {React.createElement(Icon[lang.code])}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;