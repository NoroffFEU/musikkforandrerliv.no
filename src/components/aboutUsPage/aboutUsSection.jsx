import React from "react";
import aboutUsPageContent from "../../data/about-us-page-content.json";
import StaffSection from "./staffSection"; 

const AboutUsSection = () => {
  const contentSections = aboutUsPageContent.sections.filter(
    (section) => section.title || section.supporters
  );

  return (
    <div>
      {/* Main Banner Section */}
      <div
        className="w-full h-[500px] bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "url('../assets/placeholder-images/IMG_7359.webp')",
        }}
      >
        {/* Banner content */}
      </div>

      {/* About Us Text Content */}
      <section className="mx-[220px]">
        <h1 className="font-justAnotherHand text-[150px] text-center mb-8">
          Let us introduce ourselves
        </h1>
        <div className="flex flex-col gap-5 mb-[62px] text-center">
          <p className="text-[25px]">
            Mozika Manova Fiainana is a music school for deprived communities of young people in Antsirabe, Madagascar, founded in January 2021 by Norwegian violinist Eline Rodvelt Hansen and Malagasy musician Dina Rasalina.
          </p>
          <p className="text-[25px]">
            The school is a vibrant holistic community that not only provides music and art lessons, but also supports children from the most underprivileged backgrounds with food, healthcare, learning supplies, clothing, and shelter.
          </p>
        </div>
      </section>

      {/* Dynamic Content Sections */}
      <section id="about-us-content" className="w-full pt-28">
        {contentSections.map((section, index) => {
          const isFirst = index === 0;
          if (section.supporters) return null;

          return (
            <InfoSection
              key={section.id}
              title={section.title}
              content={section.content}
              image={section.image}
              imageAlt={section.imageAlt}
              layout={isFirst ? "intro" : "standard"}
              showButton={isFirst}
            />
          );
        })}
      </section>

      {/* Staff Section */}
      <StaffSection />
    </div>
  );
};

const InfoSection = ({ title, content, image, imageAlt, layout, showButton }) => {
  const fallbackImage = "/assets/images/about/about-placeholder.jpg";

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      {layout === "intro" ? (
        <div>
          <p className="mb-6 whitespace-pre-line text-left">{content}</p>
          {showButton && (
            <div className="flex justify-center">
              <button className="font-montserrat uppercase font-semibold px-6 py-2 border border-black rounded">
                Read more
              </button>
            </div>
          )}
          {image && (
            <img
              src={image || fallbackImage}
              alt={imageAlt || "About section image"}
              className="w-full object-cover mt-6 aspect-16/9"
            />
          )}
        </div>
      ) : (
        <div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="mb-6 whitespace-pre-line text-left">{content}</p>
          {image && (
            <img
              src={image || fallbackImage}
              alt={imageAlt || "About section image"}
              className="w-full object-cover aspect-16/9"
            />
          )}
        </div>
      )}
    </div>
  );
};


export default AboutUsSection;
