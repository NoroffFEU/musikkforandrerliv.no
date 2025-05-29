import React from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import ImpactOfContributions from '../components/ImpactOfContributions';

function SupportPage() {
  return (
    <ErrorBoundary>
      <div className="w-full flex justify-center items-center flex-col mt-60 mb-200 ">
        <h1 className="text-4xl  text-center font-[var(--font-justAnotherHand)]">
          Support
        </h1>
        <ImpactOfContributions />
      </div>
    </ErrorBoundary>
  );
}

export default SupportPage;
