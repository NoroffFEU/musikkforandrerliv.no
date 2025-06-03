import { useState } from 'react';

const useFormModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);

  const openModal = (formComponent) => {
    setCurrentForm({ Component: formComponent }); //sets a dynamic component from the formComponent
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentForm(null);
  };

  return { isModalOpen, currentForm, openModal, closeModal };
};

export default useFormModal;
