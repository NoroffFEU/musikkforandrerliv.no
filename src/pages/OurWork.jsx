import { Suspense } from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import CalenderSection from '../components/homePage/calenderSection';
import HeroBanner from '../components/ourWorkPage/HeroBanner.jsx';

function OurWork() {
  return (
    <ErrorBoundary>
      <HeroBanner />
      <div className="flex justify-center items-center flex-col"></div>
      <Suspense fallback={<div>Loading...</div>}>
        <CalenderSection />
      </Suspense>
    </ErrorBoundary>
  );
}

export default OurWork;
