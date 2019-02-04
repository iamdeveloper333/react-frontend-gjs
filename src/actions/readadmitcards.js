export const ADMITREAD_RECORDS_SUCCESS = "ADMITREAD_RECORDS_SUCCESS";
export const ADMITREAD_RECORDS_FAILURE = "ADMITREAD_RECORDS_FAILURE";
export const ADMITREAD_RECORDS_REQUEST = "ADMITREAD_RECORDS_REQUEST";
export const CLEAR_RECORDS = "CLEAR_RECORDS";

export function admitreadRecordsSuccess(rows) {

    return {
        type: ADMITREAD_RECORDS_SUCCESS,
        rows

    }
}


export function admitreadRecordsFailure(message) {

    return {
        type: ADMITREAD_RECORDS_FAILURE,
        message

    }
}


export function admitreadRecordsRequest(details) {
    return {
        type: ADMITREAD_RECORDS_REQUEST,
        details

    }
}

export function clearRecords() {

    return {
        type: CLEAR_RECORDS

    }
}
