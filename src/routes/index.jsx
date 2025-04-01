import { useEffect, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import ErrorBoundary from '../components/ErrorBoundary.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import MainLayout from '../components/MainLayout.jsx';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import News from '../pages/News';
import NewsPost from '../pages/NewsPost';
import NotFound from '../pages/NotFound';
import OurWork from '../pages/OurWork';
import CategorySpecific from '../pages/OurWorkSpecific.jsx';
import Placeholder from '../pages/PlaceHolder';
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
            <Route path="/news" element={<News />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/work-specific" element={<CategorySpecific />} />
            <Route path="/test-translations" element={<TestTranslations />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/placeholder" element={<Placeholder />} />
            <Route path="/news-post" element={<NewsPost />} />
          </Route>
        </Routes>
      )}
    </ErrorBoundary>
  );
};

export default AppRoutes;
