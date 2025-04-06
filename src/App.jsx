import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { LightboxProvider } from './hooks/useLightbox';
import './index.css';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <LightboxProvider>
        <AppRoutes />
      </LightboxProvider>
    </Router>
  );
};

export default App;
