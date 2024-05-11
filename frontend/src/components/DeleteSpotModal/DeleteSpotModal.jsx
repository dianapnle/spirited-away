import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { deleteSpot } from '../../store/spots';


function DeleteSpotModal ({ spotId }) {
    const dispatch = useDispatch();

    const { closeModal } = useModal();

    const deleteSubmit = (e) => {
        e.preventDefault();
        return dispatch((deleteSpot(spotId))).then((closeModal))
      };

    return (
        <>
        <div className={`form`}>
        <h1>Confirm Delete</h1>
          <div>
            <button className={`delete-post-button`} onClick={deleteSubmit}>Yes (Delete Spot) </button>
            </div>
            <div>
            <button className={`no-post-button`} onClick={closeModal}>No (Keep Spot) </button>
            </div>
        </div>
        </>
    )
}
export default DeleteSpotModal;
