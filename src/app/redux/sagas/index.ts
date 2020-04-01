// import templateMasterSagas from './template.master.saga'
import loginWatcherSaga from './login.saga'
import { all } from 'redux-saga/effects';

// function* applicationSagas() {
//    return  yield all([loginWatcherSaga]);
// }
export default loginWatcherSaga;
