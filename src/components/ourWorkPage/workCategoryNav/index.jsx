export default function OurWorkNav() {
  return (
    <nav className="workNavWrapper flex flex-row flex-wrap gap-7">
      <div className="workNavButton flex flex-col bg-[#5b8e7d] p-4 rounded-lg">
        <img
          src="/assets/images/svgs/ourWorkPage/healthcare.svg"
          alt="Healthcare button icon"
        />
        <p> Healthcare</p>
      </div>
      <div className="workNavButton flex flex-col bg-[#5b8e7d] p-4 rounded-lg">
        <img
          src="/assets/images/svgs/ourWorkPage/graduation.svg"
          alt="Graduation button icon"
        />
        <p> Education</p>
      </div>
      <div className="workNavButton flex flex-col bg-[#5b8e7d] p-4 rounded-lg">
        <img
          src="/assets/images/svgs/ourWorkPage/livingSituation.svg"
          alt="Living situation button icon"
        />
        <p>Living Situation</p>
      </div>
      <div className="workNavButton flex flex-col bg-[#5b8e7d] p-4 rounded-lg">
        <img
          src="/assets/images/svgs/ourWorkPage/food.svg"
          alt="Food distribution button icon"
        />
        <p>Food Distribution</p>
      </div>
      <div className="workNavButton flex flex-col bg-[#5b8e7d] p-4 rounded-lg">
        <img
          src="/assets/images/svgs/ourWorkPage/music.svg"
          alt="Music Lessons button icon"
        />
        <p>Music Lesson</p>
      </div>
      <div className="workNavButton flex flex-col bg-[#5b8e7d] p-4 rounded-lg">
        <img
          src="/assets/images/svgs/ourWorkPage/goals.svg"
          alt="Future goals button icon"
        />
        <p>Future Goals</p>
      </div>
      <div className="workNavButton flex flex-col bg-[#5b8e7d] p-4 rounded-lg">
        <img
          src="/assets/images/svgs/ourWorkPage/activities.svg"
          alt="Activities button icon"
        />
        <p>Activities</p>
      </div>
    </nav>
  );
}
