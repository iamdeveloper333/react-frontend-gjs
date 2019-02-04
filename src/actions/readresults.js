export const RESULTREAD_RECORDS_SUCCESS = "RESULTREAD_RECORDS_SUCCESS";
export const RESULTREAD_RECORDS_FAILURE = "RESULTREAD_RECORDS_FAILURE";
export const RESULTREAD_RECORDS_REQUEST = "RESULTREAD_RECORDS_REQUEST";
export const CLEAR_RECORDS = "CLEAR_RECORDS";

export function resultreadRecordsSuccess(rows) {

    return {
        type: RESULTREAD_RECORDS_SUCCESS,
        rows

    }
}


export function resultreadRecordsFailure(message) {

    return {
        type: RESULTREAD_RECORDS_FAILURE,
        message

    }
}


export function resultreadRecordsRequest(details) {
    return {
        type: RESULTREAD_RECORDS_REQUEST,
        details

    }
}

export function clearRecords() {

    return {
        type: CLEAR_RECORDS

    }
}
