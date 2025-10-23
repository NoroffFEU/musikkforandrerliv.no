import { useTranslation } from 'react-i18next';
import aboutUsPageContent from '../../data/about-us-page-content.json';


const AboutUsSection = () => {
  const { t } = useTranslation();

  
  const about = t('about', { returnObjects: true });


  const translatedSections = [];
  if (about && (about.title || about.description)) {
    translatedSections.push({
      id: 'about-main',
      title: about.title || null,
      content: about.description || null,
      contact_info_address: about.contact_info_address || null,
      contact_info_phone: about.contact_info_phone || null,
    });

    if (about.contact_info_address || about.contact_info_phone) {
      translatedSections.push({
        id: 'about-contact',
        content: `${about.contact_info_address || ''}\n${about.contact_info_phone || ''}`.trim(),
      });
    }
  }

  // Also include the intro section (id=1) from the local JSON and ensure it appears first
  try {
    const introSection = aboutUsPageContent.sections.find((s) => s.id === 1);
    if (introSection) {
      // Place intro at the front
      translatedSections.unshift({
        id: introSection.id,
        title: introSection.title,
        content: introSection.content,
        image: introSection.image,
        imageAlt: introSection.imageAlt,
      });
    }
  } catch {
    // ignore if aboutUsPageContent is missing
  }

  // If translations produced no usable sections, finalSections will fall back to local JSON

  

  const finalSections =
    translatedSections.length > 0
      ? translatedSections
      : aboutUsPageContent.sections.filter(
          (section) => section.title || section.supporters,
        );

  return (
    <section id="AboutUsSection" className="w-full pt-2">
      {finalSections.map((section, index) => {
        const isFirst = index === 0;

        // Check if section has standard content or is a supporters section
        if (section.supporters) {
          return null; // We'll render this separately in the About page
        }

        return (
          <InfoSection
            key={section.id}
            title={section.title}
            content={section.content}
            image={section.image}
            imageAlt={section.imageAlt}
            layout={isFirst ? 'intro' : 'standard'}
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
