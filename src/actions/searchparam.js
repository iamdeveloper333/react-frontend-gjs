export const SEARCH_RECORDS_SUCCESS = "SEARCH_RECORDS_SUCCESS";
export const SEARCH_RECORDS_FAILURE = "SEARCH_RECORDS_FAILURE";
export const SEARCH_RECORDS_REQUEST = "SEARCH_RECORDS_REQUEST";

export function searchRecordsSuccess(rows) {

    return {
        type: SEARCH_RECORDS_SUCCESS,
        rows

    }
}


export function searchRecordsFailure(message) {

    return {
        type: SEARCH_RECORDS_FAILURE,
        message

    }
}


export function searchRecordsRequest(details) {
    return {
        type: SEARCH_RECORDS_REQUEST,
        details

    }
}


