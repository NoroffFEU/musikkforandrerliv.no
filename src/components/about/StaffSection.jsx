import React from 'react';

import { useTranslation } from 'react-i18next';

import staffContent from '../../data/about-us-page-content.json';

const StaffSection = () => {
  const { t, ready } = useTranslation();

  // Get staff from CMS
  const cmsEmployees = ready ? t('employees', { returnObjects: true }) : [];

  // Fallback to static data if CMS employees are not available
  const fallbackStaffItems = staffContent.sections.filter(
    (section) => section.name,
  );

  // Use CMS employees if available, otherwise fallback to static data
  const staffItems =
    Array.isArray(cmsEmployees) && cmsEmployees.length > 0
      ? cmsEmployees
      : fallbackStaffItems;

  return (
    <section id="StaffSection" className="w-full pt-28">
      <h2 className="font-justAnotherHand text-5xl md:text-8xl text-center bg-[#363732] text-white h-[190px] md:h-[296px] flex items-center justify-center dark:bg-[#363732] dark:text-white">
        {t('common.staff.title', 'Our Staff')}
      </h2>

      {staffItems.map((member, index) => {
        // Handle both CMS format (with nested employee object) and static format
        const memberData = member.employee || member;

        const isEven = index % 2 === 0;
        const outerBg = isEven ? 'bg-[#FFFFFF]' : 'bg-[#5B8E7D]';
        const innerBg = isEven ? 'bg-[#FBF7E8]' : 'bg-[#FFFFFF]';

        const mobileBg = index % 2 === 0 ? 'bg-white' : 'bg-[#B2CAC2]';

        return (
          <React.Fragment key={memberData.id || index}>
            {/* mobile layout */}
            <div
              tabIndex={0}
              className={`
                ${mobileBg}
                block lg:hidden
               w-full
                m-0
                p-6 sm:p-10
                rounded-none
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B8E7D]
  `}
            >
              <div className="grid grid-cols-2 md:grid-cols-2 items-center justify-items-center gap-4 mt-8">
                <div className="rounded-full w-32 h-32 sm:w-40 sm:h-40 overflow-hidden">
                  <img
                    src={
                      memberData.photo ||
                      memberData.image ||
                      '/assets/images/staff/placeholder.jpg'
                    }
                    loading="lazy"
                    decoding="async"
                    alt={
                      memberData.imageAlt
                        ? memberData.imageAlt
                        : `Portrait of ${memberData.name}`
                    }
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>

                <div className="text-center">
                  <p className="text-3xl mt-4 font-justAnotherHand">
                    {memberData.name}
                  </p>
                  {/* on mobile - only display first / main role*/}
                  {(memberData.roles?.[0] || memberData.role) && (
                    <p className="text-sm">
                      {memberData.roles?.[0] || memberData.role}
                    </p>
                  )}
                  <p className="text-sm">{memberData.email}</p>
                </div>
              </div>

              <div className="mt-6 mb-10 px-6 text-sm whitespace-pre-line text-center">
                {memberData.bio || memberData.content}
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
      grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 items-stretch
      h-full
    `}
              >
                {/* left section */}
                <div className="flex flex-col items-center text-center h-full">
                  <div className="rounded-full w-32 h-32 md:w-80 md:h-80 overflow-hidden md:-ml-28">
                    <img
                      src={
                        memberData.photo ||
                        memberData.image ||
                        '/assets/images/staff/placeholder.jpg'
                      }
                      alt={
                        memberData.imageAlt || `Portrait of ${memberData.name}`
                      }
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>

                  <div className="flex flex-col items-center mt-4 space-y-1 md:-ml-32">
                    <p className="hidden lg:flex md:text-3xl font-justAnotherHand">
                      {memberData.name}
                    </p>
                    {(memberData.roles || memberData.charity_role)?.map(
                      (role, i) => (
                        <p key={i} className="text-sm">
                          {role}
                        </p>
                      ),
                    )}
                    <p className="text-sm">{memberData.email}</p>
                  </div>
                </div>

                {/* right section */}
                <div className="flex flex-col justify-between text-center h-full">
                  <h3 className="text-3xl md:text-7xl font-justAnotherHand">
                    {memberData.name}
                  </h3>
                  <p className="mt-[1rem] text-sm md:text-lg whitespace-pre-line flex-grow">
                    {memberData.bio || memberData.content}
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
