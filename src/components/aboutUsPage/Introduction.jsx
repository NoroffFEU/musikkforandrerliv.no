import React from 'react';

function Introduction({ 
  paragraphs = [], 
  buttonText = "Learn more", 
  imageSrc = "/path/to/default-image.jpg", 
  imageAlt = "Children participating in music program" 
}) {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={`text-lg ${index < paragraphs.length - 1 ? 'mb-4' : 'mb-6'}`}>
              {paragraph}
            </p>
          ))}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
            {buttonText}
          </button>
        </div>
        <div className="md:w-1/2">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Introduction;