import ErrorBoundary from '../components/ErrorBoundary.jsx';

function About() {
  return (
    <ErrorBoundary>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <h1 className="text-2xl font-extrabold">About Us</h1>
        <h2>Making a difference through music</h2>
      </div>
    </ErrorBoundary>
  );
}

export default About;
