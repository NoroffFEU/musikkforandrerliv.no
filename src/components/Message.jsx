import React, { useEffect, useState } from 'react';

function Message({ text, type = 'default' }) {
  const getColor = () => {
    switch (type) {
      case 'error':
        return '#a62929';
      case 'warning':
        return '#d47726';
      case 'success':
        return 'var(--color-primary-green)';
      default:
        return 'var(--color-dark-green)';
    }
  };

  const color = getColor();

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      setVisible(true);
    }, 10);
    const fadeOutTimeout = setTimeout(() => {
      setVisible(false);
    }, 2700);
    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(fadeOutTimeout);
    };
  }, []);

  return (
    <div
      style={{
        border: `2px solid ${color}`,
      }}
      className={`fixed bottom-5 left-5 mr-5 right-0 rounded-lg p-3 w-fit shadow-md bg-white z-[1000] transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <p style={{ color }}>{text}</p>
    </div>
  );
}

export default Message;
