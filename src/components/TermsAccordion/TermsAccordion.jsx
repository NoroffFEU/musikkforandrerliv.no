import { useState } from 'react';

// Add open/close logic and keyboard handling.
// Unit test toggle behavior and accessibility.

export const TermsAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="terms-accordion border-none mb-11">
      <button
        className="w-full text-left px-4 py-3 flex justify-between items-center uppercase font-semibold text-3xl"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
        id={`accordion-header-${title}`}
      >
        <span>{title}</span>
        <span
          className="text-xl transition-transform duration-200 inline-block"
          style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
        >
          ^
        </span>
      </button>
      {isOpen && (
        <div
          id={`accordion-content-${title}`}
          className="px-4 py-3 bg-white"
          role="region"
          aria-labelledby={`accordion-header-${title}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
