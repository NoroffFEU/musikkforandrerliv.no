// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n"; // Make sure to set up i18n for translations
import heart from "/assets/images/svgs/heart.svg";
import SelectLanguageButton from "./components/lang/select-language-button";
import AboutUsSection from "./components/aboutuspage/AboutUsSection";
import "./index.css"; // Global styles

// Main App Component with Routing
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
