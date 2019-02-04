export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const UNSET_AUTHED_USER = "UNSET_AUTHED_USER";
export const SET_LOGIN_FAIL = "SET_LOGIN_FAIL";
export const VALIDATE_USER_REQUESTED = "VALIDATE_USER_REQUESTED";
// export const VALIDATE_USER_LOGOUT_REQUESTED = "VALIDATE_USER_LOGOUT_REQUESTED";


export function setAuthedUser(details) {

    return {
        type: SET_AUTHED_USER,
        details

    }
}


export function unSetAuthedUser() {
    return {
        type: UNSET_AUTHED_USER,

    }
}

export function setLoginFailed() {
    return {
        type: SET_LOGIN_FAIL,

    }
}

export function getValidatedUser(authData) {
    return {
        type: VALIDATE_USER_REQUESTED,
        authData

    }
}

// export function getValidatedUserLogout(authData) {
//     return {
//         type: VALIDATE_USER_LOGOUT_REQUESTED,
//         authData

//     }
// }
