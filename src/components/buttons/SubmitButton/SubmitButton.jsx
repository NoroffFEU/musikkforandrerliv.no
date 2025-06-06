import React from 'react';

import { FiCheck } from 'react-icons/fi';

import { useSubmitButton } from './useSubmitButton';

/**
 * SubmitButton component shows a button that handles async submit state.
 *
 * Props:
 * @param {function} onClick - Async function to call on button click (submit handler).
 * @param {string} [label='Submit'] - Text label displayed on the button when idle.
 * @param {string} [className=''] - Additional CSS classes to apply for styling.
 *
 * Behavior:
 * - Shows loading animation while the submit is in progress.
 * - Shows a checkmark icon on successful submit for 2 seconds.
 * - Disables button while loading or after success.
 */
export const SubmitButton = ({ onClick, label = 'Submit', className = '' }) => {
  const { isLoading, isSuccess, handleClick } = useSubmitButton(onClick);

  return (
    <button
      onClick={handleClick}
      disabled={isLoading || isSuccess}
      className={`px-8 py-6 rounded-md font-medium text-black transition
        flex justify-center items-center text-center gap-2 relative overflow-hidden
        ${isSuccess ? 'bg-white' : 'bg-transparent hover:bg-blue-700'} border border-black
        disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      aria-live="polite"
      aria-busy={isLoading}
    >
      {isLoading && (
        <span className="relative w-8 h-8 flex items-center justify-center">
          <span className="absolute w-6 h-6 bg-black/25 rounded-full animate-ping-slow delay-0"></span>
          <span className="absolute w-4 h-4 bg-black/50 rounded-full animate-ping-slow delay-400"></span>
          <span className="absolute w-2.5 h-2.5 bg-black/80 rounded-full animate-ping-slow delay-800"></span>
          <span className="w-2 h-2 bg-black rounded-full z-10"></span>
        </span>
      )}

      {isSuccess && (
        <span className="flex items-center gap-2 [color:var(--color-dark-charcoal)]">
          <FiCheck size={45} />
        </span>
      )}

      {!isLoading && !isSuccess && (
        <span className="[font-family:var(--font-sans)] text-xl [color:var(--color-dark-charcoal)]">
          {label}
        </span>
      )}
    </button>
  );
};
