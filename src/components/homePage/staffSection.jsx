import { useEffect, useState } from "react";
import staffData from "../../data/staff.json";

const StaffSection = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    console.log("Staff Data Loaded:", staffData); // ✅ Debugging: Check if data is loading
    setStaff(staffData);
  }, []);

  return (
    <section className="py-16 bg-white flex justify-center" aria-labelledby="staff-heading">
      <div className="w-full max-w-[960px]">
        {/* Header */}
        <h2 className="text-center text-gray-900 font-handwritten text-[50px] sm:text-[110px]">
          Our staff
        </h2>

        {/* Staff List */}
        <div className="flex flex-col gap-8">
          {staff.length === 0 ? (
            <p className="text-center text-gray-500">No staff data available.</p>
          ) : (
            staff.map((member) => (
              <article key={member.id} className="bg-[#F8EED1] p-6 rounded-lg shadow-lg flex flex-col sm:flex-row gap-4">
                {/* Image - Centered on Mobile */}
                <div className="flex justify-center sm:justify-start">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="w-[150px] h-[150px] sm:w-[324px] sm:h-[240px] object-cover"
                  />
                </div>

                {/* Text */}
                <div>
                  <p className="uppercase text-gray-600 text-[14px]">{member.role}</p>
                  <h3 className="text-gray-900 font-bold text-[20px] sm:text-[32px]">{member.name}</h3>
                  <p className="text-gray-700 text-[14px] sm:text-[18px]">{member.bio}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
