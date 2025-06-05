import React from 'react';

/**
 * DonationRadioInput is a reusable, accessible radio button group component.
 * 
 * It renders a styled `<fieldset>` with a legend/title and a list of radio buttons
 * based on the `options` provided. Useful for choosing between predefined donation plans
 * or payment methods. Designed with accessibility and responsiveness in mind.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.legend - Descriptive label/title for the radio group, used both visually and as an ARIA label.
 * @param {string} props.name - The shared `name` attribute for all radio inputs to group them semantically and functionally.
 * @param {Array<{label: string, value: string}>} props.options - An array of objects representing the available radio options.
 * Each object must contain:
 *   - `label` (string): The text displayed next to the radio button.
 *   - `value` (string): The value submitted when the radio input is selected.
 *
 * @example
 * <DonationRadioInput
 *   legend="Choose a plan"
 *   name="plan"
 *   options={[
 *     { label: 'One-time payment', value: 'one-time' },
 *     { label: 'Monthly donation', value: 'monthly' }
 *   ]}
 * />
 *
 * @returns {JSX.Element} A styled and accessible radio button group.
*/

export function DonationRadioInput({ legend, name, options }) {
  return (
    <fieldset
      aria-labelledby={legend}
      className="flex flex-col justify-center items-center md:items-start md:justify-start w-[280px] md:w-[505px] h-fill px-[10px] py-[35px] md:px-[70px] border-[1px] border-opacity-50 border-black/50 rounded-[9px] bg-white transition-all duration-300 ease-in-out"
    >
      <h2 className="font-sans text-[18px] md:text-[20px] sm:text-center text-[#363732] font-semibold mb-[44px]">
        {legend}
      </h2>
      <div className="flex flex-col gap-[37px] items-start justify-start">
        {options.map(({ label, value }) => (
          <label
            key={value}
            className="flex flex-row gap-[36px] text-[15px] text-[#363732] font-sans"
          >
            <input
              type="radio"
              name={name}
              value={value}
              aria-label={label}
              className="appearance-none w-2 h-2 outline-2 outline-black outline-offset-2 border-white checked:bg-black rounded-full hover:outline-black/50 transition-all duration-200 ease-in-out "
            ></input>
            {label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default DonationRadioInput;
