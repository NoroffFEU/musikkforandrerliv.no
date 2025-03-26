import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import supportData from "../../data/support.json";

const SupportSection = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section
      aria-labelledby="support-heading"
      className="grid md:grid-cols-2 grid-cols-1 gap-10 bg-[color:var(--color-light-green)] p-10"
    >
      <figure className="flex justify-center m-0">
        {supportData?.image && (
          <img
            src={supportData.image}
            alt={supportData.imageAlt || "Support Image"}
            className="w-full h-[400px] object-contain rounded-lg"
            loading="lazy"
            width="600"
            height="400"
          />
        )}
      </figure>

      <article className="flex flex-col justify-center space-y-[24px]">
        <header className="flex justify-between items-center">
          <h2
            id="support-heading"
            className="text-[24px] font-bold text-[color:var(--color-dark-charcoal)] font-[var(--font-sans)]"
          >
            {supportData?.title || "Support Us"}
          </h2>

          <button
            onClick={toggleText}
            aria-expanded={showFullText}
            aria-controls="support-content"
            className="text-white font-semibold text-2xl md:hidden cursor-pointer p-2"
            aria-label={
              showFullText ? "Show less content" : "Show more content"
            }
          >
            {showFullText ? (
              <IoIosArrowDown aria-hidden="true" />
            ) : (
              <IoIosArrowForward aria-hidden="true" />
            )}
          </button>
        </header>

        <div className="relative">
          <p
            id="support-content"
            className={`text-[18px] font-normal text-[color:var(--color-dark-charcoal)] font-[var(--font-sans)] ${
              !showFullText
                ? "max-h-[100px] md:max-h-none overflow-hidden md:overflow-visible"
                : ""
            }`}
          >
            {supportData?.content || "No content available"}
          </p>

          {!showFullText && (
            <div
              className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[color:var(--color-light-green)] to-transparent md:hidden"
              aria-hidden="true"
            ></div>
          )}
        </div>

        <footer
          className={`flex gap-5 items-center flex-wrap ${
            !showFullText ? "hidden md:flex" : "flex"
          }`}
        >
          {supportData?.buttons?.readMore && (
            <a
              href={supportData.buttons.readMore.url}
              className="px-5 py-2 border border-[color:var(--color-dark-charcoal)] rounded-[9px] font-semibold text-[color:var(--color-dark-charcoal)] cursor-pointer font-[var(--font-sans)]"
              aria-label="Read more about supporting us"
            >
              {supportData.buttons.readMore.text || "READ MORE"}
            </a>
          )}

          {supportData?.buttons?.donate && (
            <a
              href={supportData.buttons.donate.url}
              className="px-5 py-2 bg-[color:var(--color-sunset-red)] text-white rounded-[9px] font-semibold cursor-pointer hover:bg-[color:var(--color-hover-red)] font-[var(--font-sans)]"
              aria-label="Make a donation to support our cause"
            >
              {supportData.buttons.donate.text || "DONATE"}
            </a>
          )}
        </footer>
      </article>
    </section>
  );
};

export default SupportSection