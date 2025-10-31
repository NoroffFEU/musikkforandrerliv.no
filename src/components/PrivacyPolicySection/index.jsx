import { useRef, useState } from 'react';

export default function PrivacyPolicySection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const sectionId = title.toLowerCase().replace(/\s+/g, '-');
  const toggleSection = () => setIsOpen((previous) => !previous);
  const contentRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSection();
    }
  };

  return (
    <div className="mb-2" role="region" aria-labelledby={`${sectionId}-header`}>
      {/* Toggle header */}
      <button
        id={`${sectionId}-header`}
        onKeyDown={handleKeyDown}
        onClick={toggleSection}
        aria-expanded={isOpen}
        aria-controls={`${sectionId}-content`}
        className="w-full text-left px-4 py-3 flex gap-2 justify-between items-center uppercase font-semibold text-3xl"
      >
        <h2>{title.toUpperCase()}</h2>
        {/* Toggle chevron */}
        <svg
          className={`h-4 w-4 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Collapsible content */}
      <div
        id={`${sectionId}-content`}
        ref={contentRef}
        role="region"
        aria-hidden={!isOpen}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out text-center"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight || 0}px`
            : '0px',
          marginTop: isOpen ? '0.5rem' : '0',
        }}
      >
        {children}
      </div>
    </div>
  );
}
