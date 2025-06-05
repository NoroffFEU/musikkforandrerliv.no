import React from 'react';

import ContactForm from '../SupportPage/SupportContactForm';
import DonationRadioGroup from './DonationRadioGroup';

export function DonationForm() {
  return (
    <ContactForm>
      <div className="mt-[82px] mb-16">
        <DonationRadioGroup />
      </div>
    </ContactForm>
  );
}

export default DonationForm;
