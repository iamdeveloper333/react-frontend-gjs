import "regenerator-runtime/runtime";
import {call, put, takeLatest} from 'redux-saga/effects';
import {resultreadRecords} from "../../utils/api";

import {RESULTREAD_RECORDS_REQUEST, resultreadRecordsSuccess, resultreadRecordsFailure} from "../../actions/readresults.js";


function* resultreadRecordsAPI(action) {

    try {
        const result = yield call(resultreadRecords, action.details)
        if (result.length) {
            yield put(resultreadRecordsSuccess(result))
        } else {
            //We did not get any data
            yield put(resultreadRecordsFailure())
        }

    } catch (e) {
        yield put(resultreadRecordsFailure())
    }
}


function* watchResultReadRecordsRequested() {
    yield takeLatest(RESULTREAD_RECORDS_REQUEST, resultreadRecordsAPI)
}

export default watchResultReadRecordsRequested;
