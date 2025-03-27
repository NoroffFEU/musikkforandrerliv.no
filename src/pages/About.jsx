import ErrorBoundary from '../components/ErrorBoundary.jsx';
import StaffSection from '../components/aboutUsPage/staffSection.jsx';

// let us introduce ourselves

// Props for about us

// Support and future ambitions (can be a about prop/component)

// Conclusion A model for change

// Header our staff

// Props for Our staff

function About() {
  return (
    <ErrorBoundary>
      <div className="w-full flex justify-center items-center flex-col mt-96">
        <h1 className="text-2xl font-extrabold">About Us</h1>
        <h2>Making a difference through music</h2>
        <StaffSection />
      </div>
    </ErrorBoundary>
  );
}

export default About;
