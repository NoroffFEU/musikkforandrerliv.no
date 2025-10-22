import { useState } from 'react';

import ErrorBoundary from '../components/ErrorBoundary.jsx';
import BackToTopButton from '../components/buttons/BackToTopButton.jsx';
import ContactForm from '../components/contact/ContactForm.jsx';
import ContactInfo from '../components/contact/ContactInfo.jsx';
import { ContactNotifications } from '../components/contact/ContactMessage.jsx';
import ContactMission from '../components/contact/ContactMission.jsx';
import { mockContactFormSubmit } from '../mocks/mockContactForm.js';

/**
 * Contact Page Component
 *
 * Main contact page that combines mission section, contact form, and contact information.
 * Handles form submissions and notifications. Prepared for Mailchimp integration.
 *
 * @component
 * @returns {JSX.Element} Complete contact page with form and information
 */
function Contact() {
  const [notifications, setNotifications] = useState(null);

  /**
   * Handle contact form submission using mock API
   *
   * @param {Object} formData - Form data including name, email, subject, message, consent
   */
  const handleFormSubmit = async (formData) => {
    setNotifications({ loading: 'Sending your message...' });

    try {
      const result = await mockContactFormSubmit(formData);
      setNotifications({ success: result.message });
    } catch (error) {
      setNotifications({ error: error.message });
    }
  };

  /**
   * Clear all notifications
   */
  const clearNotifications = () => {
    setNotifications(null);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {/* Page Title */}
        <div className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-justAnotherHand mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with us to learn more about how music changes lives.
              We'd love to hear from you and answer any questions you may have.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <ContactMission />

        {/* Contact Form and Info Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#B2CAC2] rounded-lg p-8">
              {/* Mobile Layout */}
              <div className="lg:hidden space-y-8">
                <ContactForm onSubmit={handleFormSubmit} />
                <ContactInfo />
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:flex lg:relative">
                {/* Contact Info */}
                <div className="flex-1 pr-6">
                  <ContactInfo />
                </div>

                {/* Divider */}
                <div
                  className="bg-black absolute left-1/2 transform -translate-x-1/2"
                  style={{ top: '80px', bottom: '200px', width: '0.1px' }}
                ></div>

                {/* Contact Form */}
                <div className="flex-1 pl-6">
                  <ContactForm onSubmit={handleFormSubmit} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <ContactNotifications
          notifications={notifications}
          clearNotifications={clearNotifications}
        />

        {/* Back to Top Button */}
        <BackToTopButton />
      </div>
    </ErrorBoundary>
  );
}

export default Contact;
