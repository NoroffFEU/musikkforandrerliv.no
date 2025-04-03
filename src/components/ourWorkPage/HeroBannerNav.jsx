import { useEffect, useState } from 'react';

export default function HeroBannerNav() {
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

  // function to scroll to a section based on index
  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY; // absolute position for section
      const windowHeight = window.innerHeight;
      const offset = windowHeight * 0.25; // 20% height offset
      const scrollPosition = sectionPosition - offset; // adjusting position to offset

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth', // smooth scrolling
      });
    }
  };
  return (
    <nav
      className={`workNavWrapper text-white flex flex-row flex-wrap gap-[10px] xl:gap-[30px] ${bottomPosition} items-center justify-center my-6`}
      aria-label="Work navigation"
    >
      <div
        className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px] cursor-pointer"
        aria-label="Healthcare"
        onClick={() => scrollToSection(0)} //index 0
      >
        <img
          className="w-[41px] h-[37px] xl:w-[71px] sm:h-[64px]"
          src="/assets/images/svgs/ourWorkPage/healthcare.svg"
          alt="Healthcare button icon"
        />
        <p className="text-[12px] font-semibold xl:text-base">Healthcare</p>
      </div>
      <div
        className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px] cursor-pointer"
        aria-label="Education"
        onClick={() => scrollToSection(1)} //index 1
      >
        <img
          className="w-[48px] xl:w-[82px]"
          src="/assets/images/svgs/ourWorkPage/graduation.svg"
          alt="Graduation button icon"
        />
        <p className="text-[12px] font-semibold xl:text-base">Education</p>
      </div>
      <div
        className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px] cursor-pointer"
        aria-label="Living Situation"
        onClick={() => scrollToSection(2)} //index 2
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
        className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px] cursor-pointer"
        aria-label="Food Distribution"
        onClick={() => scrollToSection(3)} //index 3
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
        className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px] cursor-pointer"
        aria-label="Music Lesson"
        onClick={() => scrollToSection(4)} //index 4
      >
        <img
          className="w-[37px] xl:w-[65px]"
          src="/assets/images/svgs/ourWorkPage/music.svg"
          alt="Music Lessons button icon"
        />
        <p className="text-[12px] font-semibold xl:text-base">Music Lesson</p>
      </div>
      <div
        className="workNavButton flex flex-col items-center justify-between xl:justify-center xl:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px] cursor-pointer"
        aria-label="Future Goals"
        onClick={() => scrollToSection(5)} //index 5
      >
        <img
          className="w-[49px] xl:w-[81px]"
          src="/assets/images/svgs/ourWorkPage/goals.svg"
          alt="Future goals button icon"
        />
        <p className="text-[12px] font-semibold xl:text-base">Future Goals</p>
      </div>
      <div
        className="workNavButton flex flex-col items-center justify-between xl:justify-center lg:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] xl:w-[150px] xl:h-[150px] cursor-pointer"
        aria-label="Activities"
        onClick={() => scrollToSection(6)} //index 6
      >
        <img
          className="w-[38px] xl:w-[65px]"
          src="/assets/images/svgs/ourWorkPage/activities.svg"
          alt="Activities button icon"
        />
        <p className="text-[12px] font-semibold xl:text-base">Activities</p>
      </div>
    </nav>
  );
}
