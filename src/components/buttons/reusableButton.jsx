import React from 'react';
import { Link } from 'react-router-dom'

const ReusableButton = ({
  text,
  onClick,
  href,
  className = '',
  type = 'button',
}) => {
  const baseClasses =
    'inline-block border border-black text-black font-freeman px-[clamp(0.5rem,1.5vw,1.5rem)] py-[clamp(0.5rem,1.5vw,1rem)] rounded-lg cursor-pointer ' +
    'hover:bg-gray-100 hover:scale-105 transform transition duration-200 ' +
    'focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2';

  // if href then renders as a <a> tag
  if (href) {
    return (
      <Link to={href} className={`${baseClasses} ${className}`} aria-label={text}>
        {text}
      </Link>
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