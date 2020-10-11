import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as t from "../constants";
import * as Api from '../Api.js';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loginRootUser(action) {

   try {
		const user = yield call(Api.loginRootUser, action.payload);
    	yield put({type: t.ROOT_USER_LOGIN, user: user.root, token:user.token});
		action.payload.history.push("/dashboard/dashboard");

   } catch (e) {
	   console.log(e, "Can not login from saggaggaggag")
   }
}

function* mywatchLogin() {
  yield takeLatest("RLOGIN", loginRootUser);
}


export default mywatchLogin;
