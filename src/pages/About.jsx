import AboutUsSection from '@/components/about/AboutUsSection.jsx';
import StaffSection from '@/components/about/StaffSection.jsx';
import SupportersSection from '@/components/about/SupportersSection.jsx';

import ErrorBoundary from '../components/ErrorBoundary.jsx';
import aboutUsData from '../data/about-us-page-content.json';

function About() {
  const supportersSection = aboutUsData.sections.find(
    (section) => section.id === 11,
  );

  return (
    <ErrorBoundary>
      <div className="w-full flex justify-center items-center flex-col ">
        <img
          className="w-full h-[350px] mt-[130px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[850px] md:mt-[130px] object-contain md:object-cover object-center max-h-[950px]"
          src="assets/images/compressed-images/IMG_7359.webp"
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <AboutUsSection />
        {supportersSection && <SupportersSection section={supportersSection} />}
        <StaffSection />
      </div>
    </ErrorBoundary>
  );
}

export default About;
