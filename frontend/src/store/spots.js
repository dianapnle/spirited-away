import { csrfFetch } from "./csrf";
//action creators

const LOAD = "spots/LOAD";

const load = spots => ({
    type: LOAD,
    payload: spots
});

const DETAIL = "spots/DETAIL";

const getDetail = spot => ({
    type: DETAIL,
    spot
})


//thunk action creator
export const getSpots = () => async (dispatch) =>  {
        const response = await csrfFetch('/api/spots');
        if (response.ok) {
            const list = await response.json();
            //object with key value of array for Spots
            const spots = list.Spots;
            dispatch(load(spots))
            return response
        }
}

export const getSpotDetail= (spotId) => async (dispatch) => {
        const response = await csrfFetch(`/api/spots/${spotId}`)
        if (response.ok) {
            const spot = await response.json();
            dispatch(getDetail(spot));
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
        newState.byId[action.spot.id] = action.spot
      }
      default:
        return state;
    }
  };

  export default spotsReducer;
