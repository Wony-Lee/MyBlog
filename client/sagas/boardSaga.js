import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  ADD_BOARD_FAILURE,
  ADD_BOARD_REQUEST,
  ADD_BOARD_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
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

function uploadImagesAPI(data) {
  return axios.post(`/board/images`, data);
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddBoard() {
  yield takeLatest(ADD_BOARD_REQUEST, addBoard);
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

export default function* boardSaga() {
  yield all([fork(watchAddBoard), fork(watchUploadImages)]);
}
