import ErrorBoundary from '../components/ErrorBoundary.jsx';
import SupportersSection from '../components/aboutUsPage/SupportersSection.jsx';
import AboutUsSection from '../components/aboutUsPage/aboutUsSection.jsx';
import StaffSection from '../components/aboutUsPage/staffSection.jsx';
import aboutUsData from '../data/about-us-page-content.json';

// let us introduce ourselves

// Props for about us

// Support and future ambitions (can be a about prop/component)

// Conclusion A model for change

// Header our staff

// Props for Our staff

function About() {
  const supportersSection = aboutUsData.sections.find(
    (section) => section.id === 11,
  );

  return (
    <ErrorBoundary>
      <div className="w-full flex justify-center items-center flex-col ">
        <img
          className="w-full h-[300px] mt-[130px] md:w-full md:h-[601px] md:mt-[130px] object-cover"
          src="/assets/compressed-images/IMG_7359.webp"
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* <h1 className="text-2xl font-extrabold">About Us</h1>
        <h2>Making a difference through music</h2> */}
        <AboutUsSection />
        {supportersSection && <SupportersSection section={supportersSection} />}
        <StaffSection />
      </div>
    </ErrorBoundary>
  );
}

export default About;
