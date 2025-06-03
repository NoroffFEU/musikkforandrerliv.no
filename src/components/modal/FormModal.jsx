export const ModalContainer = ({ closeModal, children }) => {
  return (
    <div
      className="fixed inset-0 grid place-content-center bg-black/54 z-50"
      onClick={closeModal}
    >
      <div
        className="relative md:mt-[36px] mb-auto p-[46px] bg-white overflow-y-auto max-h-[98vh]"
        onClick={
          (e) =>
            e.stopPropagation() /* prevents from closing modal while clicking within it  */
        }
      >
        <button className="absolute top-4 right-4 font-bold cursor-pointer scale-85" onClick={closeModal} aria-label="closes modal">
          <img src="./assets/icons/closeX.svg" alt="button to closee" />
        </button>
        {children}
      </div>
    </div>
  );
};

const FormModal = ({ isModalOpen, closeModal, children }) => {
  return (
    isModalOpen && (
      <ModalContainer closeModal={closeModal}>{children}</ModalContainer>
    )
  );
};

export default FormModal;
