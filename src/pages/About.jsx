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
          className="w-full h-[300px] mt-[130px] md:w-full md:h-[601px] md:mt-[13push0px] object-cover"
          src="assets/placeholder-images/IMG_7359.webp"
          alt="Students at Mozika Manova Fiainana music school"
        />
        <AboutUsSection />
        {supportersSection && <SupportersSection section={supportersSection} />}
        <StaffSection />
      </div>
    </ErrorBoundary>
  );
}

export default About;
