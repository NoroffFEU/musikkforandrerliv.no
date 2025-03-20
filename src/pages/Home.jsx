import { HeroSection } from "../components/homePage/heroSection";
import VolunteerSection from "../components/homePage/volunteerSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
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
