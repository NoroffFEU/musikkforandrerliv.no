
import React from 'react';

const SupportersSection = ({ section }) => {
  if (!section || !section.supporters) return null;

  return (
    <div className="text-center py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-black">
        {section.title}
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {section.supporters.map((supporter, index) => {
          const textStyle = index % 2 === 0 
            ? "text-[#EF476F] italic font-semibold" 
            : "text-black";

          return (
            <p 
              key={supporter.id} 
              className={`text-lg ${textStyle} transition-colors duration-300 hover:text-opacity-80`}
            >
              {index % 2 === 0 ? `"${supporter.name}"` : supporter.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SupportersSection;