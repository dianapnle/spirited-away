// import { useNavigate } from 'react-router-dom';
import './ReviewTile.css'
import { useSelector } from 'react-redux';
import OpenModalButton from '../DeleteSpotModal/OpenModalDeleteSpot';
import DeleteReviewModal from './DeleteReviewModal.jsx'

function ReviewTile ({review}) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    const date = new Date(review?.updatedAt);
    const sessionUser = useSelector(state => state.session.user)

    return (
        <>
        <div className={`reviewitem`}>
        <div>
        <div className={`review-user`}>
            {review.User?.firstName}
        </div>
        <p className={`review-date`}>{monthNames[date.getMonth()]} {date.getFullYear()}</p>
        <p className={`review-body`}>{review?.review}</p>
        {sessionUser.id === review.userId && <div><OpenModalButton modalComponent={<DeleteReviewModal reviewId={review.id}/>}/></div>}
        </div>
        </div>
        </>
    )
}


export default ReviewTile;
