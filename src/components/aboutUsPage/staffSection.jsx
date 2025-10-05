import React from 'react';

import aboutUsPageContent from '../../data/about-us-page-content.json';

const StaffSection = () => {
  const staffItems = aboutUsPageContent.sections.filter(
    (section) => section.name,
  );

  return (
    <section id="StaffSection" className="w-full pt-28">
      <h2 className="font-justAnotherHand text-5xl md:text-8xl text-center bg-[#363732] text-white h-[190px] md:h-[296px] flex items-center justify-center dark:bg-[#363732] dark:text-white">
        Our Staff
      </h2>

      {staffItems.map((member, index) => {
        const isEven = index % 2 === 0;
        const outerBg = isEven ? 'bg-[#FFFFFF]' : 'bg-[#5B8E7D]';
        const innerBg = isEven ? 'bg-[#FBF7E8]' : 'bg-[#FFFFFF]';

        const mobileBg = index % 2 === 0 ? 'bg-white' : 'bg-[#B2CAC2]';

        return (
          <React.Fragment key={member.id}>
            {/* mobile layout */}
            <div
              className={`
                ${mobileBg}
                block lg:hidden
                w-full
                m-0
                p-6 sm:p-10
                rounded-none
              `}
            >
              <div className="grid grid-cols-2 items-center justify-items-center gap-4 mt-8">
                <div className="rounded-full w-32 h-32 sm:w-40 sm:h-40 overflow-hidden">
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

                <div className="text-center">
                  <p className="text-3xl mt-4 font-justAnotherHand">
                    {member.name}
                  </p>
                  {/* on mobile - only display first / main role*/}
                  {member.roles?.[0] && (
                    <p className="text-sm">{member.roles[0]}</p>
                  )}
                  <p className="text-sm">{member.email}</p>
                </div>
              </div>

              <div className="mt-6 mb-10 px-6 text-sm whitespace-pre-line text-center">
                {member.content}
              </div>
            </div>

            {/* desktop layout */}
            <div
              className={`
                ${outerBg}
                p-6 sm:p-10 md:p-28
                hidden lg:flex
                justify-center
              `}
            >
              <div
                className={`
                  ${innerBg}
                  p-6 sm:p-10 md:p-[3.75rem]
                  mx-1 max-w-[75rem]
                  sm:rounded-tl-[150px] md:rounded-tl-[200px]
                  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 items-center
                `}
              >
                {/* left section */}
                <div className="flex flex-col text-center items-center">
                  <div className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 overflow-hidden">
                    <img
                      src={
                        member.image || '/assets/images/staff/placeholder.jpg'
                      }
                      alt={
                        member.imageAlt
                          ? member.imageAlt
                          : `Portrait of ${member.name}`
                      }
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <p className="hidden lg:flex md:text-3xl mt-4 font-justAnotherHand">
                    {member.name}
                  </p>
                  {/* show all roles on desktop view*/}
                  {member.roles?.map((role, i) => (
                    <p key={i} className="text-sm">
                      {role}
                    </p>
                  ))}
                  <p className="text-sm">{member.email}</p>
                </div>

                {/*right section */}
                <div className="text-center">
                  <h3 className="text-3xl md:text-7xl font-justAnotherHand">
                    {member.name}
                  </h3>
                  <p className="mt-[1rem] text-sm md:text-lg whitespace-pre-line">
                    {member.content}
                  </p>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default StaffSection;
