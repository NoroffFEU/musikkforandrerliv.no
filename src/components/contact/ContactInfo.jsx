

/**
 * ContactInfo Component
 * 
 * Displays simple organization contact information.
 * Matches the design shown in picture 2 with basic contact details.
 * 
 * @component
 * @returns {JSX.Element} Simple contact information display section
 */
const ContactInfo = () => {
  
  // Simple contact details data to match picture 2
  const contactDetails = [
    {
      role: 'Leader Madagascar',
      name: 'Dina Andriamanalina',
      email: 'dina7dina@yahoo.co.uk',
      phone: '+261 347889977'
    },
    {
      role: 'Leader Norway',
      name: 'Eline Rodvelt Hansen',
      email: 'elinerodvelt@gmail.com'
    },
    {
      role: 'Next-leader',
      name: 'Karoline Hartvigsen',
      email: 'mmf.karoline@gmail.com'
    },
    {
      role: 'Board member',
      name: 'Thea Harbø',
      email: 'mmf.thea@gmail.com'
    }
  ];
  
  const socialLinks = [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/musikkforandrerliv',
      icon: 'facebook'
    },
    {
      platform: 'Instagram', 
      url: 'https://instagram.com/musikkforandrerliv',
      icon: 'instagram'
    }
  ];
  
  return (
    <div className="p-6 h-fit text-center sm:text-left">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact details</h2>
      
      <div className="space-y-6">
        {contactDetails.map((contact, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 last:border-b-0">
            {/* Role */}
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              {contact.role}
            </h3>
            
            {/* Name */}
            <p className="text-gray-700 mb-1">
              <span className="font-medium">{contact.name}</span>
            </p>
            
            {/* Email */}
            <p className="text-gray-600 mb-1">
              <span className="text-sm">Email: </span>
              <a 
                href={`mailto:${contact.email}`}
                className="text-blue-600 hover:underline"
                aria-label={`Send email to ${contact.name}`}
              >
                {contact.email}
              </a>
            </p>
            
            {/* Phone (if available) */}
            {contact.phone && (
              <p className="text-gray-600">
                <span className="text-sm">Phone: </span>
                <a 
                  href={`tel:${contact.phone}`}
                  className="text-blue-600 hover:underline"
                  aria-label={`Call ${contact.name}`}
                >
                  {contact.phone}
                </a>
              </p>
            )}
          </div>
        ))}
        
        {/* Social Media Section */}
        <div className="pt-4 text-center">
          <p className="text-gray-800 mb-3">You can always reach out us on our social:</p>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <div key={index} className="flex flex-col items-center">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 mb-2"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  {social.icon === 'facebook' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.435-3.396-1.154-.948-.72-1.508-1.703-1.508-2.834 0-1.131.56-2.114 1.508-2.834.948-.719 2.099-1.154 3.396-1.154s2.448.435 3.396 1.154c.948.72 1.508 1.703 1.508 2.834 0 1.131-.56 2.114-1.508 2.834-.948.719-2.099 1.154-3.396 1.154zm7.718-9.919H14.35c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.817c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
                    </svg>
                  )}
                </a>
                <span className="text-sm text-gray-700">{social.platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;