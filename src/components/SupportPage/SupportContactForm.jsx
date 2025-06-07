import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TextInput from '../../components/supportForms/TextInput';
import AgreementRadio from '../supportForms/AgreementRadio';
import { SubmitButton } from '../buttons/SubmitButton/SubmitButton';

/**
 * ContactForm component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {Function} props.onSubmit
 * @param {string} [props.redirectTo='/thank-you']
 */
const ContactForm = ({ children, onSubmit, redirectTo = '/thank-you' }) => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const form = document.getElementById('support-contact-form');

    // Trigger browser validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!agreed) {
      alert('You must agree to terms and conditions before submitting.');
      return;
    }

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
      id="support-contact-form"
      className="max-w-4xl p-6 bg-[#B2CAC2] shadow-md rounded-sm"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      <div className="grid grid-cols-1 font-montserrat md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <TextInput label="First Name" id="firstName" required />
          <TextInput label="Email" id="email" type="email" required />
          <TextInput label="Address" id="address" required />
          <TextInput label="City" id="city" required />
        </div>
        <div className="space-y-4">
          <TextInput label="Last Name" id="lastName" required />
          <TextInput label="Phone Number" id="phone" type="tel" required />
          <TextInput label="Postal Code" id="postalCode" required />
          <TextInput label="Country" id="country" required />
        </div>
      </div>

      {children}

      <div className="mt-6">
        <AgreementRadio
          name="terms"
          value="agree"
          checked={agreed}
          onChange={() => setAgreed(true)}
          label={
            <>
              By clicking Submit, you agree to our <strong>Terms & Conditions</strong> and that you have read our{' '}
              <strong>Privacy Policy</strong>.
            </>
          }
        />
      </div>

      <div className="w-full flex justify-center items-center mt-[45px] md:mt-16 mb-[61px] md:mb-[20px]">
        <SubmitButton
          label="Submit"
          type="button"
          className="uppercase font-sans text-[24px] font-semibold"
          disabled={!agreed}
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default ContactForm;
