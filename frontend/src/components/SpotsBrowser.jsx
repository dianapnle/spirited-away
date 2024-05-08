import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSpots } from '../store/spots.js';
import SpotTile from   './SpotTile.jsx';
import './SpotTile.css'


function SpotsBrowser () {
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spots.byId);
    const [isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {
        dispatch(getSpots()).then(() => {
            setIsLoaded(true)
        })
    }, [isLoaded, dispatch])

    return (
        <>
        <h2></h2>
        <div className={`spotscontainer`}>
        { Object.values(spots).map((spot) => (
            <SpotTile key={`${spot.id}`} spot={spot} />
        ))}
        </div>
        </>
    )
}

export default SpotsBrowser;
