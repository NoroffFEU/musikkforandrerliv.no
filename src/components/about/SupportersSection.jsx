import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutUsData from '../../data/about-us-page-content.json';

const SupportersSection = ({ section }) => {
  const { t } = useTranslation();
  
  // Get supporters from CMS
  const cmsSupporters = t('about.supporters', { returnObjects: true });
  
  // Fallback to static data if CMS supporters are not available
  const fallbackSection = aboutUsData.sections.find(
    (section) => section.id === 11,
  );
  const fallbackSupporters = fallbackSection?.supporters || [];
  
  // Use CMS supporters if available, otherwise fallback to static data
  const supporters = Array.isArray(cmsSupporters) && cmsSupporters.length > 0 
    ? cmsSupporters 
    : fallbackSupporters;
  
  // Get title from CMS or fallback
  const title = t('about.supporters_title', section?.title || 'MFF is supported by');
  
  if (!supporters || supporters.length === 0) return null;

  return (
    <div className="text-center py-16 px-4 bg-white">
      <h2 className="text-3xl mb-8 text-black">{title}</h2>
      <div className="max-w-2xl mx-auto space-y-2">
        {supporters.map((supporter, index) => {
          // Handle both CMS format (with nested supporter object) and static format
          const supporterData = supporter.supporter || supporter;
          
          // TODO: Consider adding URL property to supporters
          // If URLs are intended, modify this to create clickable links
          const textColor =
            supporterData.name === 'Martin Fröst Foundation'
              ? 'text-[#EF476F]'
              : 'text-black';

          return (
            <p
              key={supporterData.id || index}
              className={`text-lg ${textColor} transition-colors duration-300 hover:text-opacity-80`}
            >
              {index === 0 ? `"${supporterData.name}"` : supporterData.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SupportersSection;
