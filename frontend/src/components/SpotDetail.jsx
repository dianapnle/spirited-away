import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotDetail } from "../store/spots";

function SpotDetail () {
    const {spotId} = useParams();
    const spot = useSelector(state => state.spots.byId[spotId]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpotDetail(spotId))
    }, [spotId, dispatch])

    return (
        <>
        <h2>{spot.name}</h2>
        <div>{spot.spotImages}</div>
        </>
    )
}

export default SpotDetail;
