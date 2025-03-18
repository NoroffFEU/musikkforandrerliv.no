import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Load translations via HTTP
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Initializes react-i18next
  .init({
    supportedLngs: ["no", "mg", "en"], // Supported languages
    fallbackLng: "en", // Default language
    debug: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Translation files location
    },
  });

export default i18n;
