import { Link } from "react-router-dom";

function SpotTile ({spot}) {

    if (!spot.previewImage) {
        spot.previewImage=`https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png`
    }
    if (!spot.avgRating) {
        spot.avgRating=5
    }

    return (
        <>
        <div className={`spotTileContainer`}>
        <div className={`spotitem`}>
        <Link to={`spots/${spot.id}`}> <img className={`spotsimg`}src={`${spot.previewImage}`}/> </Link>
        <div>
        <p>{spot.city}, {spot.state}</p>
        <div>★ {spot.avgRating}</div>
        <p>${spot.price.toFixed(2)} night</p>
        </div>
        </div>
        </div>
        </>
    )
}


export default SpotTile;
