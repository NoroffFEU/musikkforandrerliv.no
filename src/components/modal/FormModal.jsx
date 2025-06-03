export const ModalContainer = ({ handleClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black/54 z-50" onClick={handleClose}>
      {children}
    </div>
  )
}

const FormModal = ({ isModalOpen, handleClose, children }) => {
  return (
    isModalOpen && (
      <ModalContainer>
        {children}
      </ModalContainer>
    )
  )
}

export default FormModal;