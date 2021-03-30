import axios from "axios";
import { all, delay, put, takeLatest } from "redux-saga/effects";

function logInAPI(data) {
  return axios.post("/adminLogin", data);
}

function* logIn(action) {
  try {
    yield delay(1000);
    yield put({
      type: "LOG_IN_SUCCESS",
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILRUER",
      data: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/adminLogout");
}

function* logOut() {
  try {
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
