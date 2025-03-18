import React from "react";

const StaffSection = () => {
  return (
    <section id="StaffSection">
      <h2 className="text-6xl font-semibold text-center bg-[#37616f] text-white h-[126px] flex items-center justify-center">
        Our Staff
      </h2>
      {/* Layout style 1 - White bg */}
      <div id="ElineCard" className="bg-white p-28 flex justify-center">
        <div className="bg-[#78C6AAB2] p-[3.75rem] mx-74 rounded-lg md:rounded-tl-[200px] grid grid-cols-2 gap-4">
          {/* Left Section */}
          <div className="flex flex-col text-center items-center">
            <div className="rounded-full w-64 h-64">
              <img
                src="/assets/images/staff/eline.jpg"
                alt="Eline Rodtveit Hansen playing violin"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <p className="text-2xl mt-[1rem] font-semibold">
              Eline Rodvelt Hansen
            </p>
            <p className="text-lg">Violin Teacher</p>
            <p className="text-lg">MMF Co-Founder, Madagascar</p>
            <p className="text-lg">MMF Board Leader, Norway</p>
            <p className="text-lg underline">Elinerodvelt@gmail.com</p>{" "}
          </div>

          {/* Right Section */}
          <div className="text-center">
            <h3 className="text-5xl font-semibold">Eline Rodvelt Hansen</h3>
            <p className="mt-[1rem] text-lg">
              Eline is a violinist and violin teacher, educated at the Grieg
              Academy in Bergen. Originally from Sandnes in Rogaland, she has
              traveled extensively around the world, playing with musicians on
              several continents and in various genres. <br />
              <br />
              Additionally, she is a dedicated violin teacher. With two violins,
              she went to Madagascar with a desire to start a music school to
              help children out of poverty. <br />
              <br /> In Antsirabe, she met her husband, Dina, who was also a
              musician and shared a similar dream. Together, they founded MMF in
              2021 and now lead the work together. <br />
              <br />
              In addition, Eline works as a violin teacher at the music school,
              and she follows up ensembles and students on several instruments.
              Eline is also the leader of the Norwegian board of MMF.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
