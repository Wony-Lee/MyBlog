import { all, fork } from "redux-saga/effects";
import axios from "axios";
import postSaga from "./postSaga";
import userSaga from "./userSaga";
import dailySaga from "./dailySaga";

axios.defaults.baseURL = "http://localhost:4444";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga), fork(dailySaga)]);
}
