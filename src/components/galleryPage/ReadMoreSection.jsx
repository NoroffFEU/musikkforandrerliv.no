import Button from '../Button';

const ReadMoreSection = () => {
  return (
    <section className="mt-[67px] px-2 mb-[117px]">
      <h2 className="sm:text-4xl text-[20px] font-semibold text-center mb-[43px]">
        READ MORE
      </h2>
      <div className="flex flex-col md:flex-row gap-[32px]">
        <div
          className="relative overflow-hidden rounded-t-lg sm:rounded-lg lg:h-[568px] md:h-[324px] h-[324px]  w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/placeholder-images/IMG_1457.webp')",
          }}
        >
          <div className="absolute inset-0 sm:bg-gradient-to-t sm:from-black/95 sm:via-black/50 sm:to-transparent" />
          <h3 className="absolute bottom-20 left-4 text-white text-[56px] font-semibold z-10 hidden sm:block">
            About Us
          </h3>
          <div className="absolute bottom-10 left-4 hidden sm:block">
            <Button variant="primary" href="/about">
              GO TO PAGE
            </Button>
          </div>
        </div>
        {/* Mobile View About Us Link */}
        <div className="flex flex-col gap-6 items-center sm:hidden">
          <a
            href="/about"
            className="text-[20px] mb-[45px] font-semibold [font-family:var(--freeman)] flex items-center justify-between w-full max-w-[350px]"
          >
            ABOUT US{' '}
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

        <div
          className="relative overflow-hidden rounded-t-lg sm:rounded-lg lg:h-[568px] md:h-[324px] h-[324px]  w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/placeholder-images/IMG_6433.webp')",
          }}
        >
          <div className="absolute inset-0 sm:bg-gradient-to-t sm:from-black/95 sm:via-black/50 sm:to-transparent" />
          <h3 className="absolute bottom-20 left-4 text-white font-semibold text-[56px] z-10 hidden sm:block">
            What We Do
          </h3>
          <div className="absolute bottom-10 left-4 hidden sm:block">
            <Button variant="primary" href="/what-we-do">
              GO TO PAGE
            </Button>
          </div>
        </div>
        {/* Mobile View What We Do Link */}
        <div className="flex flex-col gap-6 items-center sm:hidden">
          <a
            href="/what-we-do"
            className="text-[20px] font-semibold [font-family:var(--freeman)] flex items-center justify-between w-full max-w-[350px]"
          >
            WHAT WE DO{' '}
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
      </div>
    </section>
  );
};

export default ReadMoreSection;