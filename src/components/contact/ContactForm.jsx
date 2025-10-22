import { useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * ContactForm Component
 * 
 * A comprehensive contact form with validation, accessibility features, and GDPR compliance.
 * Handles form state, validation, and prepares data for API submission.
 * 
 * @component
 * @param {Object} props
 * @param {Function} props.onSubmit - Callback function for form submission
 * @returns {JSX.Element} Contact form with validation and accessibility features
 */
const ContactForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gdprConsent, setGdprConsent] = useState(false);
  
  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length >= 2 ? '' : 'Name must be at least 2 characters long';
      case 'email':
        return validateEmail(value) ? '' : 'Please enter a valid email address';
      case 'subject':
        return value.trim().length >= 3 ? '' : 'Subject must be at least 3 characters long';
      case 'message':
        return value.trim().length >= 10 ? '' : 'Message must be at least 10 characters long';
      default:
        return '';
    }
  };
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    // Check GDPR consent
    if (!gdprConsent) {
      newErrors.gdpr = 'You must agree to the privacy policy to continue';
    }
    
    setErrors(newErrors);
    
    // If no errors, submit form
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Prepare data for API
        const submissionData = {
          ...formData,
          gdprConsent,
          timestamp: new Date().toISOString()
        };
        
        await onSubmit(submissionData);
        
        // Reset form on successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setGdprConsent(false);
      } catch (error) {
        console.error('Form submission error:', error);
        setErrors({ submit: 'There was an error sending your message. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div className="p-6 h-fit">
      <h2 className="text-2xl font-bold mb-6 text-left text-gray-800">Contact form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-400'
            }`}
            placeholder="Enter your full name"
            aria-describedby={errors.name ? 'name-error' : undefined}
            required
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        
        {/* Email Field */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-400'
            }`}
            placeholder="your.email@example.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        
        {/* Subject Field */}
        <div>
          <label 
            htmlFor="subject" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.subject ? 'border-red-500' : 'border-gray-400'
            }`}
            placeholder="Brief subject of your message"
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            required
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.subject}
            </p>
          )}
        </div>
        
        {/* Message Field */}
        <div>
          <label 
            htmlFor="message" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 bg-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical ${
              errors.message ? 'border-red-500' : 'border-gray-400'
            }`}
            placeholder="Please describe your inquiry or message in detail..."
            aria-describedby={errors.message ? 'message-error' : undefined}
            required
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>
        
        {/* Submit Error */}
        {errors.submit && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert">
            {errors.submit}
          </div>
        )}
        
        {/* Submit Button */}
        <div className="flex justify-center sm:justify-start">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-2 rounded-lg font-bold text-lg transition-colors duration-200 border-2 ${
              isSubmitting
                ? 'bg-transparent border-gray-300 text-gray-400 cursor-not-allowed'
                : 'bg-transparent border-black text-black hover:bg-gray-100 focus:bg-gray-100'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300`}
            aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
          >
            {isSubmitting ? 'SENDING...' : 'SEND'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;