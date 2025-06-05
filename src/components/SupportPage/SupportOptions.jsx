import supportOptionsData from '../../data/supportOptionsData.json';
import SupportOptionSingle from './SupportOptionSingle.jsx';
import DonationsForm from './donationsForm.jsx';

// example imports until they are created:
// import VolunteerForm from '../forms/VolunteerForm';
// import DonationsForm from '../forms/DonationsForm';
// import FundraisingForm from '../forms/FundraisingForm';

const exampleForm = () => (
  <form className="lg:grid lg:grid-cols-2 flex flex-col gap-[12px] md:gap-[24px] justify-center bg-[var(--color-mint-green)] rounded-[5px] pt-[32px] pb-[28px] px-[48px]">
    <h2 className="col-span-2 text-center md:text-[32px] text-[20px]">
      Example Form
    </h2>
    <input
      className="bg-white lg:w-[350px] rounded-[7px] p-2 placeholder:px-3 border-2"
      placeholder="first thing"
    />
    <input
      className="bg-white lg:w-[350px] rounded-[7px] p-2 placeholder:px-3 border-2"
      placeholder="second thing"
    />
    <input
      className="bg-white lg:w-[350px] rounded-[7px] p-2 placeholder:px-3 border-2"
      placeholder="third thing"
    />
    <input
      className="bg-white lg:w-[350px] rounded-[7px] p-2 placeholder:px-3 border-2"
      placeholder="fourth thing"
    />
    <input
      className="bg-white lg:w-[350px] rounded-[7px] p-2 placeholder:px-3 border-2"
      placeholder="fifth thing"
    />
    <input
      className="bg-white lg:w-[350px] rounded-[7px] p-2 placeholder:px-3 border-2"
      placeholder="sixth thing"
    />
    <input
      className="bg-white lg:w-[350px] rounded-[7px] p-2 placeholder:px-3 border-2"
      placeholder="seventh thing"
    />
    <input
      className="bg-white lg:w-[350px] rounded-[7px] p-2 placeholder:px-3 border-2"
      placeholder="eighth thing"
    />
    <label className="col-span-2 flex justify-center" for="input">
      <input id="input" type="radio" />
      By clicking submit, you give me your SOUL!
    </label>
    <button className="uppercase text-white font-bold bg-[var(--color-sunset-red)] py-3 px-6 rounded-[9px] cursor-pointer col-span-2 text-center mx-auto">
      Submit
    </button>
  </form>
);

const formMap = {
  volunteer: exampleForm, // replace exampleForm with correct form when completed
  donations: DonationsForm, // replace exampleForm with correct form when completed
  fundraising: exampleForm, // replace exampleForm with correct form when completed
};

const SupportOptions = ({ openModal }) => {
  return (
    <section className="w-full grid justify-center text-center my-24 gap-8 bg-white">
      {supportOptionsData.map((option, index) => (
        <SupportOptionSingle
          key={option.title}
          title={option.title}
          buttonId={option.title.toLowerCase()}
          ariaDescription={option.ariaDescription}
          textContent={option.textContent}
          tabIndex={index + 1}
          openModal={openModal}
          formComponent={formMap[option.title.toLowerCase()] || exampleForm} // if no form is present to match the key in the map, render exampleForm
        />
      ))}
    </section>
  );
};

export default SupportOptions;
