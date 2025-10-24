import { useTranslation } from 'react-i18next';
import aboutUsPageContent from '../../data/about-us-page-content.json';

const AboutUsSection = () => {
  const { t } = useTranslation();
  
  // Get intro content from CMS
  const introTitle = t('about.title', 'Let us introduce ourselves');
  const introDescription = t('about.description', 'Mozika Manova Fiainana is a music school for deprived communities of young people in Antsirabe, Madagascar, founded January 2021 by the Norwegian violinist Eline Rodvelt Hansen and the Malagasy musician Dina Rasalina.\n\nThe school is a vibrant holistic community that not only provides music and art lessons, but also supports children from the most underprivileged backgrounds in Antsirabe with food, health care, learning supplies, clothing and shelter.');
  
  // Get the intro image from the first section of the static data as fallback
  const introImage = aboutUsPageContent.sections[0]?.image || '';
  const introImageAlt = aboutUsPageContent.sections[0]?.imageAlt || 'About section image';

  // Get middle sections from CMS
  const cmsSections = t('about.sections', [], { returnObjects: true });
  
  // Fallback to static data if CMS sections are not available
  const fallbackSections = aboutUsPageContent.sections.filter(
    (section, index) => index > 0 && !section.supporters,
  );

  // Use CMS sections if available, otherwise fallback to static data
  const middleSections = Array.isArray(cmsSections) && cmsSections.length > 0 
    ? cmsSections 
    : fallbackSections;

  return (
    <section id="AboutUsSection" className="w-full pt-2">
      {/* Intro section from CMS */}
      <InfoSection
        title={introTitle}
        content={introDescription}
        image={introImage}
        imageAlt={introImageAlt}
        layout="intro"
      />
      
      {/* Middle sections from CMS or fallback to static data */}
      {middleSections.map((section, index) => {
        // Handle both CMS format (with nested section object) and static format
        const sectionData = section.section || section;
        
        return (
          <InfoSection
            key={sectionData.id || index}
            title={sectionData.title}
            content={sectionData.content}
            image={sectionData.image}
            imageAlt={sectionData.imageAlt}
            layout="standard"
          />
        );
      })}
    </section>
  );
};

const InfoSection = ({ title, content, image, imageAlt, layout }) => {
  const fallbackImage = '/assets/images/about/about-placeholder.jpg';

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-3 pb-12 md:py-12">
      {layout === 'intro' ? (
        <div>
          <div className="flex justify-center items-center">
            <h1 className="font-justAnotherHand text-[50px] md:text-[110px] mb-4 text-center">
              {title}
            </h1>
          </div>

          <p className="mb-6 whitespace-pre-line text-center mx-auto max-w-prose">
            {content}
          </p>

          {image && (
            <img
              src={image || fallbackImage}
              alt={imageAlt || 'About section image'}
              fetchPriority="high"
              className="w-full object-cover mt-6 aspect-[16/9]"
              loading="eager"
              decoding="async"
            />
          )}
        </div>
      ) : (
        <div>
          <h3 className="font-justAnotherHand text-[30px] md:text-[70px] font-bold mb-4">
            {title}
          </h3>

          <p className="mb-6 whitespace-pre-line text-left">{content}</p>

          {image && (
            <img
              src={image || fallbackImage}
              alt={imageAlt || 'About section image'}
              className="w-full object-cover aspect-[16/9]"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AboutUsSection;
