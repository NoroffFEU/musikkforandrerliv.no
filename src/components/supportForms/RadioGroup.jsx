import React from 'react';

const RadioGroup = ({ label, name, options = [], required = false }) => {
  return (
    <div className="mt-8 w-72 mx-auto bg-gray-200 p-4 rounded">
      <p className="font-medium mb-4 text-center">{label}</p>
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              value={option.value}
              required={required}
              className="accent-black"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
