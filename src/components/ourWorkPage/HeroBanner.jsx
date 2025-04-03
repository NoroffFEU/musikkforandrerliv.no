import HeroBannerNav from './HeroBannerNav';

export default function HeroBanner() {
  return (
    <section
      className="relative flex flex-col items-center"
      aria-label="Hero banner section"
    >
      <img
        src="/assets/placeholder-images/hero.webp"
        alt="Hero banner image"
        className="w-full h-screen md:max-h-[1000px] object-cover lg:object-center object-[83%]"
      />
      <div className="flex flex-col absolute inset-0 items-center justify-end mb-4">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium [font-family:var(--font-justAnotherHand)] text-white flex items-center justify-center uppercase tracking-wider mb-12"
          aria-label="Hero section showcasing our work"
        >
          Our Work
        </h1>

        <HeroBannerNav />
      </div>
    </section>
  );
}
