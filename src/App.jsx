// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Make sure to set up i18n for translations
import heart from "/assets/images/svgs/heart.svg";
import SelectLanguageButton from "./components/lang/select-language-button";
import AboutUsSection from "./components/aboutspage/aboutussection";
import "./index.css"; // Global styles

// Home Component
const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-extrabold">
        {t("Welcome to MMF project")}{" "}
        <img className="inline bg-red-600" src={heart} alt="heart icon" />
      </h1>
      <button onClick={() => i18n.changeLanguage("no")}>NO</button>
      <div className="flex items-center justify-center h-96 px-4 w-full">
        <SelectLanguageButton />
      </div>
    </div>
  );
};

// Main App Component with Routing
const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsSection />} /> {/* About Us Route */}
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
