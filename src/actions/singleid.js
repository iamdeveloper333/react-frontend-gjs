export const SINGLEID_RECORDS_SUCCESS = "SINGLEID_RECORDS_SUCCESS";
export const SINGLEID_RECORDS_FAILURE = "SINGLEID_RECORDS_FAILURE";
export const SINGLEID_RECORDS_REQUEST = "SINGLEID_RECORDS_REQUEST";

export function singleidRecordsSuccess(rows) {

    return {
        type: SINGLEID_RECORDS_SUCCESS,
        rows

    }
}


export function singleidRecordsFailure(message) {

    return {
        type: SINGLEID_RECORDS_FAILURE,
        message

    }
}


export function singleidRecordsRequest(details) {
    return {
        type: SINGLEID_RECORDS_REQUEST,
        details

    }
}


