import { useState } from 'react';

import { FaFacebookF, FaHeart, FaRegHeart } from 'react-icons/fa';

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
    <div className="flex items-center gap-6 mt-6 text-sm">
      <button
        onClick={handleLike}
        aria-label="Like this event"
        className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition cursor-pointer"
      >
        {liked ? (
          <FaHeart className="text-red-500 text-lg" />
        ) : (
          <FaRegHeart className="text-lg" />
        )}
        <span>Like</span>
      </button>

      <button
        onClick={handleShare}
        aria-label="Share this event"
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition cursor-pointer"
      >
        <FaFacebookF className="text-lg" />
        <span>Share</span>
      </button>
    </div>
  );
};

export default EngagementButtons;
