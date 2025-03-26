import React from "react";
import content from "../../data/landing-page-content.json";
import { SlArrowRight } from "react-icons/sl";

const VolunteerSection = () => {
  const volunteerContent = content.volunteer;

  return (
    <section id="VolunteerSection" className="w-full flex flex-col-reverse gap-6 md:flex-row items-center p-8 bg-white">
      <div className="md:w-1/2 flex flex-col p-4 justify-center items-center h-auto md:h-[50rem] text-left">
        <div className="w-full md:w-1/2">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-3xl mb-6 font-bold [font-family:var(--font-sans)]">
              {volunteerContent.title}
            </h2>
            <SlArrowRight
              className="block md:hidden text-2xl cursor-pointer"
              style={{ color: "var(--color-sunset-red)" }}
            />
          </div>
          {volunteerContent.content.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-600 mb-6 [font-family:var(--font-sans)]"
            >
              {paragraph}
            </p>
          ))}

          <button
            onClick={() => {}}
            className="hidden md:block px-10 py-4 border border-black cursor-pointer text-black font-bold  rounded-lg"
          >
            READ MORE
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:h-full flex justify-center items-center">
        <img
          src={volunteerContent.image}
          alt={volunteerContent.title}
          className="w-full aspect-square h-auto md:h-full object-cover"
        />
      </div>

    </section>
  );
};

export default VolunteerSection;
