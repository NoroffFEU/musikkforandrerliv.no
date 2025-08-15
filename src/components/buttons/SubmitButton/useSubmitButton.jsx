import { useEffect, useState } from 'react';

/**
 * Custom hook to manage the state of a submit button,
 * handling loading and success states based on the async submit action.
 *
 * @param {Function} onSubmit - An async function to be called when the submit action is triggered.
 *
 * @returns {Object} - An object containing:
 *   - isLoading {boolean} — true when the submit action is in progress.
 *   - isSuccess {boolean} — true when the submit action completed successfully.
 *   - handleClick {Function} — function to trigger the submit action.
 */
export const useSubmitButton = (onSubmit) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onSubmit();
      setTimeout(() => {}, 5000);
      setIsSuccess(true);
    } catch (error) {
      console.error('Submit failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return { isLoading, isSuccess, handleClick };
};
