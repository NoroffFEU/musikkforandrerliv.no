import React, { useState, useEffect } from 'react';
import data from '../../data/landing-page-content.json';

export function HistorySection() {
  const { image, title, content } = data.history;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  

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
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-white w-full py-[78px] px-[24px] relative">
      <div className="max-w-[960px] mx-auto flex flex-col items-center gap-[32px]">
        {/* Heading */}
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
          {title}
        </h2>

        {/* Container holds text */}
        <div className="w-full max-w-[800px]">
          <p
            className="
              text-[18px]
              leading-[150%]
              tracking-[0]
              text-center
              font-normal
              font-[var(--font-sans)]
              text-black
              mx-auto
            "
          >
            {content}
          </p>
        </div>

        {/* img */}
        <img
          src={image}
          alt="History of MMF"
          className="mx-auto w-full h-auto object-cover"
        />
        
       
        <button
          onClick={() => {}}
          className="px-10 py-4 border border-black cursor-pointer text-black font-bold rounded-lg"
        >
          READ MORE
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
            className="mb-3"
            stroke="black"
            strokeWidth="5"
            fill="none"
          >
            <polyline 
              points="3,15 15,3 27,15" 
            />
          </svg>
          <div className="text-center text-[12px] ">
            BACK TO<br />TOP
          </div>
        </div>
      </button>
    </section>
  );
}
