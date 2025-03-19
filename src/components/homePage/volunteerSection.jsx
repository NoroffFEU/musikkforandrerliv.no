import React from "react";
import content from "../../data/landing-page-content.json";
import { SlArrowRight } from "react-icons/sl";

const VolunteerSection = () => {
  const volunteerContent = content.volunteer;

  return (
    <div className="w-full flex flex-col-reverse gap-8 md:flex-row items-center p-8 bg-white">
      <div className="md:w-1/2 flex flex-col p-8 justify-center items-center h-auto md:h-[50rem] text-left">
        <div className="w-full md:w-1/2">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-3xl mb-4">{volunteerContent.title}</h2>
            <SlArrowRight className="block md:hidden text-2xl text-red-500" />
          </div>
          {volunteerContent.content.split("\n").map((paragraph, index) => (
            <p key={index} className="text-gray-500 mb-4 text-xl">
              {paragraph}
            </p>
          ))}

          <button
            onClick={() => {}}
            className="hidden md:block px-6 py-2 border border-black text-black font-semibold rounded-lg"
          >
            READ MORE
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center h-[50rem]">
        <img
          src={volunteerContent.image}
          alt="Volunteer with children and musical instruments"
          className="w-full h-full object-cover p-8"
        />
      </div>
    </div>
  );
};

export default VolunteerSection;
