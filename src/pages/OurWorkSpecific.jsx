import ErrorBoundary from '../components/ErrorBoundary';

function CategorySpecific() {
  return (
    <ErrorBoundary>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <h1 className="text-2xl font-extrabold">
          Our Work Category specific page
        </h1>
        <p>
          The specific content for the OurWork category sections will appear
          here
        </p>
      </div>
    </ErrorBoundary>
  );
}

export default CategorySpecific;
