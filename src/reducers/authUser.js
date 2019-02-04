import {SET_AUTHED_USER, UNSET_AUTHED_USER, SET_LOGIN_FAIL} from "../actions/authUser";

const initialState = {
    loggedIn: false,
    attemptFailure: false
}

export default function authUser(state = initialState, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {...state, user: action.details, loggedIn: true, attemptFailure: false}
        case UNSET_AUTHED_USER:
            return {loggedIn: false}
        case SET_LOGIN_FAIL:
            return {...state, attemptFailure: true}
        default:
            return state

    }
}