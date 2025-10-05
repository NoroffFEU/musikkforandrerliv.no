import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

const StaffSection = () => {
  const [team, setTeam] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setTeam(t('screens.staff.members', { returnObjects: true }));
  }, [t]);

  return (
    <section
      className="pb-10 px-6 bg-white flex justify-center sm:pb-20"
      aria-labelledby="staff-heading"
    >
      <div className="w-full max-w-[960px] mx-auto">
        <h2
          id="staff-heading"
          className="mb-3 sm:mb-7 text-center text-gray-900 
            font-['Just_Another_Hand'] font-normal 
            text-[50px] sm:text-[110px] leading-[100%] 
            tracking-wide"
        >
          {t('screens.staff.title')}
        </h2>

        {/* Staff Cards */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-20">
          {team.map((member, index) => (
            <article
              key={index}
              className="bg-[#F8EED1] rounded-lg overflow-hidden flex flex-col sm:flex-row sm:max-w-full"
              role="group"
              aria-label={`Staff member: ${member.teacher}`}
              tabIndex={0}
            >
              {/* Image */}
              <div className="w-full h-[324px] sm:w-1/3 sm:h-auto flex-shrink-0 relative overflow-hidden">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.teacher}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 sm:w-2/3 flex flex-col justify-center gap-2">
                <p className="uppercase text-[14px] sm:text-[16px] leading-[130%]">
                  {member.occupation}
                </p>
                <h3
                  className="text-[20px] sm:text-[32px]
                    leading-[150%] font-['Freeman'] sm:font-['Montserrat'] font-semibold"
                >
                  {member.name}
                </h3>
                <p
                  className="text-[14px] sm:text-[18px]
                    font-['Montserrat'] font-normal leading-[130%] sm:leading-[150%]"
                >
                  {member.description}
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
