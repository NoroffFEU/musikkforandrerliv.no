import React from 'react';

const TextInput = ({ label, id, type = 'text', required = false }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={label} 
        className="w-full p-2 border border-black bg-gray-100 rounded-md placeholder-gray-600 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default TextInput;
