import ErrorBoundary from '../components/ErrorBoundary.jsx';
import AboutUsSection from '../components/about/aboutUsSection.jsx';
import SupportersSection from '../components/about/SupportersSection.jsx';
import StaffSection from '../components/about/StaffSection.jsx';
import aboutUsData from '../data/about-us-page-content.json';

function About() {
  const supportersSection = aboutUsData.sections.find((section) => section.id === 11);

  return (
    <ErrorBoundary>
      <main id="main" role="main" className="w-full flex flex-col items-center">
        <h1 className="sr-only">About Us</h1>

        <img
          className="w-full h-[300px] mt-[130px] md:h-[601px] md:mt-[130px] object-cover"
          src="/assets/placeholder-images/IMG_7359.webp"
          alt="Children participating in a music activity"
        />

        <section aria-labelledby="about-intro" className="w-full">
          <h2 id="about-intro" className="sr-only">Introduction</h2>
          <AboutUsSection />
        </section>

        {supportersSection && (
          <section aria-labelledby="about-supporters" className="w-full">
            <h2 id="about-supporters" className="sr-only">Supporters</h2>
            <SupportersSection section={supportersSection} />
          </section>
        )}

        <section aria-labelledby="about-staff" className="w-full">
          <h2 id="about-staff" className="sr-only">Our Staff</h2>
          <StaffSection />
        </section>
      </main>
    </ErrorBoundary>
  );
}

export default About;