import aboutUsPageContent from '../../data/about-us-page-content.json';

const AboutUsSection = () => {
  const contentSections = aboutUsPageContent.sections.filter((section) => section.title);

  return (
    <section id="AboutUsSection" className="w-full pt-28">
      {contentSections.map((section, index) => {
        const isFirst = index === 0;

        return (
          <InfoSection
            key={section.id}
            title={section.title}
            content={section.content}
            image={section.image}
            imageAlt={section.imageAlt}
            layout={isFirst ? 'intro' : 'standard'}
            showButton={isFirst}
          />
        );
      })}
    </section>
  );
};


const InfoSection = ({ title, content, image, imageAlt, layout, showButton }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      {layout === 'intro' ? (
        <div>
          <p className="mb-6 whitespace-pre-line text-left">{content}</p>

          {showButton && (
            <div className="flex justify-center">
              <button className="font-montserrat uppercase font-semibold px-6 py-2 border border-black rounded">
                Read more
              </button>
            </div>
          )}

          {image ? (
            <img
              src={image}
              alt={imageAlt || ''}
              className="w-full object-cover mt-6"
            />
          ) : (
            <div className="w-full h-100 bg-gray-200 flex items-center justify-center mt-6">
              <p className="text-gray-500">Image placeholder</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="mb-6 whitespace-pre-line text-left">{content}</p>

          {image ? (
            <img
              src={image}
              alt={imageAlt || ''}
              className="w-full object-cover"
            />
          ) : (
            <div className="w-full h-100 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Image placeholder</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AboutUsSection;




