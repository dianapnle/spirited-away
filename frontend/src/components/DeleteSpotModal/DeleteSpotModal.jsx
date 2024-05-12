import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { deleteSpot } from '../../store/spots';
import './DeleteSpotModal.css'


function DeleteSpotModal ({ spotId }) {
    const dispatch = useDispatch();

    const { closeModal } = useModal();

    const deleteSubmit = (e) => {
        e.preventDefault();
        return dispatch((deleteSpot(spotId))).then((closeModal))
      };

    return (
        <>
        <div className={`delete-modal`}>
        <h1>Confirm Delete</h1>
        <h3>Are you sure you want to remove this spot from the listings?</h3>
        <div className={`buttons`}>
          <div>
            <button className={`delete-post-button`} onClick={deleteSubmit}>Yes (Delete Spot) </button>
            </div>
            <br></br>
            <div>
            <button className={`no-post-button`} onClick={closeModal}>No (Keep Spot) </button>
            </div>
        </div>
        </div>
        </>
    )
}
export default DeleteSpotModal;
