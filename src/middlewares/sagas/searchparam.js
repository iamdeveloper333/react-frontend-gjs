import "regenerator-runtime/runtime";
import {call, put, takeLatest} from 'redux-saga/effects';
import {searchRecords} from "../../utils/api";

import {SEARCH_RECORDS_REQUEST, searchRecordsSuccess, searchRecordsFailure} from "../../actions/searchparam";


function* searchRecordsAPI(action) {
    console.log("kucjhhhh",action.details);
    
    try {
        const result = yield call(searchRecords, action.details)
        if (result.length) {
            yield put(searchRecordsSuccess(result))
        } else {
            yield put(searchRecordsFailure())
        }

    } catch (e) {
        yield put(searchRecordsFailure())
    }
}


function* watchsearchRecordsRequested() {    
    yield takeLatest(SEARCH_RECORDS_REQUEST, searchRecordsAPI)
}

export default watchsearchRecordsRequested;
