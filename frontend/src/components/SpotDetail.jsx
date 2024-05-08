import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotDetail } from "../store/spots";

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
        <h2>{spot?.name}</h2>
        <div>
            {spot?.SpotImages && spot.SpotImages.map((img) => (
        <img key={`spotImg${img.id}`}style={{height: "200px"}} src={img.url}/>
        ))}
        </div>
        </>
    )
}

export default SpotDetail;
