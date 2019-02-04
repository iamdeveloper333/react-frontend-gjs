import {SINGLEID_RECORDS_SUCCESS, SINGLEID_RECORDS_FAILURE, CLEAR_RECORDS} from "../actions/singleid";

const INITIAL_STATE = {
    results: 0


}

export default function authUser(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SINGLEID_RECORDS_SUCCESS:
            return action.rows
        case SINGLEID_RECORDS_FAILURE:
            return INITIAL_STATE
        case CLEAR_RECORDS:
            return INITIAL_STATE
        default:
            return state

    }
}
