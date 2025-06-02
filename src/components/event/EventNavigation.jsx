import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function EventNavigation() {
  return (
    <nav className="mt-16 w-full flex justify-between items-center">
      {/* Desktop Buttons */}
      <div className="hidden md:flex w-full justify-between mb-12">
        <button
          type="button"
          aria-label="Previous Event"
          onClick={() => console.log("Go to previous event")}
          className="px-6 py-3 border border-black text-black uppercase rounded hover:bg-gray-100 focus:outline-none"
        >
          Previous Event
        </button>
        <button
          type="button"
          aria-label="Next Event"
          onClick={() => console.log("Go to next event")}
          className="px-6 py-3 bg-[#f26355] text-white uppercase rounded hover:bg-[#e55549] focus:outline-none"
        >
          Next Event
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className="flex md:hidden justify-center gap-8 w-full mb-12">
        <button
          type="button"
          aria-label="Previous Event"
          onClick={() => console.log("Go to previous event")}
          className="w-10 h-10 flex items-center justify-center text-[#f26355] text-xl rounded-full focus:outline-none hover:bg-[#ffe9e5] transition"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Next Event"
          onClick={() => console.log("Go to next event")}
          className="w-10 h-10 flex items-center justify-center text-[#f26355] text-xl rounded-full focus:outline-none hover:bg-[#ffe9e5] transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </nav>
  );
}




