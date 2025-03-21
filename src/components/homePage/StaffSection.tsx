import React from 'react';
import data from '../../data/landing-page-content.json';
import { StaffContent } from '../../types';

interface StaffSectionProps {
  content?: StaffContent;
}

const StaffSection: React.FC<StaffSectionProps> = ({ content = data.staff }) => {
  return (
    <section id="StaffSection" className="w-full">
      <h2>{content.title}</h2>
      {/* Staff content implementation */}
    </section>
  );
};

export default StaffSection;