import ErrorBoundary from '../components/ErrorBoundary.jsx';
import StaffSection from '../components/aboutUsPage/staffSection.jsx';
import AboutUsSection from '../components/aboutUsPage/aboutsUsSection.jsx';
import SupportersSection from '../components/aboutUsPage/SupportersSection.jsx';
import aboutUsData from '../data/about-us-page-content.json';

// let us introduce ourselves

// Props for about us

// Support and future ambitions (can be a about prop/component)

// Conclusion A model for change

// Header our staff

// Props for Our staff

function About() {
  // Find the supporters section from the data
  const supportersSection = aboutUsData.sections.find(section => section.id === 11);

  return (
    <ErrorBoundary>
      <div className="w-full flex justify-center items-center flex-col mt-96">
        <h1 className="text-2xl font-extrabold">About Us</h1>
        <h2>Making a difference through music</h2>
        <AboutUsSection />
        <StaffSection />
        {supportersSection && (
          <SupportersSection section={supportersSection} />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default About;
