function HeroBanner() {
  return (
    <section className="relative">
      <h1
        className="text-7xl font-medium [font-family:var(--font-justAnotherHand)] text-white absolute inset-0 flex items-center justify-center uppercase tracking-wider mt-52"
        aria-label="Hero section showcasing our work"
      >
        Our Work
      </h1>

      <img
        src="/assets/placeholder-images/hero.webp"
        alt="Hero banner image"
        className="w-full h-screen md:max-h-[1000px] object-cover lg:object-center object-[83%]"
      />
    </section>
  );
}

export default HeroBanner;
