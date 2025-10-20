import Button from '../Button';

const ReadMoreSection = () => {
  return (
    <section className="mt-[67px] mb-[117px]">
      <h2 className="md:text-4xl sm:text-[20px] font-semibold text-center mb-[43px]">
        READ MORE
      </h2>
      <div className="px-[50px]">
        <div className="flex flex-col md:flex-row gap-[32px] justify-center items-center md:items-stretch">
          <div
            className="
              relative overflow-hidden rounded-t-lg md:rounded-lg
              aspect-square
              w-full max-w-[324px] max-h-[324px]
              lg:aspect-auto lg:h-[568px] lg:max-w-none lg:max-h-none
              bg-cover bg-center group
            "
            style={{
              backgroundImage:
                "url('/assets/placeholder-images/IMG_6433.webp')",
            }}
          >
            <div
              className="
                absolute inset-0 bg-cover bg-center scale-105
                lg:[filter:blur(2px)] lg:group-hover:[filter:blur(0px)]
                transition-all duration-300
              "
              style={{
                backgroundImage:
                  "url('/assets/placeholder-images/IMG_6433.webp')",
              }}
            />
            <div className="absolute inset-0 md:bg-gradient-to-t md:from-black/95 md:via-black/50 md:to-transparent" />
            <h3 className="absolute bottom-[86px] left-[24px] text-white text-[56px] font-semibold z-10 hidden md:block">
              About Us
            </h3>
            <div className="absolute bottom-[33px] left-[24px] hidden md:block">
              <Button
                variant="primary"
                className="text-[24px] px-[30px] py-[15px]"
                href="/about"
              >
                GO TO PAGE
              </Button>
            </div>
          </div>

          {/* Mobile View About Us Link */}
          <a
            href="/about-us"
            className="
    -mt-[32px] md:hidden 
    h-[80px] 
    text-[20px] font-semibold [font-family:var(--freeman)]
    flex items-center justify-between
    px-6 py-4 
    w-full max-w-[324px] mx-auto
  "
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
            className="
              relative overflow-hidden rounded-t-lg md:rounded-lg
              aspect-square
              w-full max-w-[324px] max-h-[324px]
              lg:aspect-auto lg:h*[568px] lg:max-w-none lg:max-h-none
              bg-cover bg-center group
            "
            style={{
              backgroundImage:
                "url('/assets/placeholder-images/IMG_1457.webp')",
            }}
          >
            <div
              className="
                absolute inset-0 bg-cover bg-center scale-105
                lg:[filter:blur(2px)] lg:group-hover:[filter:blur(0px)]
                transition-all duration-300
              "
              style={{
                backgroundImage:
                  "url('/assets/placeholder-images/IMG_1457.webp')",
              }}
            />
            <div className="absolute inset-0 md:bg-gradient-to-t md:from-black/95 md:via-black/50 md:to-transparent" />
            <h3 className="absolute bottom-[86px] left-[24px] text-white font-semibold text-[56px] z-10 hidden md:block">
              What We Do
            </h3>
            <div className="absolute bottom-[33px] left-[24px] hidden md:block">
              <Button
                variant="primary"
                className="text-[24px] px-[30px] py-[15px]"
                href="/what-we-do"
              >
                GO TO PAGE
              </Button>
            </div>
          </div>

          {/* Mobile View What We Do Link */}
          <a
            href="/what-we-do"
            className="
    -mt-[32px] md:hidden 
    h-[80px] 
    text-[20px] font-semibold [font-family:var(--freeman)]
    flex items-center justify-between
    px-6 py-4 
    w-full max-w-[324px] mx-auto
  "
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
      </div>
    </section>
  );
};

export default ReadMoreSection;
