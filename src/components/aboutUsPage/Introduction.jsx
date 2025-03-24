import React from 'react';

function Introduction() {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
            We are dedicated to transforming lives through music education and outreach 
            programs in underprivileged communities. Since our founding, we've provided 
            music education to thousands of children who would otherwise have no access 
            to artistic development.
          </p>
          <p className="text-lg mb-6">
            Our approach combines musical training with personal development, creating 
            opportunities for children to build confidence, develop discipline, and discover 
            their potential through the universal language of music.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
            Learn more
          </button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/path/to/children-image.jpg" 
            alt="Children participating in music program" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Introduction;