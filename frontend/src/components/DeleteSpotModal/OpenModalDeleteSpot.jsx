// import React from 'react';
import { useModal } from '../../context/Modal'

function OpenModalButton({
  modalComponent, // component to render inside the modal
}) {
  const { setModalContent } = useModal();

  const onClick = () => {
    setModalContent(modalComponent);
  };

  return (
    <div>
        <button className={`delete-button`} onClick={onClick}>Delete</button>
    </div>
  );
}

export default OpenModalButton;
