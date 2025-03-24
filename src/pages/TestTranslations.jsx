import React from 'react';

import { useTranslation } from 'react-i18next';

import ErrorBoundary from '../components/ErrorBoundary.jsx';

const TestTranslations = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ErrorBoundary>
      <div className="h-screen w-full flex flex-col justify-center items-center space-y-4">
        <h1 className="text-2xl font-extrabold">{t('title')}</h1>
        <p className="text-lg">{t('description')}</p>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            onClick={() => handleLanguageChange('en')}
          >
            {t('english')}
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
            onClick={() => handleLanguageChange('no')}
          >
            {t('norwegian')}
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default TestTranslations;
