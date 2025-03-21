import { useEffect, useState } from "react";
import staffData from "../../data/staff.json";

const StaffSection = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    setStaff(staffData);
  }, []);

  return (
    <section className="py-16 bg-white flex justify-center" aria-labelledby="staff-heading">
      <div className="w-full max-w-[960px] mx-auto">
        {/* Header - Now Matches Figma */}
        <h2
          id="staff-heading"
          className="text-center text-gray-900 
            font-['Just_Another_Hand'] font-normal 
            text-[50px] sm:text-[110px] leading-[100%] 
            tracking-wide mt-8"
        >
          Our staff
        </h2>

        {/* Staff List with Proper Margins */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16 px-4 sm:px-0">
          {staff.map((member) => (
            <article
              key={member.id}
              className="bg-[#F8EED1] rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Image - Always on the Left */}
              <div className="w-full sm:w-1/3 h-[200px] sm:h-[240px]">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content - Always on the Right */}
              <div className="p-6 sm:w-2/3 flex flex-col justify-center">
                <p className="uppercase text-gray-600 text-[14px] sm:text-[16px]">{member.role}</p>
                <h3 className="text-gray-900 font-bold text-[20px] sm:text-[32px]">{member.name}</h3>
                <p className="text-gray-700 text-[14px] sm:text-[18px]">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
