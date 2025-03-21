import React from 'react';
import { useTranslation } from 'react-i18next';

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  titleClassName?: string;
  contentClassName?: string;
}

/**
 * A reusable section component that provides consistent structure
 * for various page sections.
 */
const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  title,
  titleClassName = '',
  contentClassName = '',
}) => {
  const { t } = useTranslation();
  
  return (
    <section id={id} className={`py-12 md:py-16 px-4 ${className}`}>
      {title && (
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${titleClassName}`}>
          {t(title)}
        </h2>
      )}
      <div className={contentClassName}>{children}</div>
    </section>
  );
};

export default Section;