import locales from '../../public/locales/locales.en.json';
import ReusableButton from './buttons/reusableButton';

const SupportUsSection = () => {
  return (
    <div className="md:w-[85%] w-[95%] mx-auto my-10  md:h-[626px] p-8 bg-[var(--color-ivory-beige)] border border-[#e6d9c2] rounded-md shadow-[6px_6px_3px_rgba(238,99,82,0.7)]">
      <div className="flex flex-col items-center space-y-10 my-5">
        <h2 className="text-4xl  text-center font-[var(--font-justAnotherHand)]">
          {' '}
          {locales.screens.supportUs.title}
        </h2>

        <div className="space-y-4 m-7 text-lg max-w-3xl mx-auto font-[var(--font-sans)]">
          <p>{locales.screens.supportUs.description}</p>

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

        <ReusableButton
          text="SUPPORT"
          href="#"
          className="bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] text-white font-medium px-10 py-2 rounded-md text-2xl"
        />
      </div>
    </div>
  );
};

export default SupportUsSection;
