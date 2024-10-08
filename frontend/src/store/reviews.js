import { csrfFetch } from "./csrf";
//action creators

const LOAD = "reviews/LOAD";

const load = (reviews) => ({
  type: LOAD,
  payload: reviews,
});

const REMOVE = "reviews/REMOVE";

const remove = (reviewId) => ({
  type: REMOVE,
  reviewId,
});

const sortList = (list) => {
  return list.sort((reviewA, reviewB) => {
    var c = new Date(reviewA.updatedAt).getTime();
    var d = new Date(reviewB.updatedAt).getTime();
    return d - c;
  });
};

export const getCurrentSpotReviews = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
  if (response.ok) {
    const list = await response.json();
    //object with key value of array for Reviews
    const reviews = list.Reviews;
    dispatch(load(reviews));
    return reviews;
  }
};

export const createReview = (payload, spotId) => async () => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const review = await response.json();
    return review;
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    const spot = await response.json();
    dispatch(remove(reviewId));
    return spot;
  }
};

const initialState = {
  byId: {},
  sortedReviews: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allReviews = { ...state };
      action.payload.forEach((review) => {
        allReviews.byId[review.id] = review;
      });
      return {
        ...allReviews,
        ...state,
        sortedReviews: sortList(action.payload),
      };
    }
    case REMOVE: {
      const newState = { ...state };
      const newById = { ...state.byId };
      const newSortedReviews = state.sortedReviews.filter(
        (review) => review.id != action.reviewId,
      );
      delete newById[action.reviewId];
      newState.byId = newById;
      newState.sortedReviews = newSortedReviews;
      return newState;
    }
    default:
      return state;
  }
};

export default reviewReducer;
