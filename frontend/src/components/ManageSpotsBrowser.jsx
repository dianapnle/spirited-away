import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUserSpots } from '../store/spots.js';
import SpotTile from './SpotTile.jsx';
import './SpotTile.css'
import { useNavigate } from 'react-router-dom';


function ManageSpotsBrowser () {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const spots = useSelector(state => state.spots.byId);
    const [isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {
        dispatch(getCurrentUserSpots()).then(() => {
            setIsLoaded(true)
        })
    }, [isLoaded, dispatch])

    return (
        <>
        <h2></h2>
        <div className={`spotscontainer`}>
        { Object.values(spots).map((spot) => (
            <>
            <div>
            <SpotTile key={`${spot.id}`} spot={spot} />
            <div><span><button key={`update-${spot.id}`} onClick={() => {navigate(`/spots/${spot.id}/edit`)}}>Update</button> <button key={`delete-${spot.id}`}>Delete</button></span></div>
            </div>
            </>
        ))}
        </div>
        </>
    )
}

export default ManageSpotsBrowser;
