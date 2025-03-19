import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // Initialize React-i18next
  .use(HttpApi) // Load translations from backend (HTTP)
  .use(LanguageDetector) // Detect language automatically
  .init({
    supportedLngs: ['en', 'no'], // Supported languages
    fallbackLng: 'en', // Default language
    debug: false, // ❌ Disable debug logs
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Path to your translation files
    },
  });

export default i18n;
