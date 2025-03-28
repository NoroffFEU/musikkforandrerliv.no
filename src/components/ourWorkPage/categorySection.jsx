import { useEffect, useState } from 'react';
import ReusableButton from '../../components/buttons/ReusableButton';
import ourWorkData from '../../data/our-work-page.json';

const CategorySection = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(ourWorkData.sections);
  }, []);

  const handleReadMoreClick = () => {
    // Log the action (for now, as page isn't ready)
    console.log("Read More clicked");
  };

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
                    className="w-full h-full object-cover aspect-square max-md:rounded-t-lg"
                  />
                </div>
                <div className="md:order-2 p-8 sm:p-14 sm:mr-2">
                  <h2 className="text-2xl md:text-2xl font-bold sm:font-semibold mb-4">{section.title}</h2>
                  <p className="text-black">{section.content}</p>
                  {/* ReusableButton with Read More action */}
                  <ReusableButton
                    text="Read More"
                    onClick={handleReadMoreClick} // Placeholder action for now
                    className="mt-4"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="md:order-2">
                  <img 
                    src={section.image} 
                    alt={section.imageAlt} 
                    className="w-full h-full object-cover aspect-square max-md:rounded-t-lg"
                  />
                </div>
                <div className="md:order-1 p-8 sm:p-14 sm:mr-2">
                  <h2 className="text-2xl md:text-2xl font-bold sm:font-semibold mb-4">{section.title}</h2>
                  <p className="text-gray-600">{section.content}</p>
                  {/* ReusableButton with Read More action */}
                  <ReusableButton
                    text="Read More"
                    onClick={handleReadMoreClick} // Placeholder action for now
                    className="mt-4"
                  />
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
