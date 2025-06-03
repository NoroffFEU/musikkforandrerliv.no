import { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import BackToTopButton from '../components/buttons/BackToTop';
import FundingInfo from '../components/FundingInfo';
import SupportOptions from '../components/SupportPage/SupportOptions.jsx';
import ImpactOfContributions from '../components/ImpactOfContributions';

import FormModal from '../components/modal/FormModal.jsx';

function SupportPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="w-full flex justify-center items-center flex-col mt-60 mb-50 pb-0 min-h-[10vh]">
        <h1 className="text-[50px] sm:text-[100px] text-center font-justAnotherHand">
          Support
        </h1>
        <FundingInfo />
        <SupportOptions />
        <ImpactOfContributions />
      </div>
      <FormModal />
      <BackToTopButton />
    </ErrorBoundary>
  );
}

export default SupportPage;
