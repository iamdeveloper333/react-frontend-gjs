import "regenerator-runtime/runtime";
import {call, put, takeLatest} from 'redux-saga/effects';
import {admitreadRecords} from "../../utils/api";

import {ADMITREAD_RECORDS_REQUEST, admitreadRecordsSuccess, admitreadRecordsFailure} from "../../actions/readadmitcards";


function* admitreadRecordsAPI(action) {
    
    try {
        const result = yield call(admitreadRecords, action.details)
        console.log("inside admit :",result);
        if (result.length) {
            yield put(admitreadRecordsSuccess(result))
        } else {
            //We did not get any data
            yield put(admitreadRecordsFailure())
        }

    } catch (e) {
        yield put(admitreadRecordsFailure())
    }
}


function* watchAdmitReadRecordsRequested() {
    yield takeLatest(ADMITREAD_RECORDS_REQUEST, admitreadRecordsAPI)
}

export default watchAdmitReadRecordsRequested;
