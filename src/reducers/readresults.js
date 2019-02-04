import {RESULTREAD_RECORDS_SUCCESS, RESULTREAD_RECORDS_FAILURE, CLEAR_RECORDS} from "../actions/readresults";

const INITIAL_STATE = {
    results: [],
    count: 0,
    next: "",
    previous: ""


}

export default function authUser(state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESULTREAD_RECORDS_SUCCESS:
            return action.rows
        case RESULTREAD_RECORDS_FAILURE:
            return INITIAL_STATE
        case CLEAR_RECORDS:
            return INITIAL_STATE
        default:
            return state

    }
}
