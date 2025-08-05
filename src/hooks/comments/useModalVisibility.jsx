import { useState } from "react";

function useModalVisibility() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return { showModal, openModal, closeModal };
}

export default useModalVisibility;
