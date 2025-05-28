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
    <div className="p-6 text-black font-sans">
      <h2 className="text-2xl font-bold mb-4">Contact details</h2>
      {team.map((member, index) => (
        <div key={index} className="mb-6">
          <p className="font-bold">{member.role}</p>
          <p>{member.name}</p>
          <p>
            Email:{' '}
            <a href={`mailto:${member.email}`} className="text-blue-700">
              {member.email}
            </a>
          </p>
          {member.phone && <p>Phone number/WhatsApp: {member.phone}</p>}
        </div>
      ))}
      <p>You can always reach out to us on our social: </p>
    </div>
  );
};
