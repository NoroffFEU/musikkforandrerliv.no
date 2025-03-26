function HeroBanner() {
  return (
    <section className="relative">
      <h1 className="text-7xl font-medium [font-family:var(--font-justAnotherHand)] text-white absolute inset-0 flex items-center justify-center uppercase tracking-wider">
        Our Work
      </h1>

      <img
        src="/assets/placeholder-images/hero.webp"
        alt="hero banner"
        className="w-full h-screen md:max-h-[1000px] object-cover lg:object-center object-right-bottom"
      />
    </section>
  );
}

export default HeroBanner;
