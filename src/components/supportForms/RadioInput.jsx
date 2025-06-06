export function RadioInput({ name, options }) {
  return (
      <div className="flex flex-col gap-[37px] items-start justify-center">
        {options.map(({ label, value }) => (
          <label
            key={value}
            className="flex flex-row gap-[36px] text-[15px] text-[#363732] font-sans items-center"
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
  );
}

export default RadioInput;
