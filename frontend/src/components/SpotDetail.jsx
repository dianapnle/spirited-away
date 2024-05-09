import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotDetail } from "../store/spots";
import './SpotDetail.css'

function SpotDetail () {
    const {spotId} = useParams();
    const id = Number(spotId)
    const spot = useSelector(state => state.spots.byId[id]);
    const [isLoaded, setIsLoaded] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpotDetail(id)).then(() => {
            setIsLoaded(true)
        })
    }, [id, dispatch, isLoaded])


    return (
        <>
        <div className={`overallContainer`}>
        <h2>{spot?.name}</h2>
        <h3>{spot?.city} {spot?.state} {spot?.country}</h3>
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
                ? <div>★ 0.0 · {spot?.numReviews} reviews</div>
                : <div>★ {spot?.avgStarRating} · {spot?.numReviews} reviews</div>
                }
                </div>
                <div className={`reserve-area`}>
                <button className={`reserve-button`}> Reserve</button>
                </div>
            </div></div>
        </div>
        </>
    )
}

export default SpotDetail;
