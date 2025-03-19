import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heart from "/assets/images/svgs/heart.svg";
import "./i18n";  

import TestTranslations from "./pages/TestTranslations";  

const Home = () => {
  const { t, i18n } = useTranslation();  

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center space-y-4">
      <h1 className="text-2xl font-extrabold">
        {t("title")}{" "}
        <img className="inline bg-red-600" src={heart} alt="" />
      </h1>

      <Link to="/test-translations" className="px-4 py-2 bg-blue-500 text-white rounded">
        {t("goToTestTranslations")}
      </Link>

      <div className="space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => i18n.changeLanguage("en")}>
          {t("english")}
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => i18n.changeLanguage("no")}>
          {t("norwegian")}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-translations" element={<TestTranslations />} />
      </Routes>
    </Router>
  );
};

export default App; 
