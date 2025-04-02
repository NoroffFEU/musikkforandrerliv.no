import React from 'react';

import { Link } from 'react-router-dom';

function NewsPost() {
  return (
    <div className="w-full max-w-[1000px] mx-auto mt-[100px] pb-[60px] px-4 font-montserrat">
      {/* Breadcrumb Navigation */}
      <nav className="mb-[21px]">
        <Link to="/news" className="text-blue-600 hover:underline">
          Back to News
        </Link>
      </nav>

      {/* News Post Header */}
      <section className="w-full h-auto flex justify-between items-center">
        <div className="font-semibold text-[18px] leading-[150%] tracking-[0]">
          NEWS POST
        </div>
        <div className="font-normal text-[18px] leading-[150%] tracking-[0]">
          July 15, 2023
        </div>
      </section>

      {/* Main Title */}
      <section className="w-full h-auto flex items-center mt-[20px]">
        <h1
          className="font-semibold text-[56px] leading-[150%] tracking-[0] 
                      max-md:font-freeman max-md:font-normal max-md:text-[30px] max-md:leading-[100%]"
        >
          MMF Culture and Arts Festival
        </h1>
      </section>

      {/* Author */}
      <section className="mt-[21px] max-md:mt-[75px] max-md:text-center">
        <p
          className="font-normal text-[18px] leading-[150%] tracking-[0] 
                      max-md:text-[14px] max-md:leading-[130%]"
        >
          written by Chat GPT
        </p>
      </section>

      {/* Content */}
      <section className="flex flex-col space-y-[21px]">
        {/* Subheading 1 */}
        <h2
          className="font-semibold text-[32px] leading-[150%] tracking-[0]
               max-md:font-freeman max-md:font-medium max-md:text-[20px] max-md:leading-[150%] max-md:mt-[49.73px]"
        >
          Celebrating the Heartbeat of Madagascar
        </h2>
        <p
          className="font-normal text-[18px] leading-[150%] tracking-[0]
                      max-md:text-[14px] max-md:leading-[130%]"
        >
          July 15, 2023, marked a day of vibrant celebration, unity, and the
          transformative power of music and art at the MMF Culture and Arts
          Festival...
        </p>
        <div className="max-md:mx-[25px]">
          <img
            src="public/assets/placeholder-images/CF058C04-846A-47DA-9861-6F7A3EEB445E.webp"
            alt="Celebration"
            className="w-full h-[200px] object-cover mt-[32px] 
             max-md:h-[105px] max-md:px-[25px]"
          />
        </div>

        {/* Subheading 2 */}
<h2 className="font-semibold text-[32px] leading-[150%] tracking-[0]
               max-md:font-freeman max-md:font-medium max-md:text-[20px] max-md:leading-[150%] max-md:mt-[49.73px]">

          A Day to Remember
        </h2>
        <p
          className="font-normal text-[18px] leading-[150%] tracking-[0]
                      max-md:text-[14px] max-md:leading-[130%]"
        >
          From the early hours, the air buzzed with anticipation as visitors...
        </p>
        <div className="max-md:mx-[25px]">
          <img
            src="public/assets/placeholder-images/CF058C04-846A-47DA-9861-6F7A3EEB445E.webp"
            alt="Celebration"
            className="w-full h-[200px] object-cover mt-[32px] 
             max-md:h-[105px] max-md:px-[25px]"
          />
        </div>

        {/* Subheading 3 */}
<h2 className="font-semibold text-[32px] leading-[150%] tracking-[0]
               max-md:font-freeman max-md:font-medium max-md:text-[20px] max-md:leading-[150%] max-md:mt-[49.73px]">

          A Symphony of Sights and Sounds
        </h2>
        <p
          className="font-normal text-[18px] leading-[150%] tracking-[0]
                      max-md:text-[14px] max-md:leading-[130%]"
        >
          The festival grounds came alive with a plethora of activities...
        </p>
        <div className="max-md:mx-[25px]">
          <img
            src="public/assets/placeholder-images/CF058C04-846A-47DA-9861-6F7A3EEB445E.webp"
            alt="Celebration"
            className="w-full h-[200px] object-cover mt-[32px] 
             max-md:h-[105px] max-md:px-[25px]"
          />
        </div>

        {/* Subheading 4 */}
<h2 className="font-semibold text-[32px] leading-[150%] tracking-[0]
               max-md:font-freeman max-md:font-medium max-md:text-[20px] max-md:leading-[150%] max-md:mt-[49.73px]">

          Featuring local artists
        </h2>
        <p
          className="font-normal text-[18px] leading-[150%] tracking-[0]
                      max-md:text-[14px] max-md:leading-[130%]"
        >
          A highlight was the art exhibit, featuring works created by MMF
          students and local artists...
        </p>

        {/* Published */}
        <p className="font-normal text-[14px] text-gray-500 mt-[21px]">
          Published: July 15, 2023
        </p>
      </section>

      {/* Next Post  */}
<div className="w-full flex justify-end mt-[21px]">
  <button
    className="w-[131px] h-[32px] border border-black rounded-[9px] px-[30px] py-0 text-black 
               flex items-center justify-center font-montserrat font-semibold text-[14px] leading-[100%] tracking-[0] uppercase whitespace-nowrap"
  >
    NEXT POST
  </button>
</div>
    </div>
  );
}

export default NewsPost;
