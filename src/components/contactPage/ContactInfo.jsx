// Mock data for team members used until cms is set up with contact information
import { SocialLinks } from './SocialLinks';

const team = [
  {
    name: 'Dina Andriamanalina',
    role: 'Leader Madagascar',
    email: 'dina7dina@yahoo.co.uk',
    phone: '+261347889977',
  },
  {
    name: 'Eline Rodvelt Hansen',
    role: 'Leader Norway',
    email: 'enilerodvelt@gmail.com',
  },
  {
    name: 'Karoline Hartvigsen',
    role: 'Next-leader',
    email: 'mmf.karoline@gmail.com',
  },
  {
    name: 'Thea Harbo',
    role: 'Board member',
    email: 'mmf.thea@gmail.com',
  },
];

export const ContactInfo = () => {
  return (
    <div className="text-black font-sans md:text-left text-center">
      <h2 className="text-[32px] font-[600] font-montserrat mb-6">
        Contact details
      </h2>
      {team.map((member, index) => (
        <div key={index} className="mb-10">
          <p className="font-semibold">{member.role}</p>
          <p className="text-[18px]">{member.name}</p>
          <p className="text-[18px]">
            Email:{' '}
            <a
              href={`mailto:${member.email}`}
              className="text-blue-700 text-[18px] pr-5"
            >
              {member.email}
            </a>
          </p>
          {member.phone && <p>Phone number/WhatsApp: {member.phone}</p>}
        </div>
      ))}
      <p className="text-[18px]">
        You can always reach out to us on our social:{' '}
      </p>
      <SocialLinks />
    </div>
  );
};
