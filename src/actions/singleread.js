export const SINGLEREAD_RECORDS_SUCCESS = "SINGLEREAD_RECORDS_SUCCESS";
export const SINGLEREAD_RECORDS_FAILURE = "SINGLEREAD_RECORDS_FAILURE";
export const SINGLEREAD_RECORDS_REQUEST = "SINGLEREAD_RECORDS_REQUEST";
export const CLEAR_RECORDS = "CLEAR_RECORDS";

export function singlereadRecordsSuccess(rows) {

    return {
        type: SINGLEREAD_RECORDS_SUCCESS,
        rows

    }
}


export function singlereadRecordsFailure(message) {

    return {
        type: SINGLEREAD_RECORDS_FAILURE,
        message

    }
}


export function singlereadRecordsRequest(details) {
    return {
        type: SINGLEREAD_RECORDS_REQUEST,
        details

    }
}

export function singleclearRecords() {

    return {
        type: CLEAR_RECORDS

    }
}
