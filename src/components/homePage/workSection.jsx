import React from 'react';
import { Link } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io';

import data from '../../data/landing-page-content.json';


export default function WorkSection() {
  const { image, title, content } = data.work;
  return (
    <section
      id="WorkSection"
      className="w-full px-14 py-10 [background-color:var(--color-mint-green)] flex items-center justify-center sm:py-20 sm:px-20"
    >
      <div className="w-full flex flex-col items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-20 xl:gap-32">
        <div className="w-full md:w-1/2 md:h-full flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full aspect-[1/1] h-auto md:h-full object-cover"
          />
        </div>

        <div className="w-full h-auto px-6 md:px-0 md:w-1/2 lg:w-1/2 flex flex-col justify-center md:items-start gap-6 lg:py-10">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-3xl font-['Freeman'] sm:font-['Montserrat'] sm:font-semibold">
              {title}
            </h2>
            <IoIosArrowForward className="flex sm:hidden cursor-pointer text-2xl" />
          </div>

          <p className="[font-family:var(--font-sans)] text-sm sm:text-lg max-w-[462px] text-[#363732]">
            {content}
          </p>
          <Link to="/work" className="hidden sm:inline-block w-fit py-4 px-[30px] border rounded-[9px] [font-family:var(--font-sans) ] font-semibold md:text-2xl cursor-pointer">
          READ MORE
        </Link>
        </div>
      </div>
    </section>
  );
}
