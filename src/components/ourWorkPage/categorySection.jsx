import { useEffect, useState } from 'react';

import ourWorkData from '../../data/our-work-page.json';

const CategorySection = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(ourWorkData.sections);
  }, []);

  return (
    <section>
      <h1>{ourWorkData.pageName}</h1>{' '}
      {/* Tip: Add "sr-only" if not needed visually, keep for SEO purposes */}
      {sections.map((section) => (
        <div key={section.id}>
          <h2>{section.title}</h2>
          <img src={section.image} alt={section.imageAlt} />
          <p>{section.content}</p>
        </div>
      ))}
    </section>
  );
};

export default CategorySection;
