import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../common/Section';
import data from '../../data/landing-page-content.json';
import { HistoryContent } from '../../types';

interface HistorySectionProps {
  content?: HistoryContent;
}

/**
 * History section component displaying the organization's history
 */
const HistorySection: React.FC<HistorySectionProps> = ({ content = data.history }) => {
  const { t } = useTranslation();
  
  return (
    <Section 
      id="HistorySection" 
      title={t('history.title', content.title)}
      className="bg-gray-50"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img 
            src={content.image} 
            alt={t('history.imageAlt', 'MMF History')} 
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed">
            {t('history.content', content.content)}
          </p>
          <button 
            className="mt-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={content.backIcon} alt="Back to top" className="w-4 h-4 mr-2" />
            {t('common.backToTop', 'Back to top')}
          </button>
        </div>
      </div>
    </Section>
  );
};

export default HistorySection;