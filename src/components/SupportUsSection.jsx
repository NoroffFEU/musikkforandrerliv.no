import { Link } from 'react-router-dom';

import ReusableButton from './buttons/reusableButton';

const SupportUsSection = () => {
  return (
    <section className="md:w-[85%] w-[95%] mx-auto my-10 p-8 bg-[#fff3cc] border-[4px] border-[#f88b5c] shadow-[6px_6px_0_#f88b5c] rounded-md">
      <div className="flex flex-col items-center space-y-10 my-5">
        <h2 className="text-4xl md:text-5xl text-center font-[var(--font-justAnotherHand)] font-normal">
          Support Us
        </h2>

        <div className="space-y-6 text-lg max-w-[700px] px-6 md:px-10 mx-auto text-left font-[var(--font-sans)] leading-relaxed text-[#333]">
          <p>
            The funds that come in go towards covering everything from food,
            clothing, education, equipment, healthcare, medicines, and dental
            care for the children, as well as the operation of the music school
            and salaries for our staff.
          </p>
          <p>
            The families of the children are also included in the food program
            and receive monthly distributions of food and hygiene products.
          </p>
          <p>
            We are constantly working to improve the living conditions of the
            children, and we use much of the surplus we have to repair houses
            and homes.
          </p>
        </div>

        <Link to="/support">
          <ReusableButton
            text="SUPPORT"
            ariaLabel="Navigate to support page"
            className="!bg-[var(--color-sunset-red)] !text-white hover:!bg-[#d9534f] hover:!text-white !border-none px-10 py-3 text-2xl font-bold rounded-md mt-6"
            type="button"
          />
        </Link>
      </div>
    </section>
  );
};

export default SupportUsSection;
