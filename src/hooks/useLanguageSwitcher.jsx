import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

/**
 * Custom hook for switching languages and saving preferences.
 *
 * - Loads the saved language from localStorage.
 * - Updates the language dynamically when changed.
 * - Saves the user's preference in localStorage.
 */
const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const getSavedLanguage = () =>
    localStorage.getItem('preferredLanguage') || 'En';
  const [language, setLanguage] = useState(getSavedLanguage());

  useEffect(() => {
    i18n.changeLanguage(language.toLowerCase());
  }, [i18n, language]);

  /**
   * Updates the language when the user selects a new one.
   */
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  return { language, handleLanguageChange };
};

export default useLanguageSwitcher;
