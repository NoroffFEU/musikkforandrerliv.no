import React from 'react';

import './FundingInfo.css';

const FundingInfo = () => {
  return (
    <section
      className="w-full bg-[#B2CAC2] py-4 support-padding-tweak sm:py-10 px-4 mt-4 mb-4"
      aria-labelledby="funding-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 xl:gap-30">
        {/* Image */}
        <img
          src="/assets/placeholder-images/children-eating.webp"
          alt="Children eating a meal together"
          className="w-full              
    max-w-[450px]        
    h-[220px]             
    sm:h-[300px]                      
    lg:h-[500px]    
    object-cover
    "
        />

        {/* Text Content */}
        <div className="max-w-md text-left">
          <h2
            id="funding-heading"
            className="text-[20px] sm:text-[24px] md:text-[32px] font-semibold font-[Montserrat] mb-4"
          >
            Where do we get our funding from?
          </h2>

          <p className="font-[Montserrat] text-[16px] sm:text-[18px] leading-relaxed">
            MMF is a small grassroots organization that mainly receives support
            from private donors in Norway. Regular donors (MMF sponsors) provide
            us with financial security and predictability. Additionally, we are
            fortunate to have many enthusiastic individuals who fundraise on
            occasions such as birthdays and events. Apart from private donors,
            our most important supporter is Musikk Gir Liv (musicians from the
            Kristiansand Symphony Orchestra), who provide funding for the
            operation of the music school and instruments. Furthermore, Musikk
            Gir Liv has, in the last couple of years, visited Antsirabe with a
            group of musicians from the symphony orchestra who have taught the
            children at MMF and participated in concerts alongside the students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FundingInfo;
