import React from 'react';

/**
 * LoadingSpinner is a React component that displays a loading spinner.
 * It is typically used to indicate that content is being loaded or processed.
 * 
 * @returns {React.Element} The rendered loading spinner component.
 */
const LoadingSpinner = () => { 

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 8px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 8px solid #ffffff;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
