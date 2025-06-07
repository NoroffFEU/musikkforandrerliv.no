import ContactForm from '../SupportPage/SupportContactForm';
import InterestedField from './InterestedField';

export function ContactInterestForm() {
  return (
    <ContactForm>
      <div className="mt-[82px] mb-16">
        <InterestedField />
      </div>
    </ContactForm>
  );
}

export default ContactInterestForm;