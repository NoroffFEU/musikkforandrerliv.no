import RadioInput from "./RadioInput";

/**
 * DonationRadioGroup component.
 *
 * Displays two grouped radio input fieldsets for:
 * - Donation frequency (plan)
 * - Payment method
 *
 * Used as a child of the ContactForm.
 *
 * @component
 * @returns {JSX.Element}
*/


const DonationRadioGroup = () => {
  return (
    <div>
      <div className="flex flex-col gap-[25px] justify-center items-center md:items-stretch container md:flex-row md:gap-[52px] transition-all duration-300 ease-in-out">
        <fieldset  
            aria-labelledby='Choose a plan'
            className="min-h-[227px] h-auto flex flex-col justify-center items-center  md:items-start md:justify-start w-[280px] md:w-[505px] px-[10px] py-[35px] md:px-[70px] border-[1px] border-opacity-50 border-black/50 rounded-[9px] bg-white transition-all duration-300 ease-in-out">
       
          <h2 className="font-sans text-[18px] md:text-[20px] md:text-left sm:text-center text-[#363732] font-semibold mb-[44px]">
            Choose a plan
          </h2>
          <RadioInput
            name="plan"
            options={[
              { label: 'One-time payment', value: 'one-time' },
              { label: 'Every month donation', value: 'monthly' },
            ]}
          />
        </fieldset>
        <fieldset  
            aria-labelledby='Choose a payment method'
            className="min-h-[227px] md:items-start items-center h-auto flex flex-col justify-center md:justify-start w-[280px] md:w-[505px] px-[10px] py-[35px] md:px-[70px] border-[1px] border-opacity-50 border-black/50 rounded-[9px] bg-white transition-all duration-300 ease-in-out">
       
          <h2 className="font-sans text-[18px] md:text-[20px] md:text-left sm:text-center text-[#363732] font-semibold mb-[44px]">
            Choose a payment method
          </h2>
          <RadioInput
          name="payment"
          options={[
            { label: 'Credit Card', value: 'credit card' },
            { label: 'Debit Card', value: 'debit card' },
            { label: 'Vipps', value: 'vipps' },
          ]}
        />
        </fieldset>
      </div>
    </div>
  );
};

export default DonationRadioGroup;
