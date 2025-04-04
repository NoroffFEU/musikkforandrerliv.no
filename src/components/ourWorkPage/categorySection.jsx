import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ReusableButton from '../../components/buttons/reusableButton';
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
    <section className="container mx-auto max-w-6xl px-8 md:px-4 py-8">
      <div className="space-y-16">
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={`section-${index}`} // unique id based on the index (section-0, section-1, etc)
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
                <div className="md:order-2 px-6 md:px-14 sm:mr-2">
                  <div
                    className="flex items-center gap-1.5 cursor-pointer group"
                    onClick={handleReadMoreClick}
                  >
                    <h2 className="text-2xl md:text-2xl font-bold sm:font-semibold text-left  group-hover:underline underline-offset-4">
                      {section.title}
                    </h2>
                    <button type="button" className="block md:hidden">
                      <img
                        src="/assets/placeholder-images/Arrow-forward-circle.png"
                        alt="Arrow to the right"
                        className="w-[24px] h-[24px] cursor-pointer group-hover:translate-x-1 transition-transform "
                      />
                    </button>
                  </div>
                  <p className="line-clamp-7 text-transparent bg-clip-text bg-gradient-to-t from-transparent to-black mt-4">
                    {section.content}
                  </p>
                  {/* ReusableButton with Read More action */}
                  <div className="hidden md:block">
                    <ReusableButton
                      text="Read More"
                      onClick={handleReadMoreClick}
                      className="mt-6 uppercase font-semibold"
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
                <div className="md:order-1 px-6 md:px-14 sm:mr-2">
                  <div
                    className="flex items-center gap-1.5 cursor-pointer group"
                    onClick={handleReadMoreClick}
                  >
                    <h2 className="text-2xl md:text-2xl font-bold sm:font-semibold text-left  group-hover:underline underline-offset-4">
                      {section.title}
                    </h2>

                    <button type="button" className="block md:hidden">
                      <img
                        src="/assets/placeholder-images/Arrow-forward-circle.png"
                        alt="Arrow to the right"
                        className="w-[24px] h-[24px] cursor-pointer group-hover:translate-x-1 transition-transform "
                      />
                    </button>
                  </div>
                  <p className="line-clamp-7 text-transparent bg-clip-text bg-gradient-to-t from-transparent to-black mt-4">
                    {section.content}
                  </p>
                  <div className="hidden md:block">
                    <ReusableButton
                      text="Read More"
                      onClick={handleReadMoreClick}
                      className="mt-6 uppercase font-semibold"
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
