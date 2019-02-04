import {all} from 'redux-saga/effects'
import authUser from './authUser';
import watchReadRecordsRequested from './read';
import watchSingleReadRecordsRequested from './singleread';
import watchSingleIdRecordsRequested from './singleid';
import watchAdmitReadRecordsRequested from './readadmitcards';
import watchResultReadRecordsRequested from './readresults';
import watchsearchRecordsRequested from './searchparam';
import watchBlogRecordsRequested from './blogs';


export default function* rootSaga() {
    yield all([ authUser(),watchReadRecordsRequested(),watchSingleReadRecordsRequested(),watchSingleIdRecordsRequested(),watchAdmitReadRecordsRequested(),watchResultReadRecordsRequested(),watchsearchRecordsRequested(),watchBlogRecordsRequested()])

}
