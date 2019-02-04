import "regenerator-runtime/runtime";
import {call, put, takeLatest} from 'redux-saga/effects';
import {blogreadRecords} from "../../utils/api";

import {BLOGREAD_RECORDS_REQUEST, blogreadRecordsSuccess, blogreadRecordsFailure} from "../../actions/readblogs.js";


function* blogreadRecordsAPI(action) {

    try {
        const blog = yield call(blogreadRecords, action.details)
        if (blog.length) {
            yield put(blogreadRecordsSuccess(blog))
        } else {
            //We did not get any data
            yield put(blogreadRecordsFailure())
        }

    } catch (e) {
        yield put(blogreadRecordsFailure())
    }
}


function* watchblogReadRecordsRequested() {
    yield takeLatest(BLOGREAD_RECORDS_REQUEST, blogreadRecordsAPI)
}

export default watchblogReadRecordsRequested;
