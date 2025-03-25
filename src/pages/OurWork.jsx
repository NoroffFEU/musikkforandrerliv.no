import ErrorBoundary from "../components/ErrorBoundary";

function OurWork() {
  return (
    <ErrorBoundary>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <h1 className="text-2xl font-extrabold">Our Work</h1>
        <p> Learn about our work exploring the impact of music on lives.</p>
      </div>
    </ErrorBoundary>
  );
}

export default OurWork;