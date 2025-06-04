import React from 'react';
import TextInput from '../../components/supportForms/TextInput';

// ...other imports
const ContactForm = () => {
    return (
      <form className="max-w-4xl mx-auto p-6 bg-[#B2CAC2] mt-50 shadow-md rounded-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
  
        <div className="grid grid-cols-1 font-montserrat md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4 ">
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
  
        {/* Radio Buttons Section with controlled width */}
        <div className="mt-8 flex flex-col items-center  rounded-sm bg-gray-200 w-72 mx-auto">
          <h3 className="text-lg font-semibold mb-4">I'm interested in:</h3>
          <div className="flex flex-col gap-4">
            <label className="inline-flex items-center">
              <input type="radio" name="interest" value="volunteering" className="form-radio" />
              <span className="ml-2">Volunteering</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="interest" value="fundraising" className="form-radio" />
              <span className="ml-2">Fundraising</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="interest" value="ticket" className="form-radio" />
              <span className="ml-2">Ticket/Registration</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="interest" value="other" className="form-radio" />
              <span className="ml-2">Other</span>
            </label>
          </div>
        </div>
  
        <p className="mt-6 ">
          By clicking Submit, you agree to our Terms & Conditions, and that you
          have read our Privacy Policy.
        </p>
      </form>
    );
  };
  
  export default ContactForm;
  