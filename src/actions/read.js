export const READ_RECORDS_SUCCESS = "READ_RECORDS_SUCCESS";
export const READ_RECORDS_FAILURE = "READ_RECORDS_FAILURE";
export const READ_RECORDS_REQUEST = "READ_RECORDS_REQUEST";
export const CLEAR_RECORDS = "CLEAR_RECORDS";

export function readRecordsSuccess(rows) {

    return {
        type: READ_RECORDS_SUCCESS,
        rows

    }
}


export function readRecordsFailure(message) {

    return {
        type: READ_RECORDS_FAILURE,
        message

    }
}


export function readRecordsRequest(details) {
    return {
        type: READ_RECORDS_REQUEST,
        details

    }
}

export function clearRecords() {

    return {
        type: CLEAR_RECORDS

    }
}
