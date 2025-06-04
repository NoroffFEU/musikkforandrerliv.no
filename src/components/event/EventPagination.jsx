import React, { useState } from 'react';

import mockEvents from '../../data/mockUpcomingEvents';
import EventCard from './EventCard';

export default function EventPagination() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, mockEvents.length));
  };

  const handleHide = () => {
    setVisibleCount((prev) => Math.max(prev - 6, 6));

    const eventSection = document.getElementById('eventsSection');
    if (eventSection) {
      eventSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const visibleEvents = mockEvents.slice(0, visibleCount);
  const hasMore = visibleCount < mockEvents.length;
  const canHide = visibleCount > 6;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 mb-14 transition-opacity duration-300 ease-in-out">
        {visibleEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      <div className="flex justify-center gap-10 mb-14">
        {canHide && (
          <button
            type="button"
            onClick={handleHide}
            aria-label="Hide Events"
            className="transition ease-in-out hover:opacity-70 cursor-pointer"
          >
            <svg
              width="40"
              height="20"
              viewBox="0 0 40 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.791557 16.0369L18.5224 0.506869C18.7335 0.322577 18.9622 0.192267 19.2084 0.116105C19.4547 0.0386667 19.7186 0 20 0C20.2814 0 20.5453 0.0386667 20.7916 0.116105C21.0378 0.192267 21.2665 0.322577 21.4776 0.506869L39.2612 16.0369C39.7537 16.467 40 17.0046 40 17.6498C40 18.2949 39.7361 18.8479 39.2084 19.3088C38.6807 19.7696 38.0651 20 37.3615 20C36.6579 20 36.0422 19.7696 35.5145 19.3088L20 5.76043L4.48549 19.3088C3.993 19.7389 3.3865 19.9539 2.66603 19.9539C1.94411 19.9539 1.31926 19.7235 0.791557 19.2627C0.263852 18.8018 0 18.2642 0 17.6498C0 17.0353 0.263852 16.4977 0.791557 16.0369Z"
                fill="#EE6352"
              />
            </svg>
          </button>
        )}

        {hasMore && (
          <button
            type="button"
            onClick={handleLoadMore}
            aria-label="Load More Events"
            className="transition ease-in-out hover:opacity-70 cursor-pointer"
          >
            <svg
              width="40"
              height="20"
              viewBox="0 0 40 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.2084 3.96313L21.4776 19.4931C21.2665 19.6774 21.0378 19.8077 20.7916 19.8839C20.5453 19.9613 20.2814 20 20 20C19.7186 20 19.4547 19.9613 19.2084 19.8839C18.9622 19.8077 18.7335 19.6774 18.5224 19.4931L0.738786 3.96313C0.246262 3.53303 0 2.99539 0 2.35023C0 1.70507 0.263852 1.15207 0.791557 0.691244C1.31926 0.230413 1.93492 0 2.63852 0C3.34213 0 3.95778 0.230413 4.48549 0.691244L20 14.2396L35.5145 0.691244C36.007 0.261137 36.6135 0.0460815 37.334 0.0460815C38.0559 0.0460815 38.6807 0.276497 39.2084 0.737326C39.7361 1.19816 40 1.73579 40 2.35023C40 2.96467 39.7361 3.5023 39.2084 3.96313Z"
                fill="#EE6352"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}
