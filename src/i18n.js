import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Initialize React-i18next
  .use(HttpApi) // Load translations from backend (HTTP)
  .use(LanguageDetector) // Detect language automatically
  .init({
    supportedLngs: ['en', 'no', 'mg'], // Supported languages
    fallbackLng: 'en', // Default language
    debug: import.meta.env.DEV, // Debug mode only in development using Vite's env variable
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/locales.{{lng}}.json', // Path to your translation files
    },
  });

export default i18n;
