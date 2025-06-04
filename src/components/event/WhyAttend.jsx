import React, { useState } from 'react';

import { FaHeart, FaShareAlt } from 'react-icons/fa';

const WhyAttend = () => {
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
    <div className="w-full max-w-[1000px] mx-auto px-4 pb-10 md:pb-[60px] font-montserrat text-[#212121]">
      <h2 className="font-semibold text-xl md:text-[32px] mt-10 md:mt-16 mb-4 leading-snug md:leading-[150%]">
        Why Attend?
      </h2>

      <p className="text-sm md:text-[18px] mb-6 md:mb-8 leading-relaxed md:leading-[160%]">
        The Back-to-School Fundraiser Gala is more than a gathering; it's a
        pivotal moment...
      </p>

      <p className="text-sm md:text-[18px] mt-6 leading-relaxed md:leading-[160%]">
        Music Makes Futures (MMF) – Transforming lives through the power of
        education and music.
      </p>

      <div className="flex items-center gap-6 mt-10">
        <button
          onClick={handleLike}
          aria-label="Like this event"
          className={`text-2xl transition cursor-pointer ${
            liked ? 'text-red-500' : 'text-gray-400'
          }`}
        >
          <FaHeart />
        </button>
        <button
          onClick={handleShare}
          aria-label="Share this event"
          className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <FaShareAlt />
        </button>
      </div>
    </div>
  );
};

export default WhyAttend;
