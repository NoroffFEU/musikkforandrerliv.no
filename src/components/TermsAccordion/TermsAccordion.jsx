import { useState } from 'react';

export default function TermsAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen((v) => !v);

  const slug = String(title).toLowerCase().replace(/\s+/g, '-');
  const headerId = `accordion-header-${slug}`;
  const panelId = `accordion-content-${slug}`;

  return (
    <div className="terms-accordion border-none mb-11">
      <button
        type="button"
        className="w-full text-left px-4 py-3 flex justify-between items-center uppercase font-semibold text-3xl"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={headerId}
      >
        <span>{title}</span>
        <span
          className={`inline-block text-xl transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div
          id={panelId}
          className="px-4 py-3 bg-white"
          role="region"
          aria-labelledby={headerId}
        >
          {children}
        </div>
      )}
    </div>
  );
}
