import React from 'react';

const ReusableButton = ({
  text,
  onClick,
  href,
  className = '',
  type = 'button',
}) => {
  const baseClasses =
    'inline-block border border-black text-black font-freeman px-6 py-2 rounded cursor-pointer ' +
    'hover:bg-gray-100 hover:scale-105 transform transition duration-200 ' +
    'focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2';

  // if href then renders as a <a> tag
  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`} aria-label={text}>
        {text}
      </a>
    );
  }

  // if not then renders as a button
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      aria-label={text}
    >
      {text}
    </button>
  );
};

//  how to use the buttons
//  <ReusableButton text="READ MORE" onClick={() => alert('Clicked')} />
//  <ReusableButton text="SEE GALLERY" href="/gallery" />

export default ReusableButton;