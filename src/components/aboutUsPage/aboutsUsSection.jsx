import aboutUsPageContent from '../../data/about-us-page-content.json';


//Hello Testing Again
const AboutUsSection = () => {
  const contentSections = aboutUsPageContent.sections.filter((section) => 
    section.title || section.supporters
  );

  return (
    <section id="AboutUsSection" className="w-full pt-28">
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
            showButton={isFirst}
          />
        );
      })}
    </section>
  );
};


const InfoSection = ({ title, content, image, imageAlt, layout, showButton }) => {
  const fallbackImage = '/assets/images/about/about-placeholder.jpg';

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
          {
            image &&
            <img
              src={image || fallbackImage}
              alt={imageAlt || 'About section image'}
              className="w-full object-cover mt-6 aspect-16/9"
            />
          }
          
        </div>
      ) : (
        <div>
          <h3 className="font-justAnotherHand  text-xl font-bold mb-4">{title}</h3>
          <p className="mb-6 whitespace-pre-line text-left">{content}</p>
          
          {
            image &&
            <img
              src={image || fallbackImage}
              alt={imageAlt || 'About section image'}
              className="w-full object-cover aspect-16/9"
            />
          }
          
        </div>
      )}
    </div>
  );
};

export default AboutUsSection;






