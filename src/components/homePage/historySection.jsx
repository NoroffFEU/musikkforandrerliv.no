import React, { useState } from 'react';

import data from '../../data/landing-page-content.json';

export function HistorySection() {
  const { image, title, content } = data.history;
  const [isExpanded, setIsExpanded] = useState(false);

  // Paragraph truncated
  const TRUNCATED_HEIGHT = 'h-[120px]';

  return (
    <section className="bg-white w-full py-[78px] px-[24px]">
      <div className="max-w-[960px] mx-auto flex flex-col items-center gap-[32px]">
        {/* Heading */}
        <h2
          className="
            [font-family:var(--font-justAnotherHand)]
            text-[50px]
            leading-[100%]
            tracking-[0.05em]
            text-center
            font-normal
            md:text-[64px]
            md:leading-[120%]
            text-black
          "
        >
          {title}
        </h2>

        {/* Container holds text & fade */}
        <div className="relative w-full max-w-[800px]">
          {}
          <p
            className={`
              text-[18px]
              leading-[150%]
              tracking-[0]
              text-center
              font-normal
              font-[var(--font-sans)]
              text-black
              mx-auto
              transition-max-height duration-300 ease-in-out
              ${isExpanded ? 'max-h-[1000px]' : `${TRUNCATED_HEIGHT} overflow-hidden`}
            `}
          >
            {content}
          </p>

          {/* Fade overlay */}
          {!isExpanded && (
            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                w-full
                h-16
                bg-gradient-to-t
                from-white
                to-transparent
              "
            />
          )}
        </div>

        {/* arrow */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="
            flex
            items-center
            justify-center
            text-red-600
          "
          aria-label={isExpanded ? 'Collapse text' : 'Expand text'}
        >
          {isExpanded ? (
            /* Up arrow */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          ) : (
            /* Down arrow */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          )}
        </button>

        {/* img */}
        <img
          src={image}
          alt="History of MMF"
          className="mx-auto w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
