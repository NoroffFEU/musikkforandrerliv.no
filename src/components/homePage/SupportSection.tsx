import React from 'react';
import data from '../../data/landing-page-content.json';
import { SupportContent } from '../../types';

interface SupportSectionProps {
  content?: SupportContent;
}

const SupportSection: React.FC<SupportSectionProps> = ({ content = data.support }) => {
  return (
    <section id="SupportSection" className="w-full">
      <h2>{content.title}</h2>
      {/* Support content implementation */}
    </section>
  );
};

export default SupportSection;