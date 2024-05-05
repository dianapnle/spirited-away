import { csrfFetch } from "./csrf";

const LOGIN = 'session/loginUser';

const loginUser = (user) => {
    return {
            type: LOGIN,
            payload: user
        };
};

const LOGOUT = 'session/logoutUser'

const logoutUser = () => {
    return {
        type: LOGOUT
    };
};


//thunk action creator to login using backend if it matches
export const login = (user) => async dispatch => {
    //grab the credential and password from the body
    const { credential, password } = user;

    const response = await csrfFetch(`/api/session`, {
        method: "POST",
        body: JSON.stringify({
            credential,
            password
        })
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(loginUser(data.user));
      return response;
    }
  }

  //thunk action creator to restore user
export const restoreUser = () => async (dispatch) => {
    //fetch the current api/session user credentials that is logged in
    const response = await csrfFetch(`/api/session`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loginUser(data.user))
        return response;
    }
}

//thunk action creator to sign up user to the backend
export const signup = (user) => async (dispatch) => {
    //extract the needed params from the input
    const { username, firstName, lastName, email, password } = user
    const response = await csrfFetch(`/api/users`, {
        method: "POST",
        body: JSON.stringify({
            username,
            firstName,
            lastName,
            email,
            password
        })
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(loginUser(data.user));
        return response;
    }
}

//thunk action creator to log out the user
export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(logoutUser());
        return response;
    }
}

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload };
        case LOGOUT:
            return { ...state, user: null };
        default:
            return state;
  }
};

export default sessionReducer;
