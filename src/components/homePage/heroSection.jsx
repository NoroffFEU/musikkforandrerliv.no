import heroContent from '../../data/landing-page-content.json';

export function HeroSection() {
  const { title, subtitle } = heroContent.hero;

  return (
    <section
      className="bg-[url('/assets/placeholder-images/hero.webp')] bg-[center_right_-6rem] bg-cover bg-no-repeat h-screen [font-family:var(--font-justAnotherHand)] text-[var(--color-white)] tracking-[.05em] leading-none flex flex-col justify-end pb-[54px] px-6 font-normal sm:bg-right lg:pb-[42px]"
      aria-label="Background image showing two children smiling and hugging"
    >
      <h1 className="mb-6 text-[50px] text-center md:text-7xl xl:text-[110px]">
        {title}
      </h1>
      <h2 className="text-3xl text-center md:text-4xl xl:text-[50px]">
        {subtitle}
      </h2>
    </section>
  );
}
