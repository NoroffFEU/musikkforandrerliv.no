import supportOptionsData from '../../data/supportOptionsData.json';
import SupportOptionSingle from './SupportOptionSingle.jsx';

// example imports until they are created:
// import VolunteerForm from '../forms/VolunteerForm';
// import DonationsForm from '../forms/DonationsForm';
// import FundraisingForm from '../forms/FundraisingForm';

const exampleForm = () => (
  <form className="bg-[var(--color-mint-green)] rounded-[5px]">
    <h2>Example Form</h2>
    <p>No form here yet!</p>
    {/* Add your form fields here */}
  </form>
);

const formMap = {
  volunteer: exampleForm, // replaced by correct form when completed
  donations: exampleForm, // replaced by correct form when completed
  fundraising: exampleForm, // replaced by correct form when completed
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
          formComponent={formMap[option.title.toLowerCase()] || exampleForm}
        />
      ))}
    </section>
  );
};

export default SupportOptions;
