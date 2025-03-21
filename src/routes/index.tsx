import React, { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Lazy load pages for performance optimization
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));
const TestTranslations = lazy(() => import('../pages/TestTranslations'));

/**
 * Application routes configuration.
 * Wraps all routes with the common Layout component.
 */
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test-translations" element={<TestTranslations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;