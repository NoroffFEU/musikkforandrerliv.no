import { useState } from 'react';

/**
 * ContactMission Component
 * 
 * Displays the organization's mission statement with an expandable description.
 * Includes a hero image and read more functionality to match the screenshot design.
 * 
 * @component  
 * @returns {JSX.Element} Mission section with image, text, and expandable content
 */
const ContactMission = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // This content could be fetched from CMS or moved to a data file
  const missionContent = {
    title: "Our mission",
    shortDescription: "The funds that come in go towards covering everything from food, clothing, education, equipment, healthcare, medicines, and dental care for the children, as well as the operation of the music school and salaries for our staff. The families of the children are also included in the food program and receive monthly distributions of food and hygiene products. We are constantly working to improve the living conditions of the children, and we use much of the surplus we have to repair houses and homes.",
    fullDescription: "The funds that come in go towards covering everything from food, clothing, education, equipment, healthcare, medicines, and dental care for the children, as well as the operation of the music school and salaries for our staff. The families of the children are also included in the food program and receive monthly distributions of food and hygiene products. We are constantly working to improve the living conditions of the children, and we use much of the surplus we have to repair houses and homes. Our organization believes in the transformative power of music and arts education. We work tirelessly to ensure that every child, regardless of their background or circumstances, has access to quality musical education and cultural experiences."
  };
  
  const heroImage = "/assets/placeholder-images/IMG_6438.webp"; // Using existing image from project
  
  return (
    <section className="bg-[#B2CAC2] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Mission Content and Image */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Hero Image */}
          <div className="lg:w-1/2">
            <img
              src={heroImage}
              alt="Children participating in our music programs"
              className="w-full h-auto rounded-lg shadow-lg object-cover aspect-square"
            />
          </div>
          
          {/* Mission Text */}
          <div className="lg:w-1/2 space-y-6 lg:pl-8 flex flex-col items-center">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {missionContent.title}
              </h2>
              
              <div className="text-black leading-relaxed">
                <p className="mb-6">
                  {isExpanded ? missionContent.fullDescription : missionContent.shortDescription}
                </p>
              </div>
            </div>
            
            {/* Action Buttons - Narrower with rounder edges */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm pt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex-[1.2] px-4 py-2 border-2 border-gray-800 text-gray-800 font-semibold text-[24px] rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-expanded={isExpanded}
                aria-label={isExpanded ? "Show less information" : "Read more about our mission"}
              >
                {isExpanded ? 'READ LESS' : 'READ MORE'}
              </button>
              
              <a
                href="/support"
                className="flex-1 px-4 py-2 border-2 border-[#EE6352] bg-[#EE6352] text-white font-semibold text-[24px] rounded-lg hover:bg-[#E55542] hover:border-[#E55542] focus:bg-[#E55542] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#EE6352] focus:ring-offset-2 text-center"
                aria-label="Support our mission with a donation"
              >
                DONATE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMission;