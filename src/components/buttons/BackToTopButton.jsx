import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the scroll position is past 300px to show the button
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-[81px] w-[70px] h-[70px] rounded-[50px] bg-[#EE6352] text-black p-4 flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-300 shadow-lg z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={scrollToTop}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <svg
          width="20"
          height="12"
          viewBox="0 0 30 18"
          xmlns="http://www.w3.org/2000/svg"
          stroke="black"
          strokeWidth="4"
          fill="none"
        >
          <polyline points="3,15 15,3 27,15" />
        </svg>
        <div className="text-[8px] font-medium leading-[12px] tracking-[-0.4px] align-middle text-center whitespace-nowrap font-inter">
          BACK TO TOP
        </div>
      </div>
    </button>
  );
};

export default BackToTopButton;
