export default function HeroBanner() {
  return (
    <section
      className="relative flex flex-col items-center"
      aria-label="Hero banner section"
    >
      <h1
        className="text-7xl font-medium [font-family:var(--font-justAnotherHand)] text-white absolute inset-0 flex items-center justify-center uppercase tracking-wider mt-52"
        aria-label="Hero section showcasing our work"
      >
        Our Work
      </h1>

      <img
        src="/assets/placeholder-images/hero.webp"
        alt="Hero banner image"
        className="w-full h-screen md:max-h-[1000px] object-cover lg:object-center object-[83%]"
      />
      <nav
        className="workNavWrapper text-white flex flex-row flex-wrap gap-[10px] absolute bottom-10 items-center justify-center"
        aria-label="Work navigation"
      >
        <div
          className="workNavButton flex flex-col items-center justify-between lg:justify-center lg:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] lg:w-[150px] lg:h-[150px]"
          aria-label="Healthcare"
        >
          <img
            className="w-[41px] h-[37px] lg:w-[71px] md:h-[64px]"
            src="/assets/images/svgs/ourWorkPage/healthcare.svg"
            alt="Healthcare button icon"
          />
          <p className="text-[12px] font-semibold lg:text-base"> Healthcare</p>
        </div>
        <div
          className="workNavButton flex flex-col items-center justify-between lg:justify-center lg:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] lg:w-[150px] lg:h-[150px]"
          aria-label="Education"
        >
          <img
            className="w-[48px] lg:w-[82px]"
            src="/assets/images/svgs/ourWorkPage/graduation.svg"
            alt="Graduation button icon"
          />
          <p className="text-[12px] font-semibold lg:text-base"> Education</p>
        </div>
        <div
          className="workNavButton flex flex-col items-center justify-between lg:justify-center lg:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] lg:w-[150px] lg:h-[150px]"
          aria-label="Living Situation"
        >
          <img
            className="w-[35px] lg:w-[65px]"
            src="/assets/images/svgs/ourWorkPage/livingSituation.svg"
            alt="Living situation button icon"
          />
          <p className="text-[12px] font-semibold lg:text-base">
            Living Situation
          </p>
        </div>
        <div
          className="workNavButton flex flex-col items-center justify-between lg:justify-center lg:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] lg:w-[150px] lg:h-[150px]"
          aria-label="Food Distribution"
        >
          <img
            className="w-[32px] lg:w-[60px]"
            src="/assets/images/svgs/ourWorkPage/food.svg"
            alt="Food distribution button icon"
          />
          <p className="text-[12px] font-semibold lg:text-base">
            Food Distribution
          </p>
        </div>
        <div
          className="workNavButton flex flex-col items-center justify-between lg:justify-center lg:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] lg:w-[150px] lg:h-[150px]"
          aria-label="Music Lesson"
        >
          <img
            className="w-[37px] lg:w-[65px]"
            src="/assets/images/svgs/ourWorkPage/music.svg"
            alt="Music Lessons button icon"
          />
          <p className="text-[12px] font-semibold lg:text-base">Music Lesson</p>
        </div>
        <div
          className="workNavButton flex flex-col items-center justify-between lg:justify-center lg:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] lg:w-[150px] lg:h-[150px]"
          aria-label="Future Goals"
        >
          <img
            className="w-[49px] lg:w-[81px]"
            src="/assets/images/svgs/ourWorkPage/goals.svg"
            alt="Future goals button icon"
          />
          <p className="text-[12px] font-semibold lg:text-base">Future Goals</p>
        </div>
        <div
          className="workNavButton flex flex-col items-center justify-between lg:justify-center lg:gap-[10%] p-2 text-center bg-[#5b8e7d] rounded-lg w-[85px] h-[85px] lg:w-[150px] lg:h-[150px]"
          aria-label="Activities"
        >
          <img
            className="w-[38px] lg:w-[65px]"
            src="/assets/images/svgs/ourWorkPage/activities.svg"
            alt="Activities button icon"
          />
          <p className="text-[12px] font-semibold lg:text-base">Activities</p>
        </div>
      </nav>
    </section>
  );
}
