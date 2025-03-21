import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DisplayLanguage, SupportedLanguage } from '../types';

// Map to convert between display language and supported language formats
const languageMap: Record<DisplayLanguage, SupportedLanguage> = {
  En: 'en',
  No: 'no',
  Mg: 'mg',
};

// Map to convert between supported language and display language formats
const displayLanguageMap: Record<SupportedLanguage, DisplayLanguage> = {
  en: 'En',
  no: 'No',
  mg: 'Mg',
};

/**
 * Custom hook for switching languages and saving preferences.
 *
 * - Loads the saved language from localStorage.
 * - Updates the language dynamically when changed.
 * - Saves the user's preference in localStorage.
 * - Syncs with i18next's language settings
 */
const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Get saved language or derive from current i18n setting
  const getSavedLanguage = (): DisplayLanguage => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as DisplayLanguage;
    if (savedLanguage && Object.keys(languageMap).includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // If no valid saved language, use current i18n language or default to English
    const currentLang = i18n.language as SupportedLanguage;
    return displayLanguageMap[currentLang] || 'En';
  };

  const [language, setLanguage] = useState<DisplayLanguage>(getSavedLanguage());

  // Synchronize language with i18n when component mounts or language changes
  useEffect(() => {
    const i18nLang = languageMap[language];
    if (i18nLang && i18n.language !== i18nLang) {
      i18n.changeLanguage(i18nLang);
    }
  }, [i18n, language]);

  // Sync state if i18n language changes externally
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      const newDisplayLang = displayLanguageMap[lng as SupportedLanguage];
      if (newDisplayLang && newDisplayLang !== language) {
        setLanguage(newDisplayLang);
        localStorage.setItem('preferredLanguage', newDisplayLang);
      }
    };

    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n, language]);

  /**
   * Updates the language when the user selects a new one.
   */
  const handleLanguageChange = useCallback((newLanguage: DisplayLanguage): void => {
    if (newLanguage === language) return;
    
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
    i18n.changeLanguage(languageMap[newLanguage]);
  }, [i18n, language]);

  return { language, handleLanguageChange };
};

export default useLanguageSwitcher;