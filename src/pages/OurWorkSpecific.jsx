import ErrorBoundary from '../components/ErrorBoundary';

function CategorySpecific() {
  return (
    <ErrorBoundary>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <h1 className="text-2xl font-extrabold">
          Our Work Category specific page
        </h1>
        <p>
          When clicking the 'read more' button, the specific content for the
          category sections will appear here{' '}
        </p>
      </div>
    </ErrorBoundary>
  );
}

export default CategorySpecific;
