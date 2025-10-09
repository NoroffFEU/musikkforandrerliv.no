import aboutUsPageContent from '@/data/about-us-page-content.json';

//Hello Testing
const AboutUsSection = () => {
  const contentSections = aboutUsPageContent.sections.filter(
    (section) => section.title || section.supporters,
  );

  return (
    <section id="AboutUsSection" className="w-full pt-2">
      {contentSections.map((section, index) => {
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
              className="w-full object-cover mt-6 aspect-[16/9]"
              loading="lazy"
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
