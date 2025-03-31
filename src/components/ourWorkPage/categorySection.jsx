import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ReusableButton from '../../components/buttons/ReusableButton';
import ourWorkData from '../../data/our-work-page.json';

const CategorySection = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(ourWorkData.sections);
  }, []);

  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/work-specific');
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
                  <div className="flex items-center">
                    <h2 className="text-2xl md:text-2xl font-bold sm:font-semibold mb-4 text-center">
                      {section.title}
                    </h2>
                    <img 
                      src="/assets/placeholder-images/Arrow-forward-circle.png" 
                      alt="Arrow to the right" 
                      onClick={handleReadMoreClick}
                      className="ml-2 w-[30px] h-[30px] md:hidden mb-4" 
                    />
                  </div>

                  <p className="text-black">{section.content}</p>
                  {/* ReusableButton with Read More action */}
                  <div className="hidden md:block">
                    <ReusableButton
                    text="Read More"
                    onClick={handleReadMoreClick}
                    className="mt-4"
                   />
                </div>
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
                  <div className="flex items-center">
                    <h2 className="text-2xl md:text-2xl font-bold sm:font-semibold mb-4 text-center">
                      {section.title}
                    </h2>
                    <img 
                      src="/assets/placeholder-images/Arrow-forward-circle.png" 
                      alt="Arrow to the right" 
                      onClick={handleReadMoreClick}
                      className="ml-2 w-[30px] h-[30px] md:hidden mb-4" 
                    />
                  </div>

                  <p className="text-gray-600">{section.content}</p>
                  {/* ReusableButton with Read More action */}
                  <div className="hidden md:block">
                    <ReusableButton
                    text="Read More"
                    onClick={handleReadMoreClick}
                    className="mt-4"
                   />
                </div>
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
