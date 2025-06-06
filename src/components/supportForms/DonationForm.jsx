import ContactForm from '../SupportPage/SupportContactForm';
import DonationRadioGroup from './DonationRadioGroup';

export function DonationForm() {
  const navigate = useNavigate();

  const handleDonationSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    navigate('/thank-you');
  };

  return (
    <ContactForm onSubmit={handleDonationSubmit}>
      <div className="mt-[82px] mb-16">
        <DonationRadioGroup />
      </div>
    </ContactForm>
  );
}

export default DonationForm;
