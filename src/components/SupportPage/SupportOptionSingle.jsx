import { useState } from 'react';

import { Link } from 'react-router-dom';

const SupportOptionSingle = ({ title, ariaDescription, textContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Responsive stroke width based on screen size
  const getStrokeWidth = () => {
    if (window.innerWidth >= 1024) return 4; // Large screens
    if (window.innerWidth >= 768) return 3;  // Medium screens
    return 2;                                // Small screens
  };

  const [strokeWidth, setStrokeWidth] = useState(getStrokeWidth());

  // Update strokeWidth on resize
  useState(() => {
    const handleResize = () => setStrokeWidth(getStrokeWidth());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full grid my-auto mr-8 justify-start pb-4 lg:pb-16">
      <div className={`flex gap-2 justify-center items-center transition-all duration-300 relative text-center${isOpen ? ' translate-y-[-6px]' : ''}`}>
        <h3 className="font-bold uppercase text-4xl text-center">{title}</h3>
        <button
          className="cursor-pointer text-[var(--color-sunset-red)] hover:text-[var(--color-hover-red)] transition-colors duration-300 ease-in-out"
          aria-label={ariaDescription || title}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            aria-hidden="true"
            className={`inline-block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'rotate-0' : '-rotate-90'} text-center`}
          >
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <div
        id="drawer"
        className={[
          "overflow-hidden transition-all duration-300 ease-in-out max-w-[37ch] max-w-[60vw] mx-auto text-left",
          isOpen
            ? "h-full py-4 opacity-100"
            : "h-0 py-0 opacity-0"
        ].join(' ')}
        aria-hidden={!isOpen}
      >
        <p>{textContent}</p>
        <div className="flex">
          <Link
            to="#"
            id='cta-support'
            className="uppercase text-white bg-[var(--color-sunset-red)] py-2 px-4 rounded-[9px] my-8"
          >
            Go to Form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportOptionSingle;
