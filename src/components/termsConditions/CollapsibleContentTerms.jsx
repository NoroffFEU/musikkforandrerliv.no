import { useState } from 'react';

import { FaChevronDown } from 'react-icons/fa';

//Using mock data for terms content used until cms is set up for terms
const terms = [
  {
    section: 'Scope',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    section: 'Data We Collect',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    section: "Data We Don't Collect",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    section: 'Use Of Information',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    section: 'Data Security',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    section: 'Third Party Links',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    section: "Children's Privacy",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
  {
    section: 'Changes To Our Privacy',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet.',
  },
];

export const CollapsibleContentTerms = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[85%] mx-auto px-4 font-sans py-10">
      {terms.map((term, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="py-6 w-full">
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center text-left font-semibold text-lg uppercase whitespace-nowrap"
              aria-expanded={isOpen}
              aria-controls={`section-content-${index}`}
              id={`section-title-${index}`}
            >
              <h2 className="w-full text-left text-lg font-semibold uppercase">
                {term.section}
              </h2>
              <FaChevronDown
                className={`ml-2 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div
                id={`section-content-${index}`}
                role="region"
                aria-labelledby={`section-title-${index}`}
                className="mt-4 text-base text-gray-700"
              >
                {term.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
