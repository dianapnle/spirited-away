import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotDetail } from "../store/spots";
import { getCurrentSpotReviews } from "../store/reviews";
import ReviewTile from "./Review/ReviewTile";
import './SpotDetail.css'

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
        <h3>{spot?.city} {spot?.state} {spot?.country}</h3>
        <br></br>
        <div className={`imgContainer`}>
            {spot?.SpotImages && spot.SpotImages.map((img) => (
                (img.preview === true)
                ? <img key={`spotImg${img.id}`}style={{height: "400px"}} src={img.url}/>
                :  <img key={`spotImg${img.id}`}style={{height: "200px"}} src={img.url}/>
        ))}
        </div>
        <div className={`body`}>
            <div className={`paragraph`}>
                <div>Hosted by {spot?.Owner && spot?.Owner.firstName} {spot?.Owner && spot?.Owner.lastName}</div>
                <p>{spot?.description}</p>
                </div>
        <div className={`pricing-block`}>
            <div className={`child`}>
            ${spot?.price} night
            </div>
            <div className={`child`}>
                {spot?.avgStarRating === null
                ? <div>★ New</div>
                : <span>★ {spot?.avgStarRating} · {spot?.numReviews === 1 ? <span>{spot?.numReviews} review</span> : <span> {spot?.numReviews} reviews</span> } </span>
                }
                </div>
                <br></br>
                <div className={`reserve-area`}>
                <button onClick={() => { alert("Feature coming soon");}}className={`reserve-button`}> Reserve</button>
                </div>
            </div></div></div>
            <div className={`reviews-area`}>
                <hr></hr>
            <div className={`reviews-star`}>
            {spot?.avgStarRating === null
                ? <div>★ New</div>
                : <span>★ {spot?.avgStarRating} · {spot?.numReviews === 1 ? <span>{spot?.numReviews} review</span> : <span> {spot?.numReviews} reviews</span> } </span>
                }
            </div>
            <br></br>
            <div className={'post-review-area'}>
                {sessionUser && sessionUser.id !== spot?.ownerId && existingReview.length === 0 &&
                    <div><button className={`post-review-button`}>Post Your Review</button><br></br>Be the first to post a review!</div>
                }
            </div>
            <div className={`reviewscontainer`}>
                {reviews && Object.values(reviews).map((review) => (
                    <div key={`${review.id}`}><ReviewTile key={`review-${review.id}`} className={`reviewItem`} review={review} /></div>
                ))}
            </div>
            </div>
        </div>
        </>
    )
}

export default SpotDetail;
