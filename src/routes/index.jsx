import { useEffect, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import ErrorBoundary from '../components/ErrorBoundary.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import MainLayout from '../components/MainLayout.jsx';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import News from '../pages/News';
import NewsPost from '../pages/NewsPost';
import NotFound from '../pages/NotFound';
import OurWork from '../pages/OurWork';
import CategorySpecific from '../pages/OurWorkSpecific.jsx';
import Placeholder from '../pages/PlaceHolder';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage.jsx';
import SupportPage from '../pages/SupportPage.jsx';
import TermsPage from '../pages/TermsPage.jsx';
import TestTranslations from '../pages/TestTranslations';
import AdminCMS from '../pages/AdminCMS.jsx';

const AppRoutes = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    if (isAdminRoute) return;
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, [location, isAdminRoute]);

  return (
    <ErrorBoundary>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Routes>

          <Route path="/admin/*" element={<AdminCMS />} />

          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/work-specific" element={<CategorySpecific />} />
            <Route path="/test-translations" element={<TestTranslations />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/placeholder" element={<Placeholder />} />
            <Route path="/news-post" element={<NewsPost />} />
            <Route path="/tos" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </ErrorBoundary>
  );
};

export default AppRoutes;
