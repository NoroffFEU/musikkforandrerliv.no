import React from "react";

import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next"; // You already get 'i18n' from this hook
import heart from "/assets/images/svgs/heart.svg";
import SelectLanguageButton from "./components/lang/select-language-button";
import "./index.css";
import WorkSection from "./components/homePage/workSection";



// You already get 'i18n' from this hook
import "./i18n";

import TestTranslations from "./pages/TestTranslations";


const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <I18nextProvider>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-extrabold">
          {t("Welcome to MMF project")}{" "}
          <img className="inline bg-red-600" src={heart} alt="" />
        </h1>
        <button onClick={() => i18n.changeLanguage("no")}>NO</button>
        <div className="flex items-center justify-center h-96 px-4 w-full">
          <SelectLanguageButton />
        </div>
      </div>
    
      <WorkSection />
      
    </I18nextProvider>
  );
};

export default App;
