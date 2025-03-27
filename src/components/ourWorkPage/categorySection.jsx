import { useEffect, useState } from 'react';

import ourWorkData from '../../data/our-work-page.json';

const CategorySection = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(ourWorkData.sections);
  }, []);

  return (
    <section className="container mx-auto max-w-6xl px-4">
      <div className="space-y-16">
        {sections.map((section, index) => (
          <div 
            key={section.id} 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:order-1">
                  <img 
                    src={section.image} 
                    alt={section.imageAlt} 
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                <div className="md:order-2 p-14 ml-2">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  <p className="text-black">{section.content}</p>
                </div>
              </>
            ) : (
              <>
                <div className="md:order-2">
                  <img 
                    src={section.image} 
                    alt={section.imageAlt} 
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                <div className="md:order-1 p-14 mr-2">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
