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
        <div onClick={() => {navigate(`/spots/${spot.id}`)}} data-text={spot.name} className={`spotTileContainer tooltip`}>
            <div className={`spotitem`}>
                <img className={`spotsimg`} src={`${spot.previewImage}`}/>
                <div>
                    <div className={`top-text`}>
                        <div className={`location`}>{spot.city}, {spot.state}</div>
                        {spot.avgRating === 0.0
                ? <div>★ New</div>
                : <div className={`rating`}>★ {spot.avgRating?.toFixed(1)}</div>
                }
                    </div>
                    <div className={`bottom-text`}>
                    <div className={`price`}>${spot.price?.toFixed(2)} </div>
                    <div> night</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default SpotTile;
