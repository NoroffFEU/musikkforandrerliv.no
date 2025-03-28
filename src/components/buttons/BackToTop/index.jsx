import { useEffect, useState } from 'react';

/**
 * BackToTop Component
 *
 * This component renders a "Back to Top" button that becomes visible when the user scrolls down
 * a certain distance (300px). When clicked, it smoothly scrolls the page back to the top.
 *
 * @component
 * @returns {JSX.Element} A button element that scrolls the page to the top when clicked.
 *
 * @example
 * <BackToTop />
 *
 * @description
 * - The button is styled as a fixed circular element positioned at the bottom-right corner of the screen.
 * - The visibility of the button is toggled based on the user's scroll position.
 *
 * @hook useState
 * - Manages the visibility state of the button.
 *
 * @hook useEffect
 * - Adds and cleans up a scroll event listener to toggle the button's visibility.
 *
 * @function scrollToTop
 * - Smoothly scrolls the window to the top when the button is clicked.
 *
 * @accessibility
 * - Includes an `aria-label` attribute for screen readers to describe the button's purpose.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-[var(--color-sunset-red)] w-[70px] h-[70px] p-4 rounded-full shadow-lg flex flex-col items-center justify-center transition-opacity duration-300 hover:opacity-90 cursor-pointer"
      style={{ display: visible ? 'flex' : 'none' }}
      aria-label="Back to top"
    >
      {/* Arrow icon */}
      <div className="relative top-[10px]">
        <span className="font-medium text-3xl">⌃</span>
      </div>

      {/* Text */}
      <span className="text-[8px] font-|var(--font-sans)] font-medium truncate pb-7">
        BACK TO TOP
      </span>
    </button>
  );
}
