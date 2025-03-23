import React from 'react';

import { IoIosArrowForward } from 'react-icons/io';

import data from '../../data/landing-page-content.json';

export default function WorkSection() {
  const { image, title, content } = data.work;
  return (
    <section
      id="WorkSection"
      className="w-full px-8 [background-color:var(--color-mint-green)] flex items-center justify-center "
    >
      <div className="max-w-6xl w-full py-24 md:py-16 max-md:py-10 mx-auto lg:flex-row flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20">
        <div className="w-full md:w-1/2 md:h-full flex items-center justify-center">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full aspect-[3/3] h-auto md:h-full object-cover"
          />
        </div>

        <div className="w-full h-auto md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center md:items-start gap-6 lg:py-10">
          <div className="w-full flex items-start justify-between">
            <h2 className="text-3xl font-bold mb-6 [font-family:var(--font-sans)]">
              {title}
            </h2>
            <IoIosArrowForward className="flex md:hidden font-bold cursor-pointer" />
          </div>

          <p className="mb-6 max-w-md [font-family:var(--font-sans)]">
            {content}
          </p>
          <button className="hidden md:flex w-[215px] h-[57px] py-[20px] px-[30px] border rounded-[9px] items-center justify-center [font-family:var(--font-sans) ] font-bold cursor-pointer">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}
