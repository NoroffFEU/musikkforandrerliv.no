import React from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import FundingInfo from '../components/FundingInfo';
import SupportOptions from "../components/SupportPage/SupportOptions.jsx";

function SupportPage() {
  return (
    <ErrorBoundary>
      <div className="w-full flex justify-center items-center flex-col mt-60 mb-200 ">
        <h1 className="text-[50px] sm:text-[100px]  text-center font-justAnotherHand">
          Support
        </h1>
        <FundingInfo />
        <SupportOptions />
      </div>
    </ErrorBoundary>
  );
}

export default SupportPage;
