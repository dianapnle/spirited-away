import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { deleteReview } from '../../store/reviews';
import { getSpotDetail } from '../../store/spots';
import './ReviewSpotModal.css'


function DeleteReviewModal ({ reviewId, spotId }) {
    const dispatch = useDispatch();

    const { closeModal } = useModal();
    const deleteSubmit = (e) => {
        e.preventDefault();
        return dispatch((deleteReview(reviewId)))
        .then(() => dispatch(getSpotDetail(spotId)))
        .then((closeModal))
      };

    return (
        <>
        <div className={`delete-modal`}>
        <h1>Confirm Delete</h1>
        <h3>Are you sure you want to delete this review?</h3>
        <div className={`buttons`}>
          <div>
            <button className={`delete-review-button`} onClick={deleteSubmit}>Yes (Delete Review) </button>
            </div>
            <br></br>
            <div>
            <button className={`no-review-button`} onClick={closeModal}>No (Keep Review) </button>
            </div>
        </div>
        </div>
        </>
    )
}
export default DeleteReviewModal;
