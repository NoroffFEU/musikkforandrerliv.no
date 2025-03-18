import React from "react";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next"; // You already get 'i18n' from this hook
import heart from "/assets/images/svgs/heart.svg";

const App = () => {
  const { t, i18n } = useTranslation(); // i18n from the hook

  return (
    <I18nextProvider i18n={i18n}>
      <div className="h-screen w-full flex justify-center items-center">
        <h1 className="text-2xl font-extrabold">
          {t("Welcome to MMF project")}{" "}
          <img className="inline bg-red-600" src={heart} alt="" />
        </h1>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div>
    </I18nextProvider>
  );
};

export default App;
