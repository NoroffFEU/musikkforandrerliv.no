import RadioGroup from '../../components/supportForms/RadioGroup';
import TextInput from '../../components/supportForms/TextInput';
import AgreementRadio from '../supportForms/AgreementRadio';
import { useState } from 'react';
import { SubmitButton } from '../buttons/SubmitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({ children, onSubmit, redirectTo = '/thank-you' }) => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (onSubmit) {
      await onSubmit();
    }

    if (redirectTo) {
      setTimeout(() => {
        navigate(redirectTo);
      }, 1000);
    }
  };

  return (
    <form 
      onSubmit={(e) => e.preventDefault()}
      className="max-w-4xl p-6 bg-[#B2CAC2] shadow-md rounded-sm"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      <div className="grid grid-cols-1 font-montserrat md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <TextInput label="First Name" id="firstName" name="firstName" required />
          <TextInput label="Email" id="email" name="email" type="email" required />
          <TextInput label="Address" id="address" name="address" required />
          <TextInput label="City" id="city" name="city" required />
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <TextInput label="Last Name" id="lastName" name="lastName" required />
          <TextInput label="Phone Number" id="phone" name="phone" type="tel" required />
          <TextInput label="Postal Code" id="postalCode" name="postalCode" required />
          <TextInput label="Country" id="country" name="country" required />
        </div>
      </div>

      {children}

      <RadioGroup
        label="I'm interested in:"
        name="interest"
        required
        options={[
          { label: 'Volunteering', value: 'volunteering' },
          { label: 'Fundraising', value: 'fundraising' },
          { label: 'Ticket/Registration', value: 'ticket' },
          { label: 'Other', value: 'other' },
        ]}
      />

      <div className="mt-6">
        <AgreementRadio
          name="terms"
          value="agree"
          checked={agreed}
          onChange={() => setAgreed(true)}
          label={
            <>
              By clicking Submit, you agree to our <strong>Terms & Conditions</strong>, and that you have read our
              <strong> Privacy Policy</strong>.
            </>
          }
        />
      </div>

      <div className="w-full flex justify-center items-center mt-[45px] md:mt-16 mb-[61px] md:mb-[20px]">
        <SubmitButton
          label="Submit"
          className="uppercase font-sans text-[24px] font-semibold"
          disabled={!agreed}
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default ContactForm;
