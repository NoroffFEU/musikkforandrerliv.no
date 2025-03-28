import { Suspense } from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import CalenderSection from '../components/homePage/calenderSection';
import CategorySection from '../components/ourWorkPage/categorySection';

function OurWork() {
  return (
    <ErrorBoundary>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <h1 className="text-2xl font-extrabold">Our Work</h1>
        <p>Learn about our work exploring the impact of music on lives.</p>
      </div>
      <div>
        <CategorySection />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CalenderSection />
      </Suspense>
    </ErrorBoundary>
  );
}

export default OurWork;
