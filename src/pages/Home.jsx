import { HeroSection } from "../components/homePage/heroSection";
import "../i18n";

const Home = () => {
  return (
    <div className="bg-white text-[var(--color-dark-charcoal)]">
      <HeroSection />

      <section id="HistorySection" className="py-16 px-4"></section>
      <section id="StaffSection" className="py-16 px-4"></section>
      <section id="WorkSection" className="py-16 px-4"></section>
      <section id="VolunteerSection" className="py-16 px-4"></section>
      <section id="SupportSection" className="py-16 px-4"></section>
      <section id="GallerySection" className="py-16 px-4"></section>
      <section id="CalenderSection" className="py-16 px-4"></section>
    </div>
  );
};

export default Home;
