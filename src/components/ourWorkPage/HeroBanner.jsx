import { useEffect, useState } from 'react';

export default function HeroBanner() {
  const [bottomPosition, setBottomPosition] = useState('bottom-40');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 370) {
        setBottomPosition('bottom-15');
      } else {
        setBottomPosition('bottom-40');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="relative flex flex-col items-center"
      aria-label="Hero banner section"
    >
      <img
        src="/assets/placeholder-images/hero.webp"
        alt="Hero banner image"
        className="w-full h-screen md:max-h-[1000px] object-cover lg:object-center object-[83%]"
      />
      <div className="flex flex-col absolute inset-0 items-center justify-end  mb-4  ">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium [font-family:var(--font-justAnotherHand)] text-white flex items-center justify-center uppercase tracking-wider mb-12"
          aria-label="Hero section showcasing our work"
        >
          Our Work
        </h1>

        <nav
          className={`workNavWrapper text-white flex flex-row flex-wrap gap-[10px] xl:gap-[30px] ${bottomPosition} items-center justify-center my-6`}
          aria-label="Work navigation"
        >
          <div
            className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px]"
            aria-label="Healthcare"
          >
            <img
              className="w-[41px] h-[37px] xl:w-[71px] sm:h-[64px]"
              src="/assets/images/svgs/ourWorkPage/healthcare.svg"
              alt="Healthcare button icon"
            />
            <p className="text-[12px] font-semibold xl:text-base">
              {' '}
              Healthcare
            </p>
          </div>
          <div
            className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px]"
            aria-label="Education"
          >
            <img
              className="w-[48px] xl:w-[82px]"
              src="/assets/images/svgs/ourWorkPage/graduation.svg"
              alt="Graduation button icon"
            />
            <p className="text-[12px] font-semibold xl:text-base"> Education</p>
          </div>
          <div
            className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px]"
            aria-label="Living Situation"
          >
            <img
              className="w-[35px] xl:w-[65px]"
              src="/assets/images/svgs/ourWorkPage/livingSituation.svg"
              alt="Living situation button icon"
            />
            <p className="text-[12px] font-semibold xl:text-base">
              Living Situation
            </p>
          </div>
          <div
            className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px]"
            aria-label="Food Distribution"
          >
            <img
              className="w-[32px] xl:w-[60px]"
              src="/assets/images/svgs/ourWorkPage/food.svg"
              alt="Food distribution button icon"
            />
            <p className="text-[12px] font-semibold xl:text-base">
              Food Distribution
            </p>
          </div>
          <div
            className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px]"
            aria-label="Music Lesson"
          >
            <img
              className="w-[37px] xl:w-[65px]"
              src="/assets/images/svgs/ourWorkPage/music.svg"
              alt="Music Lessons button icon"
            />
            <p className="text-[12px] font-semibold xl:text-base">
              Music Lesson
            </p>
          </div>
          <div
            className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px]"
            aria-label="Future Goals"
          >
            <img
              className="w-[49px] xl:w-[81px]"
              src="/assets/images/svgs/ourWorkPage/goals.svg"
              alt="Future goals button icon"
            />
            <p className="text-[12px] font-semibold xl:text-base">
              Future Goals
            </p>
          </div>
          <div
            className="workNavButton flex flex-col items-center justify-between xl:justify-center lg:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px]"
            aria-label="Activities"
          >
            <img
              className="w-[38px] xl:w-[65px]"
              src="/assets/images/svgs/ourWorkPage/activities.svg"
              alt="Activities button icon"
            />
            <p className="text-[12px] font-semibold xl:text-base">Activities</p>
          </div>
        </nav>
      </div>
    </section>
  );
}
