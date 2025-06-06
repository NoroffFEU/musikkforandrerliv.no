import React from 'react';

const GoverningLaw = () => {
  return (
    <section
      className="w-full max-w-[85%] mx-auto px-4 py-20 font-montserrat"
      aria-labelledby="governing-law-heading"
    >
      <h1
        id="governing-law-heading"
        className="font-semibold text-[32px] leading-[120%] text-[#363732]"
      >
        GOVERNING LAW
      </h1>
      <p
        className="mt-6 text-[18px] leading-[150%] font-normal"
        aria-label="Governing law details"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Lorem ipsum dolor sit amet.
      </p>
      <p
        className="mt-6 text-[18px] leading-[150%] font-normal"
        aria-label="Last updated date"
      >
        Updated: 06/01/2024
      </p>
    </section>
  );
};

export default GoverningLaw;
