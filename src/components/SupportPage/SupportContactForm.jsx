import TextInput from '../../components/supportForms/TextInput';
import AgreementRadio from '../supportForms/AgreementRadio';
import { useState } from 'react';
import { SubmitButton } from '../buttons/SubmitButton/SubmitButton';

/**
 * ContactForm component
 *
 * A reusable form layout for collecting user contact details, including
 * text inputs and agreement confirmation. Accepts children to extend the form
 * (e.g., donation options) and an optional `onSubmit` handler for custom behavior.
 *
 * The form prevents default browser submission and relies on a SubmitButton
 * to trigger the `onSubmit` callback manually.
 *
 * @component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Optional content to insert between form fields and the agreement section.
 * @param {Function} props.onSubmit - Function to call when the user submits the form.
 *
 * @example
 * import ContactForm from './ContactForm';
 *
 * function CustomFormWrapper() {
 *   const handleFormSubmit = async () => {
 * //submit function
 *   };
 *
 *   return (
 *     <ContactForm onSubmit={handleFormSubmit}>
 *       <div>Child component</div>
 *     </ContactForm>
 *   );
 * }
 *
 * export default CustomFormWrapper;
 *
 * @returns {JSX.Element} Contact form layout with input fields and submit button
*/

const ContactForm = ({ children, onSubmit }) => {
  const [agreed, setAgreed] = useState(false);


  return (
    <form 
    onSubmit={(e) => e.preventDefault()}
    className="max-w-4xl p-6 bg-[#B2CAC2] shadow-md rounded-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="grid grid-cols-1 font-montserrat md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4 ">
          <TextInput label="First Name" id="firstName" name="firstName" required />
          <TextInput label="Email" id="email" type="email" name="email" required />
          <TextInput label="Address" id="address" name="address" required />
          <TextInput label="City" id="city" name="city" required />
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <TextInput label="Last Name" id="lastName" name="lastName" required />
          <TextInput label="Phone Number" id="phone" type="tel" name="phone" required />
          <TextInput label="Postal Code" id="postalCode" name="postalCode" required />
          <TextInput label="Country" id="country" name="country" required />
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
            By clicking Submit, you agree to our <strong> Terms & Conditions </strong>, and that you have read our 
            <strong> Privacy Policy. </strong>
            </>
          }
        />
      </div>
      <div className='w-full flex justify-center items-center mt-[45px] md:mt-16 mb-[61px] md:mb-[20px]'>
          <SubmitButton
            label='Submit'
            className='uppercase font-sans text-[24px] font-semibold'
            disabled={!agreed}
            onClick={onSubmit}
          />
      </div>
    </form>
  );
};

export default ContactForm;
