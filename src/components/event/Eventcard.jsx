import React from 'react';

const EventCard = ({
  title = 'Event Title',
  date = '2025-06-15',
  image,
  description = 'Short description here.',
  tags = [],
  link = '#',
}) => {
  return (
    <div className="flex flex-col items-center w-[340px]">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-[340px] object-cover rounded-t-2xl"
        />
      )}

      <div className="flex flex-col gap-2 mt-4 font-montserrat w-[276px]">
        <time
          dateTime={date}
          className="text-sm text-[var(--color-dark-green)]"
        >
          {date}
        </time>

        <div className="flex items-center justify-between">
          <h2 className="font-freeman text-[30px] font-bold leading-[150%] max-w-[90%]">
            {title}
          </h2>
          <a href={link} className="shrink-0 mt-1">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.20261 8.02822C9.73846 8.56533 9.73846 9.4376 9.20261 9.97471L2.34379 16.8497C1.80794 17.3868 0.93773 17.3868 0.401884 16.8497C-0.133961 16.3126 -0.133961 15.4403 0.401884 14.9032L6.2919 8.99932L0.406171 3.09541C-0.129675 2.5583 -0.129675 1.68604 0.406171 1.14893C0.942016 0.611816 1.81223 0.611816 2.34807 1.14893L9.2069 8.02393L9.20261 8.02822Z"
                fill="#EE6352"
              />
            </svg>
          </a>
        </div>

        <p className="text-sm text-black font-montserrat leading-[130%]">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 text-black px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
