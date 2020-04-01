import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import actions from "../actions/login.action";
import templateMasterApi from "../../_webservices/template.master.api";

function* loginUserWithCredentials(action:any) {
    try {
        let { data } = yield call(templateMasterApi.callLoginUser,action.payLoad);
        console.log(data);
        yield put({type: actions.USER_LOGIN_SUCCESS, data});
    } catch (e) {
        yield put({type: 'USER_LOGIN_FAIL' , message: e.message});
    }
}


// Setting up Watcher
function* loginWatcherSaga() {
    yield takeLatest(actions.USER_LOGIN_REQUEST, loginUserWithCredentials);
}

export default loginWatcherSaga;

