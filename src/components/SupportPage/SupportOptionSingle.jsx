import { useState } from 'react';

import { Link } from 'react-router-dom';

const SupportOptionSingle = ({ title, ariaDescription, textContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full grid pb-4 lg:pb-16">
      {/* Mobile Accordion Toggle */}
      <div
        className={`relative flex items-center justify-between md:hidden ${isOpen ? 'translate-y-[-9px]' : 'translate-y-0'
          }`}
      >
        <h3
          className={`font-bold uppercase text-4xl text-left ${!isOpen && ' cursor-pointer'}`}
          onClick={() => !isOpen && setIsOpen((prev) => !prev)}
        >
          {title}
        </h3>
        <button
          className="cursor-pointer text-[var(--color-sunset-red)] hover:text-[var(--color-hover-red)] transition-colors duration-300 ease-in-out"
          aria-label={ariaDescription || title}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            aria-hidden="true"
            className={`inline-block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'rotate-90' : 'rotate-0'
              }`}
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <path
                d="M12 8l8 8-8 8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      {/* Larger Screen size Accordion Toggle */}
      <div
        className={`relative hidden md:grid items-center justify-center grid-cols-[270px_auto] gap-x-4 ${isOpen ? 'translate-y-[-6px]' : 'translate-y-0 cursor-pointer'
          }`}
      >
        <h3
          className="font-bold uppercase text-4xl text-center"
          onClick={() => !isOpen && setIsOpen((prev) => !prev)}
        >
          {title}
        </h3>
        <button
          className="cursor-pointer text-[var(--color-sunset-red)] hover:text-[var(--color-hover-red)] transition-colors duration-300 ease-in-out"
          aria-label={ariaDescription || title}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            aria-hidden="true"
            className={`inline-flex align-middle transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'rotate-90' : 'rotate-0'
              }`}
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <path
                d="M12 8l8 8-8 8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Drawer / Content */}
      <div
        id="drawer"
        className={`overflow-clip transition-[opacity,height] duration-300 ease-in-out max-w-[90vw] md:max-w-[67ch] lg:max-w-[80ch] mx-auto text-left ${isOpen ? 'h-full py-4 opacity-100' : 'h-0 py-0 opacity-0'
          }`}
        aria-hidden={!isOpen}
      >
        <p>{textContent}</p>
        <div className="flex">
          <Link
            to="#"
            id="cta-support"
            className="uppercase text-white font-bold bg-[var(--color-sunset-red)] py-2 px-4 rounded-[9px] my-8"
          >
            Go to Form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportOptionSingle;