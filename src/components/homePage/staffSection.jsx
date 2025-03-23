import { useEffect, useState } from "react";
import landingPageContent from "../../data/landing-page-content.json";

const StaffSection = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTeam(landingPageContent.staff.team);
  }, []);

  return (
    <section
      className="py-16 bg-white flex justify-center"
      aria-labelledby="staff-heading"
    >
      <div className="w-full max-w-[960px] mx-auto">
        {/* Header */}
        <h2
          id="staff-heading"
          className="text-center text-gray-900 
            font-['Just_Another_Hand'] font-normal 
            text-[50px] sm:text-[110px] leading-[100%] 
            tracking-wide mt-8"
        >
          {landingPageContent.staff.title}
        </h2>

        {/* Staff Cards */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16 px-4 sm:px-0">
          {team.map((member, index) => (
            <article
              key={index}
              className="bg-[#F8EED1] rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row w-full max-w-[380px] sm:max-w-full mx-auto"
              role="group"
              aria-label={`Staff member: ${member.teacher}`}
              tabIndex={0}
            >
              {/* Image */}
              <div className="w-full sm:w-[340px] max-w-[380px] h-[380px] sm:h-[340px] flex-shrink-0 relative overflow-hidden">
              <img
                src={member.image}
                alt={`Portrait of ${member.teacher}`}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

              {/* Text Content */}
              <div className="p-6 sm:w-2/3 flex flex-col justify-center gap-2">
                <p className="uppercase text-gray-600 text-[14px] sm:text-[16px] leading-[130%]">
                  {member.role}
                </p>
                <h3
                  className="text-gray-900 text-[20px] sm:text-[32px]
                    leading-[150%] font-['Montserrat'] font-semibold"
                >
                  {member.teacher}
                </h3>
                <p
                  className="text-gray-700 text-[14px] sm:text-[18px]
                    font-['Montserrat'] font-normal leading-[130%] sm:leading-[150%]"
                >
                  {member.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
