const PulsatingIndicator = () => {
  return (
    <div className="relative w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[160px] lg:h-[160px] flex items-center justify-center">
      <div className="absolute w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[160px] lg:h-[160px] rounded-full bg-[#B2CAC2] opacity-30 animate-ping"></div>

      <div className="absolute w-[65px] h-[65px] sm:w-[85px] sm:h-[85px] lg:w-[100px] lg:h-[100px] rounded-full bg-[#B2CAC2] opacity-50 animate-ping delay-150"></div>

      <div className="absolute w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] lg:w-[44px] lg:h-[44px] rounded-full bg-[#B2CAC2] animate-ping delay-300"></div>
    </div>
  );
};

export default PulsatingIndicator;
