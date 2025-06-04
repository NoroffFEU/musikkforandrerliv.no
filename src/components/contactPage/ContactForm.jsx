import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-[32px] leading-[120%] tracking-[0] font-[600] font-montserrat mb-6 text-left">
        Contact form
      </h2>
      {submitted && (
        <div className="bg-green-100 text-green-800 p-4 mb-6 rounded-lg text-center font-medium text-[32px] leading-[120%] tracking-[0] font-montserrat">
          Thank you - Your message has been sent!
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block font-normal mb-[10px] text-[18px] leading-[150%] tracking-[0] font-montserrat"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-label="Name"
            className="w-full bg-white px-15 border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-normal mb-[10px] text-[18px] leading-[150%] tracking-[0] font-montserrat"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-label="Email"
            className="w-full border bg-white px-15 border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block font-normal mb-[10px] text-[18px] leading-[150%] tracking-[0] font-montserrat"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            aria-label="Subject"
            className="w-full border bg-white px-15 border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-normal mb-[10px] text-[18px] leading-[150%] tracking-[0] font-montserrat"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            aria-label="Message"
            className="w-full border bg-white px-15 border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center bg-transparent text-black font-semibold rounded-[9px] border border-black px-[30px] py-[20px] gap-[10px] hover:bg-black hover:text-white transition duration-200 font-montserrat text-[24px] leading-[100%] tracking-[0] capitalize cursor-pointer"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
