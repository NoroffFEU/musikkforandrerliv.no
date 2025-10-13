import React from 'react';

const SupportersSection = ({ section }) => {
  if (!section || !section.supporters) return null;

  return (
    <section className="text-center py-16 px-4 bg-white" aria-labelledby="supporters-heading">
      <h2 id="supporters-heading" className="text-3xl mb-8 text-black">{section.title}</h2>
      <div className="max-w-2xl mx-auto space-y-2">
        {section.supporters.map((supporter, index) => {
          // TODO: Consider adding URL property to supporters
          // If URLs are intended, modify this to create clickable links
          const textColor =
            supporter.name === 'Martin Fröst Foundation'
              ? 'text-[#D91E50]' // Darker pink with 4.53:1 contrast ratio
              : 'text-black';

          return (
            <p
              key={supporter.id}
              className={`text-lg ${textColor} transition-colors duration-300 hover:text-opacity-80`}
            >
              {index === 0 ? `"${supporter.name}"` : supporter.name}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default SupportersSection;
