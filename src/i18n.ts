import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { SupportedLanguage } from './types';

// Initialize i18next with all necessary configurations
i18n
  .use(initReactI18next) // Initialize React-i18next
  .use(HttpApi) // Load translations from backend (HTTP)
  .use(LanguageDetector) // Detect language automatically
  .init({
    supportedLngs: ['en', 'no', 'mg'] as SupportedLanguage[], // Supported languages
    fallbackLng: 'en', // Default language
    debug: import.meta.env.DEV, // Only enable debug in development
    load: 'languageOnly', // Don't load country-specific locales (e.g., 'en-US')
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then browser
      lookupLocalStorage: 'preferredLanguage', // Key to use in localStorage
      caches: ['localStorage'], // Cache language in localStorage
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Path to translation files
    },
  });

export default i18n;