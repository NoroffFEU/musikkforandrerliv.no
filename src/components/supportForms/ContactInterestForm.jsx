import ContactForm from '../SupportPage/SupportContactForm';
import InterestedField from './InterestedField';

/**
 * Handles the donation form submission.
 * Simulates async processing (e.g., API call) and redirects after 1s.
 *
 * @async
 * @function handleContactIntrestFormSubmit
 * @returns {Promise<void>}
 */

export function ContactInterestForm() {
  const handleContactIntrestFormSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1000));

  };
  return (
    <ContactForm onSubmit={handleContactIntrestFormSubmit}>
      <div className="mt-[82px] mb-16">
        <InterestedField />
      </div>
    </ContactForm>
  );
}

export default ContactInterestForm;
