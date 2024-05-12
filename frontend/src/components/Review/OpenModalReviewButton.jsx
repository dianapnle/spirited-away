// import React from 'react';
import { useModal } from '../../context/Modal'

function OpenModalReviewButton({
  modalComponent, // component to render inside the modal
}) {
  const { setModalContent } = useModal();

  const onClick = () => {
    setModalContent(modalComponent);
  };

  return (
    <div>
        <button className={`post-review-button`} onClick={onClick}>Post Your Review</button>
    </div>
  );
}

export default OpenModalReviewButton;
