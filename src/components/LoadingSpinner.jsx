import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-8 border-t-8 border-gray-200 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
