import React from "react";
import data from "../../data/landing-page-content.json";

export default function HistorySection() {
  const { image, backIcon, title, content } = data.history;

  return (
    <section className="bg-white w-full pt-[78px] px-[24px]">
      <div className="max-w-[960px] mx-auto flex flex-col items-center gap-[64px]">
        <h2 className="font-poetsenOne text-[64px] font-normal leading-none tracking-[0.05em] text-center text-black">
          {title}
        </h2>
        <p className="font-montserrat text-[18px] leading-[150%] text-black text-center">
          {content}
        </p>
        <img src={image} alt="History of MMF" className="mx-auto" />
      </div>
    </section>
  );
}
