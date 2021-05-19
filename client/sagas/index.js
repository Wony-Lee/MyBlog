import { all, fork } from "redux-saga/effects";
import axios from "axios";
import postSaga from "./postSaga";
import userSaga from "./userSaga";
import boardSaga from "./boardSaga";
import { baseURL } from "../config/config";

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([fork(postSaga), fork(userSaga), fork(boardSaga)]);
}
