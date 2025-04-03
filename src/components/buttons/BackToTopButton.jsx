import React, { useEffect, useState } from 'react';

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
        className={`fixed bottom-8 right-8 w-[70px] h-[70px] rounded-full bg-[#FF6B61] text-black flex flex-col justify-center items-center cursor-pointer transition-opacity duration-300 shadow-lg z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
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
    );
};

export default BackToTopButton;
