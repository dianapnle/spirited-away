// import { useNavigate } from 'react-router-dom';
import './ReviewTile.css'

function ReviewTile ({review}) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const date = new Date(review?.updatedAt);

    return (
        <>
        <div className={`reviewitem`}>
        <div>
        <div className={`review-user`}>
            {review.User?.firstName}
        </div>
        <p className={`review-date`}>{monthNames[date.getMonth()]} {date.getFullYear()}</p>
        <p className={`review-body`}>{review?.review}</p>
        </div>
        </div>
        </>
    )
}


export default ReviewTile;
