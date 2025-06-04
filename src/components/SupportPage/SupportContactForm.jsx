// ContactForm.jsx
import React from 'react';
import TextInput from '../../components/supportForms/TextInput';
import RadioGroup from '../../components/supportForms/RadioGroup'; // ✅ Import RadioGroup

const ContactForm = () => {
  return (
    <form className="max-w-4xl mx-auto p-6 bg-[#B2CAC2] mt-20 shadow-md rounded-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      <div className="grid grid-cols-1 font-montserrat md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <TextInput label="First Name" id="firstName" required />
          <TextInput label="Email" id="email" type="email" required />
          <TextInput label="Address" id="address" required />
          <TextInput label="City" id="city" required />
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <TextInput label="Last Name" id="lastName" required />
          <TextInput label="Phone Number" id="phone" type="tel" required />
          <TextInput label="Postal Code" id="postalCode" required />
          <TextInput label="Country" id="country" required />
        </div>
      </div>

      {/* ✅ RadioGroup component */}
      <div className="mt-10 w-72 mx-auto bg-gray-200 p-4 rounded">
        <RadioGroup
          label="I'm interested in:"
          name="interest"
          required
          options={[
            { label: 'Volunteering', value: 'volunteering' },
            { label: 'Fundraising', value: 'fundraising' },
            { label: 'Ticket/Registration', value: 'ticket' },
            { label: 'Other', value: 'other' },
          ]}
        />
      </div>

      <p className="mt-6">
        By clicking Submit, you agree to our Terms & Conditions, and that you
        have read our Privacy Policy.
      </p>
    </form>
  );
};

export default ContactForm;
