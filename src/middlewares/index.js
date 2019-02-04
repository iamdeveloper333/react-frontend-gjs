import {applyMiddleware} from 'redux';
import logger from './logger';
import sagaMiddleware from './sagas/sagaMiddleware'


export default applyMiddleware(sagaMiddleware, logger)
