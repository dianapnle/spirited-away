// import { useNavigate } from 'react-router-dom';
import './ReviewTile.css'
import { useSelector } from 'react-redux';
import OpenModalButton from '../DeleteSpotModal/OpenModalDeleteSpot';
import DeleteReviewModal from './DeleteReviewModal.jsx'

function ReviewTile ({review, spotId}) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    const date = new Date(review?.updatedAt);
    const sessionUser = useSelector(state => state.session.user)

    return (
        <>
        <div className={`reviewitem`}>
        <br></br>
        <div className={`review-user`}>
            {review.User?.firstName}
        </div>
        <span className={`review-date`}>{monthNames[date.getMonth()]} {date.getFullYear()}</span>
        <p className={`review-body`}>{review?.review}</p>
        {sessionUser?.id === review.userId && <div><OpenModalButton modalComponent={<DeleteReviewModal reviewId={review.id} spotId={spotId}/>}/></div>}
        <br></br>
        </div>
        </>
    )
}


export default ReviewTile;
