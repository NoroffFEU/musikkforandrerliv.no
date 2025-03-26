import { useState } from "react";

export default function ReadMore({ summary, content }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-6 mb-4">
      <p className="text-gray-600">{expanded ? content : summary}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-sm text-black font-semibold hover:underline"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
