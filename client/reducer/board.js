import produce from "immer";

export const initialState = {
  boardPost: [],
  imagesPath: [],

  addBoardLoding: false,
  addBoardDone: false,
  addBoardError: null,

  uploadImagesloading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
};

export const ADD_BOARD_REQUEST = "ADD_BOARD_REQUEST";
export const ADD_BOARD_SUCCESS = "ADD_BOARD_SUCCESS";
export const ADD_BOARD_FAILURE = "ADD_BOARD_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const REMOVE_IMAGE_REQUEST = "REMOVE_IMAGE_REQUEST";
export const REMOVE_IMAGE_SUCCESS = "REMOVE_IMAGE_SUCCESS";
export const REMOVE_IMAGE_FAILURE = "REMOVE_IMAGE_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const addBoard = (data) => ({
  type: ADD_BOARD_REQUEST,
  data,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_BOARD_REQUEST:
        draft.addBoardLoding = true;
        draft.addBoardDone = false;
        draft.addBoardError = null;
        break;
      case ADD_BOARD_SUCCESS:
        draft.addBoardLoding = false;
        draft.addBoardDone = true;
        draft.boardPost.unshift(action.data);
        draft.imagesPath = [];
        break;
      case ADD_BOARD_REQUEST:
        draft.addBoardLoding = false;
        draft.addBaordError = action.error;
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesloading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case UPLOAD_IMAGES_SUCCESS:
        draft.imagesPath = action.data;
        draft.uploadImagesloading = false;
        draft.uploadImagesDone = true;
        break;
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesloading = false;
        draft.uploadImagesError = action.error;
        break;
      case REMOVE_IMAGE:
        draft.imagesPath = draft.imagesPath.filter((v, i) => i !== action.data);
        break;
      default:
        break;
    }
  });

export default reducer;
