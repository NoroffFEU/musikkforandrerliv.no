import React from 'react';
import SelectLanguageButton from '../lang/SelectLanguageButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow-md py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/assets/images/svgs/headerLogo.svg" alt="MMF Logo" className="h-8" />
            </a>
          </div>
          <nav className="flex items-center space-x-4">
            <SelectLanguageButton />
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/assets/images/svgs/headerLogo.svg" alt="MMF Logo" className="h-8" />
              <p className="text-sm mt-2">© {new Date().getFullYear()} Musikk Forandrer Liv</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <img src="/assets/images/svgs/facebook.svg" alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="/donate" aria-label="Donate">
                <img src="/assets/images/svgs/donate.svg" alt="Donate" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;