import Button from '../Button';

const ReadMoreSection = () => {
  return (
    <section className="mt-[67px] px-2 mb-[117px]">
      <h2 className="md:text-4xl sm:text-[20px] font-semibold text-center mb-[43px]">
        READ MORE
      </h2>
      <div className="flex flex-col md:flex-row gap-[32px]">
        <div
          className="relative overflow-hidden rounded-t-lg md:rounded-lg lg:h-[568px] md:h-[324px] h-[324px]  w-full bg-cover bg-center group"
          style={{
            backgroundImage: "url('/assets/placeholder-images/IMG_6433.webp')",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 lg:[filter:blur(2px)] lg:group-hover:[filter:blur(0px)] transition-all duration-300"
            style={{
              backgroundImage:
                "url('/assets/placeholder-images/IMG_6433.webp')",
            }}
          />
          <div className="absolute inset-0 md:bg-gradient-to-t md:from-black/95 md:via-black/50 md:to-transparent" />
          <h3 className="absolute bottom-[67px] left-[24px] text-white text-[56px] font-semibold z-10 hidden md:block">
            About Us
          </h3>
          <div className="absolute bottom-[24px] left-[24px] hidden md:block">
            <Button variant="primary" className="px-14" href="/about">
              GO TO PAGE
            </Button>
          </div>
        </div>
        {/* Mobile View About Us Link */}
        <a
          href="/about"
          className="block -mt-[32px] md:hidden h-[80px] w-full text-[20px] font-semibold [font-family:var(--freeman)] flex items-center justify-between px-6 py-4"
        >
          ABOUT US
          <img
            className="object-cover w-[25px] h-[32px]"
            src="/assets/placeholder-images/Arrow-forward-circle.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        </a>
        <div
          className="relative overflow-hidden rounded-t-lg md:rounded-lg lg:h-[568px] md:h-[324px] h-[324px]  w-full bg-cover bg-center group"
          style={{
            backgroundImage: "url('/assets/placeholder-images/IMG_1457.webp')",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 lg:[filter:blur(2px)] lg:group-hover:[filter:blur(0px)] transition-all duration-300"
            style={{
              backgroundImage:
                "url('/assets/placeholder-images/IMG_1457.webp')",
            }}
          />
          <div className="absolute inset-0 md:bg-gradient-to-t md:from-black/95 md:via-black/50 md:to-transparent" />
          <h3 className="absolute bottom-[67px] left-[24px] text-white font-semibold text-[56px] z-10 hidden md:block">
            What We Do
          </h3>
          <div className="absolute bottom-[24px] left-[24px] hidden md:block">
            <Button variant="primary" className="px-14" href="/what-we-do">
              GO TO PAGE
            </Button>
          </div>
        </div>
        {/* Mobile View What We Do Link */}
        <a
          href="/what-we-do"
          className="block -mt-[32px] md:hidden h-[80px] w-full text-[20px] font-semibold [font-family:var(--freeman)] flex items-center justify-between px-6 py-4"
        >
          WHAT WE DO
          <img
            className="object-cover w-[25px] h-[32px]"
            src="/assets/placeholder-images/Arrow-forward-circle.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </section>
  );
};

export default ReadMoreSection;
