import React from 'react';

/**
 * @function DonationsForm
 * @description
 * Renders a donation form component with two main sections using semantic HTML:
 * 1. Plan selection (e.g., one-time or recurring donations)
 * 2. Payment method selection (e.g., credit card, debit card, Vipps)
 *
 * The form uses two `<fieldset>` blocks for improved accessibility and grouping.
 * It dynamically generates labeled radio button inputs from predefined arrays.
 *
 *
 * @returns {JSX.Element} A React component representing a two-part donation selection form.
 *
 * @example
 * import DonationsForm from './DonationsForm';
 * 
 * function App() {
 *   return (
 *     <div>
 *       <DonationsForm />
 *     </div>
 *   );
 * }
*/

export function DonationsForm() {
   const plans = ['One-time payment', 'Every month donation'];

   const payments = ['Credit Card', 'Debit Card', 'Vipps']

  return (
     <div className='flex flex-col gap-[25px] justify-center container md:flex-row md:gap-[52px] transition-all duration-300 ease-in-out'>
        <fieldset aria-labelledby='Choose a plan' className='flex flex-col justify-center items-center md:items-start md:justify-start w-[280px] md:w-[505px] h-fill px-[10px] py-[35px] md:px-[70px] border-[1px] border-opacity-50 border-black/50 rounded-[9px] bg-white transition-all duration-300 ease-in-out'>
            <h2 className='font-sans text-[18px] md:text-[20px] sm:text-center text-[#363732] font-semibold mb-[44px]'>Choose a plan</h2>
            <div className="flex flex-col gap-[37px] items-start justify-start">
                {plans.map((plan) => (
                    <label key={plan} className='flex flex-row gap-[36px] text-[15px] text-[#363732] font-sans'>
                        <input
                        type='radio'
                        name='plan'
                        value={plan}
                        >
                        </input>
                    {plan}
                    </label>
                ))}
            </div>
        </fieldset>
        <fieldset aria-labelledby='Choose a payment method'  className='flex flex-col items-center justify-center md:items-start md:justify-start w-[280px] md:w-[505px] h-fill px-[10px] py-[35px] md:px-[70px] border-[1px] border-opacity-50 border-black/50 rounded-[9px]  bg-white transition-all duration-300 ease-in-out'>
            <h2 className='font-sans text-[18px] md:text-[20px] sm:text-center text-[#363732] font-semibold mb-[44px]'>Choose a payment method</h2>
            <div className="flex flex-col gap-[38px] items-start justify-start">
                {payments.map((payment) => (
                    <label key={payment} className='flex flex-row gap-[36px] text-[15px] text-black font-sans'>
                        <input
                        type='radio'
                        name='payment'
                        value={payment}
                        >
                        </input>
                        {payment}
                    </label>
                ))}
            </div>
        </fieldset>
     </div>
  )
}

export default DonationsForm;