import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotDetail } from "../store/spots";
import { getCurrentSpotReviews } from "../store/reviews";
import ReviewTile from "./Review/ReviewTile";
import './SpotDetail.css'
import OpenModalReviewButton from "./Review/OpenModalReviewButton";
import PostReviewModal from "./Review/PostReviewModal";

function SpotDetail () {
    const {spotId} = useParams();
    const id = Number(spotId)
    const spot = useSelector(state => state.spots.byId[id]);
    const sessionUser = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews.sortedReviews)
    const [isLoaded, setIsLoaded] = useState(false);

    const dispatch = useDispatch();
    const existingReview = [];

    for (const review of Object.values(reviews)) {
        if (sessionUser && sessionUser.id === review.userId) {
            existingReview.push(review)
        }
    }

    let filteredImages= spot?.SpotImages && spot.SpotImages.filter((img) => img.preview === false)
    let preview = spot?.previewImage
    let img1= filteredImages?.length >= 1 && filteredImages[0].url;
    let img2 = filteredImages?.length >= 2 && filteredImages[1].url;
    let img3 = filteredImages?.length >= 3 && filteredImages[2].url;
    let img4 = filteredImages?.length >= 4 && filteredImages[3].url;


    useEffect(() => {
        dispatch(getSpotDetail(id))
        .then(dispatch(getCurrentSpotReviews(id)))
        .then(() => {
            setIsLoaded(true)
        })
    }, [id, dispatch, isLoaded])


    return (
        <>
        <div className={`overallContainer`}>
        <div className={`spots-area`}>
        <h2>{spot?.name}</h2>
        <h3>{spot?.city}, {spot?.state}, {spot?.country}</h3>
        <br></br>
        <div className={`imgContainer`}>
                <img className={`previewImage spotImage`} src={preview} />
                {img1 && <img className={`spotImage`} src={img1} />}
                {img2 && <img className={`spotImage`} src={img2} />}
                {img3 && <img className={`spotImage`} src={img3} />}
                {img4 && <img className={`spotImage`} src={img4} />}
        </div>
        <br></br>
        <div className={`spot-details`}>
        <div className={`body`}>
            <div className={`paragraph`}>
                <div>Hosted by {spot?.Owner && spot?.Owner.firstName} {spot?.Owner && spot?.Owner.lastName}</div>
                <p>{spot?.description}</p>
                </div>
                <div className={`pricing-block`}>
                    <div className={`pricing-grid`}>
                        <span>
                        <span className={`price-bold`}>${spot?.price}</span> night
                        </span>
                        <span className={`pricing-stars`}>
                            {spot?.avgStarRating === null
                            ? <div>★ New</div>
                            : <span>★ {spot?.avgStarRating?.toFixed(1)} · {spot?.numReviews === 1 ? <span>{spot?.numReviews} review</span> : <span> {spot?.numReviews} reviews</span> } </span>
                            }
                        </span>
                    </div>
                    <div className={`reserve-area`}>
                        <button onClick={() => { alert("Feature coming soon");}}className={`reserve-button`}> Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className={`reviews-area`}>
                <hr></hr>
            <div className={`reviews-star`}>
            {spot?.avgStarRating === null
                ? <div>★ New</div>
                : <span>★ {spot?.avgStarRating?.toFixed(1)} · {spot?.numReviews === 1 ? <span>{spot?.numReviews} review</span> : <span> {spot?.numReviews} reviews</span> } </span>
                }
            </div>
            <br></br>
            <div className={'post-review-area'}>
                {sessionUser && sessionUser.id !== spot?.ownerId && existingReview.length === 0 && reviews.length ===0 &&
                    <div className={`post-review-child`}><OpenModalReviewButton modalComponent={<PostReviewModal className={`post-review-modal`} spotId={id}/>}/><br></br>Be the first to post a review!</div>
                }
                {sessionUser && sessionUser.id !== spot?.ownerId && existingReview.length === 0 && reviews.length !== 0 &&
                    <div><OpenModalReviewButton modalComponent={<PostReviewModal className={`post-review-modal`} spotId={id}/>}/><br></br></div>
                }
            </div>
            <div className={`reviewscontainer`}>
                {reviews && Object.values(reviews).map((review) => (
                    <div key={`${review.id}`}><ReviewTile key={`review-${review.id}`} className={`reviewItem`} review={review} spotId={id} /></div>
                ))}
            </div>
            </div>
        </div>
        </>
    )
}

export default SpotDetail;
