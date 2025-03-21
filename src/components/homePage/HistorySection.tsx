import React from 'react';
import data from '../../data/landing-page-content.json';
import { HistoryContent } from '../../types';

interface HistorySectionProps {
  content?: HistoryContent;
}

const HistorySection: React.FC<HistorySectionProps> = ({ content = data.history }) => {
  return (
    <section id="HistorySection" className="w-full">
      <h2>{content.title}</h2>
      {/* History content implementation */}
    </section>
  );
};

export default HistorySection;