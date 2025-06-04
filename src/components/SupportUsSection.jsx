import { Link } from 'react-router-dom';
import ReusableButton from './buttons/reusableButton';

const SupportUsSection = () => {
  return (
    <section
      className="bg-[#fff3cc]  shadow-[6px_6px_0_#f88b5c] rounded-md 
                w-[95%] md:w-[85%] mx-auto my-10 p-6 md:p-8"
    >
      <div className="flex flex-col items-center gap-8 md:gap-10 my-4 md:my-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-justAnotherHand text-center leading-tight">
          Support Us
        </h2>

        <div className="space-y-4 md:space-y-6 max-w-[700px] px-2 sm:px-4 md:px-10 mx-auto text-left 
                        text-sm sm:text-base md:text-[18px] leading-relaxed text-[#333]">
          <p>
            The funds that come in go towards covering everything from food, clothing,
            education, equipment, healthcare, medicines, and dental care for the children,
            as well as the operation of the music school and salaries for our staff.
          </p>
          <p>
            The families of the children are also included in the food program and receive
            monthly distributions of food and hygiene products.
          </p>
          <p className="mb-0">
            We are constantly working to improve the living conditions of the children, and
            we use much of the surplus we have to repair houses and homes.
          </p>
        </div>

        <Link to="/support" aria-label="Navigate to the Support page">
          <ReusableButton
            text="SUPPORT"
            type="button"
            className="!bg-[var(--color-sunset-red)] !text-white hover:!bg-[#d9534f]
                       !border-none px-8 py-2 text-base md:text-xl font-bold rounded-md transition-all"
          />
        </Link>
      </div>
    </section>
  );
};

export default SupportUsSection;
