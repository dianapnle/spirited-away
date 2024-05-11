import { csrfFetch } from "./csrf";
//action creators

const LOAD = "spots/LOAD";

const load = spots => ({
    type: LOAD,
    payload: spots
});

const DETAIL = "spots/DETAIL";

const getDetail = (spot) => ({
    type: DETAIL,
    payload: spot
})


//thunk action creator
export const getSpots = () => async (dispatch) =>  {
        // const response = await csrfFetch('/api/spots');
        // if (response.ok) {
        //     const list = await response.json();
        //     //object with key value of array for Spots
        //     const spots = list.Spots;
        //     dispatch(load(spots))
        //     return spots
        // }
    let done = false;
    let page = 1;
    while(!done) {
      const response = await csrfFetch(`/api/spots?page=${page}`);
      if (response.ok) {
        const list = await response.json();
        //object with key value of array for Spots
        const spots = list.Spots;
        dispatch(load(spots))
        if(spots.length === 0) {
          done = true
      }
      page += 1;
   }
}
}

export const getCurrentUserSpots = () => async (dispatch) => {
        const response = await csrfFetch('/api/spots/current');
        if (response.ok) {
            const list = await response.json();
            //object with key value of array for Spots
            const spots = list.Spots;
            dispatch(load(spots))
            return spots
        }
}

export const getSpotDetail= (id) => async (dispatch) => {
        const response = await csrfFetch(`/api/spots/${id}`)
        if (response.ok) {
            const spot = await response.json();
            if (spot.SpotImages) {
              for (const img of spot.SpotImages) {
                if (img.preview === true){
                  spot['previewImage'] = img.url
                }
              }
            }
            dispatch(getDetail(spot));
            return spot
        }
}

export const createSpot = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/spots`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const spot = await response.json();
    dispatch(getDetail(spot));
    return spot
  }
};

export const editSpot = (payload, spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const spot = await response.json();
    dispatch(getDetail(spot));
    return spot
  }
};



export const createPreviewImg = (payload) => async () => {
    const response = await csrfFetch(`/api/spots/${payload.spotId}/images`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const previewImg = await response.json();
    return previewImg
  }
}

export const createSpotImg = (payload) => async () => {
  const response = await csrfFetch(`/api/spots/${payload.spotId}/images`, {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(payload)
});

if (response.ok) {
  const spotImg = await response.json();
  return spotImg
}
}

const initialState = {
    byId: {}
}

//action reducer
const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD: {
        const allSpots = { ...state };
        action.payload.forEach(spot => {
          allSpots.byId[spot.id] = spot;
        });
        return {
          ...allSpots,
          ...state
        };
      }
      case DETAIL: {
        const newState = {
            ...state
        };
        const spot = action.payload;
        newState.byId[spot.id] = spot
        return newState
      }
      default:
        return state;
    }
  };

  export default spotsReducer;
