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
                className="text-black hover:underline"
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
                  className="text-black hover:underline"
                  aria-label={`Call ${contact.name}`}
                >
                  {contact.phone}
                </a>
              </p>
            )}
          </div>
        ))}
        
        {/* Social Media Section */}
        <div className="pt-4 text-center sm:text-left">
          <p className="text-gray-800 mb-3">You can always reach out us on our social:</p>
          <div className="flex justify-center sm:justify-start space-x-8">
            {socialLinks.map((social, index) => (
              <div key={index} className="flex flex-col items-center">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-black rounded-full hover:bg-gray-800 transition-colors duration-200 mb-2"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  {social.icon === 'facebook' && (
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" fill="none" stroke="white" strokeWidth="2"/>
                      <path d="M16 5h-2a3 3 0 0 0-3 3v2H9v3h2v8h3v-8h2l1-3h-3V8a1 1 0 0 1 1-1h2z" fill="white"/>
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="white"/>
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