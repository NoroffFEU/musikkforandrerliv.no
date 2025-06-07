import { useNavigate } from 'react-router-dom';
import ContactForm from '../SupportPage/SupportContactForm';
import DonationRadioGroup from './DonationRadioGroup';

/**
 * DonationForm component
 *
 * Combines the `ContactForm` with the `DonationRadioGroup` to collect user details
 * and donation preferences. On successful submission, redirects to a thank-you page.
 *
 * Internally uses `useNavigate` from React Router for redirection.
 *
 * @component
 *
 * @example
 * // Usage inside a route component
 * import DonationForm from './DonationForm';
 *
 * function DonatePage() {
 *   return (
 *     <div className="container mx-auto">
 *       <DonationForm />
 *     </div>
 *   );
 * }
 *
 * export default DonatePage;
 *
 * @returns {JSX.Element} Donation form with input fields and donation options
*/

/**
 * Handles the donation form submission.
 * Simulates async processing (e.g., API call) and redirects after 1s.
 *
 * @async
 * @function handleDonationSubmit
 * @returns {Promise<void>}
*/

export function DonationForm() {
  const handleSubmit = async () => {
    await new Promise((r) => setTimeout(r,500))
  };

  return (
    <ContactForm 
    onSubmit={handleSubmit}
    redirectTo='/thank-you'>
      <div className="mt-[82px] mb-16">
        <DonationRadioGroup />
      </div>
    </ContactForm>
  );
}

export default DonationForm;
