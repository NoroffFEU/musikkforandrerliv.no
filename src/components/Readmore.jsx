import { useState } from "react";

export default function ReadMore({ summary, content }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-6 mb-4">
      <div
        className={`relative transition-all duration-500 ease-in-out ${
          !expanded ? "max-h-[200px] overflow-hidden" : "max-h-[1000px]"
        }`}
      >
        <p className="text-gray-600">{expanded ? content : summary}</p>
        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-sm text-black font-semibold border border-black px-4 py-2 rounded-md hover:underline"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
