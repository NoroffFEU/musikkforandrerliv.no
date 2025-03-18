import React from "react";
import data from "../../data/landing-page-content.json";

export default function WorkSection() {
  const { image, title, content } = data.work;
  console.log(data.work); // delete this line
  return (
    <section id="WorkSection" className="w-full py-16 px-8 bg-emerald-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20">
       
          <div className="w-full mr-10 md:w-1/2 flex items-center justify-center">
            <img src={image} alt={title} className="w-full aspect-[3/3] object-cover  " />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center md:items-start gap-6 lg:py-10">
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="mb-6 max-w-md">{content}</p>
            <button
              className=" w-[215px] h-[57px] py-[20px] px-[30px] border rounded-[9px] items-center justify-center">
              READ MORE
            </button>
          </div>

      </div>
    </section>
  );
}
