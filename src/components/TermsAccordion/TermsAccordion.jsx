import { useState } from 'react';

// Add open/close logic and keyboard handling.
// Unit test toggle behavior and accessibility.

export const TermsAccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div>
      <button onClick={toggleOpen} aria-expanded={isOpen}>
        {title} {isOpen ? '-' : '+'}
      </button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};
export const TermsAccordion = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <TermsAccordionItem
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
};
