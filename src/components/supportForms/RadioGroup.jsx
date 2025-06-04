import React from 'react';

const RadioGroup = ({ label, name, options = [], required = false }) => {
  return (
    <div className="mt-8">
      <p className="font-medium mb-2">{label}</p>
      <div className="flex flex-wrap gap-4">
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
