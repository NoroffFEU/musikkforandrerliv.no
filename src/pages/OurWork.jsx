import { Suspense } from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import BackToTopButton from '../components/buttons/BackToTop';
import CalenderSection from '../components/homePage/calenderSection';
import HeroBanner from '../components/ourWorkPage/HeroBanner.jsx';
import CategorySection from '../components/ourWorkPage/categorySection';

function OurWork() {
  return (
    <ErrorBoundary>
      <HeroBanner />
      <CategorySection />
      <Suspense fallback={<div>Loading...</div>}>
        <CalenderSection />
      </Suspense>
      <BackToTopButton />
    </ErrorBoundary>
  );
}

export default OurWork;
