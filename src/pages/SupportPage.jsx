import ErrorBoundary from "../components/ErrorBoundary";
import React from 'react';
import SupportOptions from "../components/SupportPage/SupportOptions.jsx";

function SupportPage() {


  return (
    <ErrorBoundary>
      <div className="w-full flex justify-center items-center flex-col mt-60 mb-200 ">
        <h1 className="text-4xl  text-center font-[var(--font-justAnotherHand)]">Support</h1>

      </div>
      <SupportOptions />
    </ErrorBoundary>
  );
}

export default SupportPage;
