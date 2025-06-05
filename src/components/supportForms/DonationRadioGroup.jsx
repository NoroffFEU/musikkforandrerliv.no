import React from 'react';

import DonationRadioInput from './DonationRadioInput';

const DonationRadioGroup = () => {
  return (
    <div>
      <div className="flex flex-col gap-[25px] justify-center container md:flex-row md:gap-[52px] transition-all duration-300 ease-in-out">
        <DonationRadioInput
          legend="Choose a plan"
          name="plan"
          options={[
            { label: 'One-time payment', value: 'one-time' },
            { label: 'Every month donation', value: 'monthly' },
          ]}
        />
        <DonationRadioInput
          legend="Choose a payment method"
          name="payment"
          options={[
            { label: 'Credit Card', value: 'credit card' },
            { label: 'Debit Card', value: 'debit card' },
            { label: 'Vipps', value: 'vipps' },
          ]}
        />
      </div>
    </div>
  );
};

export default DonationRadioGroup;
