export default function PrivacyPolicySection({ title }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <h2>{title.toUpperCase()}</h2>
        {/* Chevron toggle */}
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <p>
        {/* Placeholder content */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
}
