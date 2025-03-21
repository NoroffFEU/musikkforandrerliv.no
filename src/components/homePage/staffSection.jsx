import { useEffect, useState } from "react";
import staffData from "../../data/staff.json";

const StaffSection = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    setStaff(staffData);
  }, []);

  return (
    <section
      className="py-16 bg-white flex justify-center"
      aria-labelledby="staff-heading"
    >
      <div className="w-full max-w-[960px] mx-auto">
        {/* Header */}
        <h2
          id="staff-heading"
          className="text-center text-gray-900 
            font-['Just_Another_Hand'] font-normal 
            text-[50px] sm:text-[110px] leading-[100%] 
            tracking-wide mt-8"
        >
          Our staff
        </h2>

        {/* Staff List */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16 px-4 sm:px-0">
          {staff.length > 0 ? (
            staff.map((member) => (
              <article
                key={member.id}
                className="bg-[#F8EED1] rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row"
                role="region"
                aria-labelledby={`staff-${member.id}`}
                tabIndex={0} // Enables keyboard focus
              >
                {/* Image - Left for Desktop, Full-Width for Mobile */}
                <div className="w-full sm:w-1/3 h-[200px] sm:h-[240px]">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy" // Optimized loading
                  />
                </div>

                {/* Info Section - Fixing Header Alignment */}
                <div className="p-6 sm:w-2/3 flex flex-col justify-center">
                  <p className="uppercase text-gray-600 text-[14px] sm:text-[16px] font-montserrat mb-1">
                    {member.role}
                  </p>
                  <h3
                    id={`staff-${member.id}`}
                    className="text-gray-900 font-montserrat font-semibold text-[32px] leading-[120%] mb-1"
                  >
                    {member.name}
                  </h3>
                  <p className="text-gray-700 font-montserrat font-normal text-[18px] leading-[150%]">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-500">No staff data available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
