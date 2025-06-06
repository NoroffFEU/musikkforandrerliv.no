import { useState } from 'react';

import { motion } from 'framer-motion';

const EngagementButtons = () => {
  const [liked, setLiked] = useState(() => {
    return localStorage.getItem('likedEvent') === 'true';
  });

  const handleLike = () => {
    setLiked((prev) => {
      const newValue = !prev;
      localStorage.setItem('likedEvent', newValue);
      return newValue;
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'MMF – Event',
        text: 'Join us for this incredible fundraising gala by Music Makes Futures!',
        url: window.location.href,
      });
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <div className="flex items-center gap-[2px] mt-10 ml-2">
      {/* Like Button */}
      <button
        onClick={handleLike}
        aria-label="Like this event"
        className="flex items-center gap-[2px] cursor-pointer px-[10px] py-[3px] rounded-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        <motion.svg
          className="w-[11px] h-[10px]"
          viewBox="0 0 12 11"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ scale: liked ? 1.2 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          fill={liked ? '#E01E5A' : 'none'}
        >
          <path
            d="M5.35117 10.2279L5.29746 10.1753L1.5334 6.45452C0.873828 5.80276 0.5 4.88801 0.5 3.92981V3.85435C0.5 2.24439 1.57422 0.863117 3.06094 0.56125C3.90742 0.387448 4.77324 0.595553 5.46289 1.11239C5.65625 1.25875 5.83672 1.42797 6 1.62236C6.09023 1.51259 6.18691 1.41197 6.29004 1.3182C6.36953 1.24503 6.45117 1.17642 6.53711 1.11239C7.22676 0.595553 8.09258 0.387448 8.93906 0.558963C10.4258 0.86083 11.5 2.24439 11.5 3.85435V3.92981C11.5 4.88801 11.1262 5.80276 10.4666 6.45452L6.70254 10.1753L6.64883 10.2279C6.47266 10.4017 6.24062 10.5 6 10.5C5.75938 10.5 5.52734 10.404 5.35117 10.2279Z"
            stroke="#000"
            strokeWidth={liked ? 0 : 1.25}
          />
        </motion.svg>
        <span
          className="text-sm font-normal leading-none tracking-tight"
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#000000',
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          Like
        </span>
      </button>

      {/* Share Button */}
      <button
        onClick={handleShare}
        aria-label="Share this event"
        className="flex items-center gap-[2px] cursor-pointer px-[10px] py-[3px] rounded-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        <svg
          className="w-[11px] h-[11px]"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 6C11.5 2.96211 9.03789 0.5 6 0.5C2.96211 0.5 0.5 2.96211 0.5 6C0.5 8.57812 2.27676 10.7437 4.67227 11.3389V7.68008H3.53789V6H4.67227V5.27598C4.67227 3.40469 5.51875 2.53672 7.35781 2.53672C7.70586 2.53672 8.30742 2.60547 8.55449 2.67422V4.19531C8.42559 4.18242 8.2 4.17383 7.91855 4.17383C7.01621 4.17383 6.66816 4.51543 6.66816 5.40273V6H8.46426L8.15488 7.68008H6.66602V11.4592C9.39023 11.1305 11.5 8.8123 11.5 6Z"
            fill="#000000"
          />
        </svg>
        <span
          className="text-sm font-normal leading-none tracking-tight"
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#000000',
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          Share
        </span>
      </button>
    </div>
  );
};

export default EngagementButtons;
