import { useState, useEffect, useCallback } from 'react';

/**
 * ContactMessage Component
 * 
 * Displays success, error, or loading messages for contact form submissions.
 * Provides accessible notifications with auto-dismiss functionality.
 * 
 * @component
 * @param {Object} props
 * @param {string} props.type - Message type: 'success', 'error', 'loading'
 * @param {string} props.message - Message text to display
 * @param {Function} props.onClose - Callback when message is dismissed
 * @param {number} props.autoClose - Auto-close timeout in milliseconds (default: 5000)
 * @returns {JSX.Element|null} Message component or null if no message
 */
const ContactMessage = ({ 
  type = 'success', 
  message = '', 
  onClose = () => {}, 
  autoClose = 5000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    if (autoClose && type !== 'loading') {
      const timer = setTimeout(() => {
        handleClose();
      }, autoClose);
      
      return () => clearTimeout(timer);
    }
  }, [autoClose, type, handleClose]);
  
  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for fade out animation
  }, [onClose]);
  
  if (!message) return null;
  
  const getMessageStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50 border-green-200',
          text: 'text-green-800',
          icon: 'text-green-400'
        };
      case 'error':
        return {
          bg: 'bg-red-50 border-red-200',
          text: 'text-red-800',
          icon: 'text-red-400'
        };
      case 'loading':
        return {
          bg: 'bg-blue-50 border-blue-200',
          text: 'text-blue-800',
          icon: 'text-blue-400'
        };
      default:
        return {
          bg: 'bg-gray-50 border-gray-200',
          text: 'text-gray-800',
          icon: 'text-gray-400'
        };
    }
  };
  
  const styles = getMessageStyles();
  
  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className={`w-6 h-6 ${styles.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'error':
        return (
          <svg className={`w-6 h-6 ${styles.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case 'loading':
        return (
          <div className={`w-6 h-6 ${styles.icon}`}>
            <svg className="animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="m12 2a10 10 0 0 0-10 10h4a6 6 0 0 1 6-6V2z"></path>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div 
      className={`fixed top-4 right-4 z-50 max-w-md w-full transform transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      role="alert"
      aria-live="polite"
    >
      <div className={`border rounded-lg p-4 shadow-lg ${styles.bg}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          
          <div className="ml-3 flex-1">
            <p className={`text-sm font-medium ${styles.text}`}>
              {type === 'success' && 'Success!'}
              {type === 'error' && 'Error'}
              {type === 'loading' && 'Sending...'}
            </p>
            <p className={`mt-1 text-sm ${styles.text} opacity-80`}>
              {message}
            </p>
          </div>
          
          {type !== 'loading' && (
            <div className="ml-4 flex-shrink-0 flex">
              <button
                onClick={handleClose}
                className={`inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors duration-200`}
                aria-label="Close notification"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * ContactNotifications Component
 * 
 * Container component for managing multiple contact form notifications.
 * Handles showing success, error, and loading states for form submissions.
 * 
 * @component
 * @param {Object} props
 * @param {Object} props.notifications - Current notification state
 * @param {Function} props.clearNotifications - Function to clear all notifications
 * @returns {JSX.Element} Notification container
 */
export const ContactNotifications = ({ notifications, clearNotifications }) => {
  if (!notifications) return null;
  
  return (
    <>
      {notifications.success && (
        <ContactMessage
          type="success"
          message={notifications.success}
          onClose={clearNotifications}
        />
      )}
      
      {notifications.error && (
        <ContactMessage
          type="error"
          message={notifications.error}
          onClose={clearNotifications}
        />
      )}
      
      {notifications.loading && (
        <ContactMessage
          type="loading"
          message={notifications.loading}
          onClose={() => {}} // Don't allow manual close for loading
          autoClose={0} // Don't auto-close loading messages
        />
      )}
    </>
  );
};

export default ContactMessage;