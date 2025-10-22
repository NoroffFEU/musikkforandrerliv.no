import { useState } from 'react';

import { mockContactFormSubmit } from '../mocks/mockContactForm';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await mockContactFormSubmit(formData);
      setStatus('success');
      alert(response.message);
    } catch (error) {
      setStatus('error');
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="subject" onChange={handleChange} placeholder="Subject" />
      <textarea name="message" onChange={handleChange} placeholder="Message" />
      <label>
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
        />
        I agree to the privacy policy
      </label>
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
