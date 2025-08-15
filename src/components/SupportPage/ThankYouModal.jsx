import PulsatingIndicator from './PulsatingIndicator';
import closeIcon from '/assets/placeholder-images/closingx.png';
import heartIcon from '/assets/placeholder-images/heartgreen.png';

const ThankYouModal = ({ loading, onClose }) => {
  return (
    <div className="fixed inset-10 bg-[#000000]/54 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white shadow-lg w-[376px] h-[429px] sm:w-[700px] sm:h-[600px] md:w-[1100px] md:h-[580px] lg:w-[1280px] lg:h-[650px] max-w-[90%] text-center relative flex flex-col justify-center items-center px-8">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-7 right-7">
          <img
            src={closeIcon}
            alt="Close"
            className="w-[22px] h-[25px] sm:h-[29px] cursor-pointer hover:opacity-80"
          />
        </button>

        {/* Show pulsating and thank you message */}
        {loading ? (
          <PulsatingIndicator />
        ) : (
          <>
            <h2 className="text-[50px] sm:text-[80px] lg:text-[110px] font-justAnotherHand leading-none mb-4">
              Thank you for your
              <br />
              support!
            </h2>

            <img
              src={heartIcon}
              alt="Heart"
              className="w-10 h-10 sm:w-20 sm:h-20 mt-1 sm:mt-2"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ThankYouModal;
