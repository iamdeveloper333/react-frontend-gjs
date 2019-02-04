import "regenerator-runtime/runtime";
import {call, put, takeLatest} from 'redux-saga/effects';
import {singlereadRecords} from "../../utils/api";

import {SINGLEREAD_RECORDS_REQUEST, singlereadRecordsSuccess, singlereadRecordsFailure} from "../../actions/singleread";


function* singlereadRecordsAPI(action) {
    console.log("ssssssssssss",action);
    try {
        
    console.log("ssssssssssss",action);
        const result = yield call(singlereadRecords, action.details)
        console.log("ssssssssssss",result);

        if (result) {
            yield put(singlereadRecordsSuccess(result))
        } else {
           
            //We did not get any data
            yield put(singlereadRecordsFailure())
        }

    } catch (e) {
        // console.log("ssssssssssss");
        yield put(singlereadRecordsFailure())
    }
}


function* watchSingleReadRecordsRequested() {    
    yield takeLatest(SINGLEREAD_RECORDS_REQUEST, singlereadRecordsAPI)
}

export default watchSingleReadRecordsRequested;
