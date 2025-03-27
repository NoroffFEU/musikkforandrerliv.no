import React from 'react';

import aboutUsPageContent from '../../data/about-us-page-content.json';

const StaffSection = () => {
  const staffItems = aboutUsPageContent.sections.filter(
    (section) => section.name,
  );

  return (
    <section id="StaffSection" className="w-full pt-28">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center bg-[#37616f] text-white h-20 sm:h-24 md:h-[126px] flex items-center justify-center dark:bg-[#37616f] dark:text-white">
        Our Staff
      </h2>

      {staffItems.map((member, index) => {
        // alternate between layout style 1 and 2 by detecting even/odd index:
        const isEven = index % 2 === 0;
        const outerBg = isEven ? 'bg-white' : 'bg-[#78C6AAB2]';
        const innerBg = isEven ? 'bg-[#78C6AAB2]' : 'bg-white';

        return (
          <div
            key={member.id}
            // outer container
            className={`${outerBg} p-6 sm:p-10 md:p-28 flex justify-center`}
          >
            <div
              // inner container
              className={`${innerBg} p-6 sm:p-10 md:p-[3.75rem] mx-1 max-w-[75rem] rounded-lg sm:rounded-tl-[150px] md:rounded-tl-[200px] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4`}
            >
              {/* left section */}
              <div className="flex flex-col text-center items-center">
                <div className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 overflow-hidden">
                  <img
                    src={member.image || '/assets/images/staff/placeholder.jpg'}
                    alt={
                      member.imageAlt
                        ? member.imageAlt
                        : `Portrait of ${member.name}`
                    }
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl mt-4 font-semibold">
                  {member.name}
                </p>
                {member.roles?.map((role, i) => (
                  <p key={i} className="text-base sm:text-lg">
                    {role}
                  </p>
                ))}
                <p className="text-base sm:text-lg underline">{member.email}</p>
              </div>

              {/* right section */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
                  {member.name}
                </h3>
                <p className="mt-[1rem] text-lg whitespace-pre-line">
                  {member.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StaffSection;
