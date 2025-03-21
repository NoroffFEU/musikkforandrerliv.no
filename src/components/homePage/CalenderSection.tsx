import React from 'react';
import data from '../../data/landing-page-content.json';
import { CalendarContent } from '../../types';

interface CalenderSectionProps {
  content?: CalendarContent;
}

const CalenderSection: React.FC<CalenderSectionProps> = ({ content = data.calender }) => {
  return (
    <section id="CalenderSection" className="w-full">
      <h2>{content.title}</h2>
      {/* Calendar content implementation */}
    </section>
  );
};

export default CalenderSection;