import React from 'react';

import { useTranslation } from 'react-i18next';
import { IoIosArrowForward } from 'react-icons/io';

const VolunteerSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="VolunteerSection"
      className="w-full px-14 py-10 flex items-center justify-center sm:py-20 sm:px-20 bg-white"
    >
      <div className="w-full flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-20 xl:gap-32">
        <div className="w-full h-auto px-6 md:px-0 md:w-1/2 lg:w-1/2 flex flex-col justify-center md:items-start gap-6 lg:py-10">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-3xl font-['Freeman'] sm:font-['Montserrat'] sm:font-semibold">
              {t('screens.volunteer.title')}
            </h2>
            <IoIosArrowForward className="flex sm:hidden cursor-pointer text-2xl text-[var(--color-sunset-red)]" />
          </div>
          {t('screens.volunteer.description')
            .split('\n')
            .map((paragraph, index) => (
              <p
                key={index}
                className="[font-family:var(--font-sans)] text-sm sm:text-lg max-w-[462px] text-[#363732]"
              >
                {paragraph}
              </p>
            ))}
          <button className="hidden sm:inline-block w-fit py-4 px-[30px] border rounded-[9px] [font-family:var(--font-sans) ] font-semibold md:text-2xl cursor-pointer">
            {t('common.buttons.readMore')}
          </button>
        </div>
        <div className="w-full md:w-1/2 md:h-full flex items-center justify-center">
          <img
            src="../../../public/assets/placeholder-images/IMG_6437.webp"
            alt={t('screens.volunteer.title')}
            className="w-full aspect-[1/1] h-auto md:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
