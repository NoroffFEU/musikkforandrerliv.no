import { useState } from 'react';

/**
 * MissionStatement Component
 *
 * A responsive section that displays an image and a mission statement.
 * - On large screens: image and text are side by side
 * - On smaller screens: the mission text is initially truncated with a fade effect
 *   and can be expanded using a toggle button with an accessible arrow icon
 *
 * Features:
 * - Expand/collapse functionality for mission text on mobile
 * - Gradient fade to indicate more content
 * - Accessible toggle button with dynamic `aria-label` and `sr-only` text
 * - Fully responsive layout using Tailwind CSS
 * 
 * ⚠️ Known issues:
 * - On the contact page, the top and bottom of this component may appear cut off. This is likely due to
 *   layout or scroll constraints outside this component and needs to be addressed at the page level. This happens within the top div that contains the h1 and h2.
 * - The "READ MORE" and "DONATE" buttons are static/mock buttons and currently do not navigate or trigger any action.
 * - I am missing many of the colors and font sizes in index.css amongst the variables, for example the CTA button color, the black text color, and font sizes that are different from Tailwinds' kit (like 32px). I have used the correct fonts and colors but hope that they can be replaced with variables later on.

 */

export default function MissionStatement() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[var(--color-mint-green)] w-full font-sans p-20 ">
      <div className="flex flex-col lg:flex-row flex-wrap justify-center m-auto lg:items-start items-center max-w-[1200px] gap-20">
        <div className="w-full xl:max-w-[600px] max-w-[400px] aspect-square ">
          <img
            src="/assets/placeholder-images/IMG_6438.webp"
            alt="Two young children smiling, one holding a small violin."
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-6 max-w-96 text-center lg:text-left">
          <h2 className="text-[32px] font-bold  ">
            Our mission
          </h2>

          {/* Expandable paragraph wrapper */}
          <div
            className={`relative transition-all duration-500 ease-in-out ${
              expanded ? 'max-h-full' : 'max-h-[160px] overflow-hidden'
            } lg:max-h-full lg:overflow-visible`}
          >
            <p className="text-black leading-relaxed text-lg m-auto">
              The funds that come in go towards covering everything from food,
              clothing, education, equipment, healthcare, medicines, and dental
              care for the children, as well as the operation of the music
              school and salaries for our staff. The families of the children
              are also included in the food program and receive monthly
              distributions of food and hygiene products. We are constantly
              working to improve the living conditions of the children, and we
              use much of the surplus we have to repair houses and homes.
            </p>

            {/* Fade overlay */}
            {!expanded && (
              <div className="lg:hidden pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[var(--color-mint-green)] to-transparent" />
            )}
          </div>

          {/* Toggle button for mobile */}
          <button
            className="lg:hidden mt-2 flex justify-center w-full hover:cursor-pointer"
            onClick={() => setExpanded(!expanded)}
            aria-label={
              expanded ? 'Collapse mission text' : 'Expand mission text'
            }
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="block"
            >
              <path d={expanded ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
            </svg>
            <span className="sr-only">
              {expanded ? 'Collapse mission text' : 'Expand mission text'}
            </span>
          </button>

          {/* Action buttons */}
          <div className="flex gap-4 py-8 flex-wrap justify-center lg:justify-start">
            <button
              className="
    border border-black font-semibold text-black text-2xl
    px-6 py-2 rounded-lg hover:cursor-pointer
    focus:outline-none focus:ring-0 focus:border-2 focus:border-black focus:bg-white
  "
            >
              READ MORE
            </button>

            <button
              className="    bg-white text-[#EF476F] font-semibold text-2xl
    px-4 py-2 rounded-lg border-2 border-transparent
    hover:cursor-pointer hover:text-white hover:bg-[#EF476F]
    focus:outline-none focus:border-[#EF476F]
    focus:bg-white focus:text-[#EF476F]
    transition"
            >
              DONATE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
