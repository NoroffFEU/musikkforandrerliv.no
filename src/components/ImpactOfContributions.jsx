import React from 'react';

import { TiHeartOutline } from 'react-icons/ti';

const ImpactOfContributions = () => {
  return (
    <div className="w-full flex justify-center items-center py-20 bg-[var(--color-mint-green)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[110px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-[110px] gap-y-7 items-start">
          <p className="font-normal leading-[1.5] tracking-[0.02em] text-base max-w-[440px]">
            The funds that come in go towards covering everything from food,
            clothing, education, equipment, healthcare, medicines, and dental
            care for the children, as well as the operation of the music school
            and salaries for our staff. The families of the children are also
            included in the food program and receive monthly distributions of
            food and hygiene products. We are constantly working to improve the
            living conditions of the children, and we use much of the surplus we
            have to repair houses and homes.
          </p>

          <div className="flex flex-col items-center justify-start text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.5] tracking-[0.02em] mb-4 font-justAnotherHand">
              Thank you for your support!
            </h1>
            <TiHeartOutline className="text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactOfContributions;
