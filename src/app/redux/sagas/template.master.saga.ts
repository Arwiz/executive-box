import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import productActions from "../actions/template.master.action";
import templateMasterApi from "../../_webservices/template.master.api";

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchProductFromServer(action:any) {
//     try {
//         let { data } = yield call(templateMasterApi.callLoginUser);
//         yield put({type: productActions.PRODUCT_FETCH_SUCCESS, data});
//     } catch (e) {
//         yield put({type: "PRODUCT_FETCH_FAIL", message: e.message});
//     }
// }

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchProductFromServer(action:any) {
//     try {
//         let { data } = yield call(templateMasterApi.callLoginUser);
//         yield put({type: productActions.PRODUCT_FETCH_SUCCESS, data});
//     } catch (e) {
//         yield put({type: "PRODUCT_FETCH_FAIL", message: e.message});
//     }
// }

function* loginUserWithCredentials(action:any) {
    try {
        let { data } = yield call(templateMasterApi.callLoginUser, action.payload);
        yield put({type: productActions.USER_LOGIN_SUCCESS, data});
    } catch (e) {
        yield put({type: 'USER_LOGIN_FAIL' , message: e.message});
    }
}


// Setting up Watcher
function* productSaga() {
    yield takeLatest(productActions.USER_LOGIN_REQUEST, loginUserWithCredentials);
}

export default productSaga;

