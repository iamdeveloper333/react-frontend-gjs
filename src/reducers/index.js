import {combineReducers} from 'redux';
import authUser from './authUser';
import read from './read';
import readadmitcards from './readadmitcards';
import readresults from './readresults';
import singleread from './singleread';
import singleid from './singleid';
import searchparam from './searchparam';
import blogs from './blogs';


export default combineReducers({authUser,read,singleread,singleid,readadmitcards,readresults,searchparam,blogs})
