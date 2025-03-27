import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

export function HistorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-white w-full py-[78px] px-[24px] relative">
      <div className="max-w-[960px] mx-auto flex flex-col items-center gap-[32px]">
        <h2
          className="
            [font-family:var(--font-justAnotherHand)]
            text-[50px] sm:text-[110px]
            leading-[100%]
            tracking-[0.05em]
            text-center
            font-normal
            text-black
          "
        >
          {t('screens.history.title')}
        </h2>
        <div className="w-full max-w-[800px]">
          <p
            className="
              text-[18px]
              leading-[150%]
              tracking-[0]
              text-center
              font-[var(--font-sans)]
              text-black
              mx-auto
            "
          >
            {t('screens.history.description')}
          </p>
        </div>

        <img
          src="../../../public/assets/placeholder-images/history.webp"
          alt="History of MMF"
          className="mx-auto w-full h-auto object-cover"
        />

        <button className="hidden sm:inline-block w-fit py-4 px-[30px] border rounded-[9px] [font-family:var(--font-sans) ] font-semibold md:text-2xl cursor-pointer">
          {t('common.buttons.readMore')}
        </button>
      </div>

      <button
        className={`
          fixed 
          bottom-8 
          right-8 
          w-[70px] 
          h-[70px] 
          rounded-full 
          bg-[#FF6B61] 
          text-black 
          flex 
          flex-col 
          justify-center 
          items-center 
          cursor-pointer 
          transition-opacity 
          duration-300 
          shadow-lg 
          z-50
          ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={scrollToTop}
      >
        <div className="flex flex-col items-center justify-center">
          <svg
            width="20"
            height="18"
            viewBox="0 0 30 18"
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            className="mb-1"
            strokeWidth="4"
            fill="none"
          >
            <polyline points="3,15 15,3 27,15" />
          </svg>
          <div className="text-center text-[8px] font-medium">
            BACK TO
            <br />
            TOP
          </div>
        </div>
      </button>
    </section>
  );
}
