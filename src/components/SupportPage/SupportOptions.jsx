import supportOptionsData from '../../data/supportOptionsData.json';
import ContactInterestForm from '../supportForms/ContactInterestForm.jsx';
import DonationForm from '../supportForms/DonationForm.jsx';
import ContactForm from './SupportContactForm.jsx';
import SupportOptionSingle from './SupportOptionSingle.jsx';

const formMap = {
  volunteer: ContactInterestForm,
  donations: DonationForm,
  fundraising: ContactForm,
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
