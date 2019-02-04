import "regenerator-runtime/runtime";
import {call, put, takeLatest} from 'redux-saga/effects';
import {readRecords} from "../../utils/api";

import {READ_RECORDS_REQUEST, readRecordsSuccess, readRecordsFailure} from "../../actions/read";


function* readRecordsAPI(action) {
    try {
        const result = yield call(readRecords, action.details)
        if (result.length) {
            yield put(readRecordsSuccess(result))
        } else {
            //We did not get any data
            yield put(readRecordsFailure())
        }

    } catch (e) {
        yield put(readRecordsFailure())
    }
}


function* watchReadRecordsRequested() {
    yield takeLatest(READ_RECORDS_REQUEST, readRecordsAPI)
}

export default watchReadRecordsRequested;
