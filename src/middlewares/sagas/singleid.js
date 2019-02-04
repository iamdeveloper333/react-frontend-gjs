import "regenerator-runtime/runtime";
import {call, put, takeLatest} from 'redux-saga/effects';
import {singleidRecords} from "../../utils/api";

import {SINGLEID_RECORDS_REQUEST, singleidRecordsSuccess, singleidRecordsFailure} from "../../actions/singleid";


function* singleidRecordsAPI(action) {
    try {
        const result = action.details
        if (result) {
            yield put(singleidRecordsSuccess(result.val))
        } else {
            yield put(singleidRecordsFailure())
        }

    } catch (e) {
        yield put(singleidRecordsFailure())
    }
}


function* watchSingleIdRecordsRequested() {    
    yield takeLatest(SINGLEID_RECORDS_REQUEST, singleidRecordsAPI)
}

export default watchSingleIdRecordsRequested;
