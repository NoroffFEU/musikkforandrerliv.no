import ErrorBoundary from '../components/ErrorBoundary.jsx';

function PlaceHolder() {
  return (
    <ErrorBoundary>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <h1 className="text-2xl font-extrabold">Coming Soon</h1>
        <h2>This page is under construction. We're preparing something great — stay tuned!</h2>
      </div>
    </ErrorBoundary>
  );
}

export default PlaceHolder;