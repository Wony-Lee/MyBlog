import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  ADD_BOARD_FAILURE,
  ADD_BOARD_REQUEST,
  ADD_BOARD_SUCCESS,
} from "../reducer/board";

function addBoardAPI(data) {
  return axios.post("/board", data);
}

function* addBoard(action) {
  try {
    const result = yield call(addBoardAPI, action.data);
    yield put({
      type: ADD_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_BOARD_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddBoard() {
  yield takeLatest(ADD_BOARD_REQUEST, addBoard);
}

export default function* boardSaga() {
  yield all([fork(watchAddBoard)]);
}
