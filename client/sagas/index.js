import { all, pork } from "redux-saga/effects";
import axios from "aixos";
import postSaga from "./postSaga";
import userSaga from "./userSaga";

axios.defaults.baseURL = "http://localhost:4444";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
