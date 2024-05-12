import { useNavigate } from 'react-router-dom';

function SpotTile ({spot}) {
    const navigate = useNavigate();

    if (!spot.previewImage) {
        spot.previewImage=`https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png`
    }
    if (!spot.avgRating) {
        spot.avgRating=0.0
    }

    return (
        <>
        <div onClick={() => {navigate(`/spots/${spot.id}`)}} className={`spotTileContainer`}>
        <div className={`spotitem`}>
        <img className={`spotsimg`} src={`${spot.previewImage}`}/>
        <div>
        <p>{spot.city}, {spot.state}</p>
        <div>★ {spot.avgRating.toFixed(1)}</div>
        <p>${spot.price.toFixed(2)} night</p>
        </div>
        </div>
        </div>
        </>
    )
}


export default SpotTile;
