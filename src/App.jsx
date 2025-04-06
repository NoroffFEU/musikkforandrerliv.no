import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import { LightboxProvider } from './providers/LightboxProvider';
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
