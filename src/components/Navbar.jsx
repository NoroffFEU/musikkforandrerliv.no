import React, { useEffect, useRef, useState } from 'react';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import SelectLanguageButton from './lang/select-language-button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
      setIsSearchOpen(false);
      setSearchTerm('');
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        !event.target.closest('.search-toggle')
      ) {
        setIsSearchOpen(false);
      }
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('.dropdown-toggle')
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHome = location.pathname === '/';
  const navbarBgClass =
    isHome && !isScrolled && !isMobile ? 'bg-transparent' : 'bg-white shadow';

  const getDesktopLinkClasses = ({ isActive }) =>
    `${
      isActive
        ? 'text-[var(--color-alt-forest-green)]'
        : 'text-[#000000] hover:bg-[var(--color-sunset-red)] hover:text-white hover:h-[26px] hover:rounded-md transition-all duration-200'
    } flex items-center font-montserrat text-[14px] font-semibold px-2`;

  const getMobileLinkClasses = () =>
    'block w-full py-2 px-4 font-montserrat text-[14px] font-semibold h-[54px] flex items-center rounded-[8px] hover:bg-[var(--color-light-green)] hover:text-[#000000] transition-colors duration-200';

  return (
    <>
      <nav
        className={`${navbarBgClass} transition-colors duration-300 fixed top-0 left-0 w-full z-50`}
      >
        <div className="max-w-[1440px] mx-auto px-[54px] py-[32px] flex flex-wrap items-center gap-[10px] h-[199px]">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img
              src="/assets/placeholder-images/logo.png"
              alt="Logo"
              className="h-[64px] w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <div className="relative" ref={searchRef}>
              <button
                onClick={toggleSearch}
                className="search-toggle flex items-center text-[#000000] hover:bg-[var(--color-sunset-red)] hover:text-white hover:h-[26px] hover:rounded-md transition-all duration-200 font-montserrat text-[14px] font-semibold px-2"
              >
                <svg
                  className="mr-1 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {t('common.header.search')}
              </button>
              {isSearchOpen && (
                <div className="absolute mt-2 right-0 z-20 bg-white border border-[var(--color-sunset-red)] rounded-md shadow-lg p-2 w-72 transition-all duration-200">
                  <form onSubmit={handleSearch} className="flex items-center">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={t('common.header.searchPlaceholder')}
                        className="w-full pl-8 pr-3 py-1 text-sm border border-gray-300 rounded-l-md font-montserrat outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-[var(--color-sunset-red)] text-white px-4 py-1 rounded-r-md font-montserrat text-sm uppercase hover:bg-[var(--color-hover-red)]"
                    >
                      {t('common.header.search')}
                    </button>
                  </form>
                </div>
              )}
            </div>

            <NavLink
              to="/news#latestNewsSection"
              className={getDesktopLinkClasses}
            >
              {t('common.header.news')}
            </NavLink>
            <NavLink to="/about" className={getDesktopLinkClasses}>
              {t('common.header.aboutUs')}
            </NavLink>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="dropdown-toggle inline-flex items-center text-[#000000] hover:bg-[var(--color-sunset-red)] hover:text-white hover:h-[26px] hover:rounded-md transition-all duration-200 font-montserrat text-[14px] font-semibold px-2"
              >
                {t('common.header.more')}
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border shadow-md rounded-md z-10">
                  <NavLink
                    to="/news#eventsSection"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-[var(--color-sunset-red)] hover:text-white transition-all duration-200"
                  >
                    {t('common.header.events')}
                  </NavLink>
                  <NavLink
                    to="/work"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-[var(--color-sunset-red)] hover:text-white transition-all duration-200"
                  >
                    {t('common.header.ourWork')}
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-[var(--color-sunset-red)] hover:text-white transition-all duration-200"
                  >
                    {t('common.header.contact')}
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/donate"
              className="ml-2 px-4 py-2 rounded-md bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] text-white font-montserrat text-[14px] uppercase font-semibold"
            >
              {t('common.header.donate')}
            </NavLink>

            <SelectLanguageButton variant="iconOnly" className="ml-2" />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#000000] ml-auto"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed top-[199px] left-0 w-full bg-white z-40 md:hidden overflow-y-auto shadow-md">
          <div className="px-4 pt-4 pb-8 space-y-5">
            <div className="space-y-2">
              <button
                onClick={toggleSearch}
                className="flex items-center text-[#000000] hover:text-[var(--color-alt-forest-green)] font-montserrat text-[14px] font-semibold"
              >
                <svg
                  className="mr-1 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {t('common.header.search')}
              </button>

              {isSearchOpen && (
                <form
                  onSubmit={handleSearch}
                  className="flex items-center border border-[var(--color-sunset-red)] rounded-md px-2 py-1"
                >
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder={t('common.header.searchPlaceholder')}
                      className="w-full pl-8 pr-3 py-1 text-sm border-none outline-none font-montserrat"
                    />
                  </div>
                  <button
                    type="submit"
                    className="ml-2 bg-[var(--color-sunset-red)] text-white px-3 py-1 rounded-md font-montserrat text-sm uppercase hover:bg-[var(--color-hover-red)]"
                  >
                    {t('common.header.search')}
                  </button>
                </form>
              )}
            </div>

            <NavLink
              to="/news#latestNewsSection"
              className={getMobileLinkClasses}
              onClick={toggleMenu}
            >
              {t('common.header.news')}
            </NavLink>
            <NavLink
              to="/about"
              className={getMobileLinkClasses}
              onClick={toggleMenu}
            >
              {t('common.header.aboutUs')}
            </NavLink>
            <NavLink
              to="/news#eventsSection"
              className={getMobileLinkClasses}
              onClick={toggleMenu}
            >
              {t('common.header.events')}
            </NavLink>
            <NavLink
              to="/work"
              className={getMobileLinkClasses}
              onClick={toggleMenu}
            >
              {t('common.header.ourWork')}
            </NavLink>
            <NavLink
              to="/contact"
              className={getMobileLinkClasses}
              onClick={toggleMenu}
            >
              {t('common.header.contact')}
            </NavLink>

            <NavLink
              to="/donate"
              className="block py-3 mt-4 text-center rounded-md bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] text-white font-montserrat text-[14px] uppercase font-semibold"
              onClick={toggleMenu}
            >
              {t('common.header.donate')}
            </NavLink>

            <SelectLanguageButton variant="withText" className="mt-2 w-full" />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
