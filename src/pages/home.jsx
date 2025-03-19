import React from "react";
import VolunteerSection from "../components/homePage/volunteerSection";

export function HomePage() {
  return (
    <div>
      <section id="HeroSection"></section>
      <section id="HistorySection"></section>
      <section id="StaffSection"></section>
      <section id="WorkSection"></section>
      <VolunteerSection />
      <section id="SupportSection"></section>
      <section id="GallerySection"></section>
      <section id="CalenderSection"></section>
    </div>
  );
}
