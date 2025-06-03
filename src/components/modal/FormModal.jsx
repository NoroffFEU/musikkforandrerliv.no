export const ModalContainer = ({ closeModal, children }) => {
  return (
    <div
      className="fixed inset-0 grid place-content-center bg-black/54 z-50"
      onClick={closeModal}
    >
      <div
        className="relative p-6 bg-white"
        onClick={
          (e) =>
            e.stopPropagation() /* prevents clicking within the modal from closing it */
        }
      >
        <button className="absolute top-1 right-1" onClick={closeModal}>
          X
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
