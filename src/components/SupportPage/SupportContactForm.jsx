import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import TextInput from '../../components/supportForms/TextInput';
import { SubmitButton } from '../buttons/SubmitButton/SubmitButton';
import AgreementRadio from '../supportForms/AgreementRadio';
import ThankYouModal from './ThankYouModal';

/**
 * ContactForm component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {Function} props.onSubmit
//  * @param {string} [props.redirectTo='/thank-you']
 */

/**
 * Handles the donation form submission.
 * Simulates async processing (e.g., API call) and redirects after 1s.
 *
 * @async
 * @function handleContact
 * @returns {Promise<void>}
 */
const ContactForm = ({ children, onSubmit }) => {
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleContact = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const form = document.getElementById('support-contact-form');

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!agreed) {
      alert('You must agree to terms and conditions before submitting.');
      return;
    }
    try {
      if (onSubmit) await onSubmit();
      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    } catch (error) {
      console.error('Submit failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        id="support-contact-form"
        className="max-w-4xl p-6 bg-[#B2CAC2] shadow-md rounded-sm"
        onSubmit={(e) => handleSubmit(e)}
        onClick={handleContact}
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
                By clicking Submit, you agree to our{' '}
                <strong>Terms & Conditions</strong> and that you have read our{' '}
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
      {showModal && (
        <ThankYouModal loading={loading} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ContactForm;
