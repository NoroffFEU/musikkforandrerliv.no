/**
 * AgreementRadio Component
 *
 * A reusable styled radio input for accepting terms or other confirmations.
 *
 * @param {string} name - Name attribute for the radio input group
 * @param {string} value - Value of this specific radio input
 * @param {string} label - Label text displayed next to the radio input
 * @param {function} onChange - Handler when selection changes
 * @param {boolean} checked - Whether this input is selected.
 * @example
 * <AgreementRadio
 *   name="terms"
 *   value="agree"
 *   label="Agree to terms"
 *   checked={agreed}
 *   onChange={() => setAgreed(true)}
 * />
 *
 * @returns {JSX.Element} A styled and accessible radio button group.
*/

export function AgreementRadio({ name, value, label, onChange, checked = false, }) {
  return (
    <div className="flex gap-[17px] justify-center items-center md:items-start w-full">
        <div className="w-fit">
            <input
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
                aria-label={label}
                className="appearance-none w-2 h-2 outline-2 outline-black ring-white ring-1 outline-offset-2 checked:bg-black rounded-full hover:outline-black/50 bg-white transition-all duration-200 ease-in-out "
            />
        </div>
        <label
        key={value}
        className="text-[16px] text-black font-sans"
        >
        {label}
        </label>
    </div>
  )
}

export default AgreementRadio;