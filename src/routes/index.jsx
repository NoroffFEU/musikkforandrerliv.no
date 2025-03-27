import { useEffect, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import ErrorBoundary from '../components/ErrorBoundary.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import MainLayout from '../components/MainLayout.jsx';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import TestTranslations from '../pages/TestTranslations';

const AppRoutes = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <ErrorBoundary>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/test-translations" element={<TestTranslations />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </ErrorBoundary>
  );
};

export default AppRoutes;
