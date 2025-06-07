import ContactForm from '../SupportPage/SupportContactForm';
import InterestedField from './InterestedField';


export function ContactInterestForm() {
   const handleSubmit = async () => {
    await new Promise((r) => setTimeout(r,500))
  };


  return (
    <ContactForm 
    onSubmit={handleSubmit}
    redirectTo='/thank-you'>
      <div className="mt-[82px] mb-16">
        <InterestedField />
      </div>
    </ContactForm>
  );
}

export default ContactInterestForm;