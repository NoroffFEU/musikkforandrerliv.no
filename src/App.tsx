import React, { Suspense } from 'react';
import AppRoutes from './routes';

/**
 * Main application component.
 * Wraps routes with Suspense for lazy loading and improved performance.
 */
const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="flex h-screen w-full items-center justify-center">Loading...</div>}>
      <AppRoutes />
    </Suspense>
  );
};

export default App;