import i18n from 'i18next'
import { initReactI18next, Translation } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/locales.en.json'
import mg from './locales/locales.mg.json'
import no from './locales/locales.no.json'

i18n
  .use(initReactI18next) // Initialize React-i18next
  .use(HttpApi) // Load translations from backend (HTTP)
  .use(LanguageDetector) // Detect language automatically
  .init({
    supportedLngs: ['en', 'no', 'mg'], // Supported languages
    fallbackLng: 'en', // Default language
    debug: false, // ❌ Disable debug logs
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/locales.{{lng}}.json', // Path to your translation files
    },
    resources: {
      en: { translation: en },
      no: { translation: no },
      mg: { translation: mg },
    },
  })

export default i18n
