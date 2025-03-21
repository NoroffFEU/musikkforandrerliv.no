import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/homePage/LoadingSpinner";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import TestTranslations from "../pages/TestTranslations";

const AppRoutes = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Listen for route changes
    const unlisten = history.listen(() => {
      handleStart();
      handleComplete();
    });

    return () => {
      unlisten();
    };
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/test-translations" element={<TestTranslations />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;
