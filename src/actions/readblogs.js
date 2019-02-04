export const BLOGREAD_RECORDS_SUCCESS = "BLOGREAD_RECORDS_SUCCESS";
export const BLOGREAD_RECORDS_FAILURE = "BLOGREAD_RECORDS_FAILURE";
export const BLOGREAD_RECORDS_REQUEST = "BLOGREAD_RECORDS_REQUEST";
export const CLEAR_RECORDS = "CLEAR_RECORDS";

export function blogreadRecordsSuccess(rows) {

    return {
        type: BLOGREAD_RECORDS_SUCCESS,
        rows

    }
}


export function blogreadRecordsFailure(message) {

    return {
        type: BLOGREAD_RECORDS_FAILURE,
        message

    }
}


export function blogreadRecordsRequest(details) {
    return {
        type: BLOGREAD_RECORDS_REQUEST,
        details

    }
}

export function clearRecords() {

    return {
        type: CLEAR_RECORDS

    }
}
