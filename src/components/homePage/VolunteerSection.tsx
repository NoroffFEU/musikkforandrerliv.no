import React from 'react';
import data from '../../data/landing-page-content.json';
import { VolunteerContent } from '../../types';

interface VolunteerSectionProps {
  content?: VolunteerContent;
}

const VolunteerSection: React.FC<VolunteerSectionProps> = ({ content = data.volunteer }) => {
  return (
    <section id="VolunteerSection" className="w-full">
      <h2>{content.title}</h2>
      {/* Volunteer content implementation */}
    </section>
  );
};

export default VolunteerSection;