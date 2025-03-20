import React from 'react'
import { useTranslation } from 'react-i18next'
import SelectLanguageButton from '../components/lang/select-language-button'

const TestTranslations = () => {
  const { t } = useTranslation()



  return (
    <div className="h-screen w-full flex flex-col justify-center items-center space-y-4">
      <h1 className="text-2xl font-extrabold">{t('title')}</h1>

      <p className="text-lg">{t('common.card.supportUs.description')}</p>

      <div className="space-x-4">

        <SelectLanguageButton/>
      </div>
    </div>
  )
}

export default TestTranslations
