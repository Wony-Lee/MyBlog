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

  loadBoardLoading: false,
  loadBoardDone: false,
  loadBoardError: null,
};

export const ADD_BOARD_REQUEST = "ADD_BOARD_REQUEST";
export const ADD_BOARD_SUCCESS = "ADD_BOARD_SUCCESS";
export const ADD_BOARD_FAILURE = "ADD_BOARD_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const REMOVE_BOARD_REQUEST = "REMOVE_BOARD_REQUEST";
export const REMOVE_BOARD_SUCCESS = "REMOVE_BOARD_SUCCESS";
export const REMOVE_BOARD_FAILURE = "REMOVE_BOARD_FAILURE";

export const LOAD_BOARD_REQUEST = "LOAD_BOARD_REQUEST";
export const LOAD_BOARD_SUCCESS = "LOAD_BOARD_SUCCESS";
export const LOAD_BOARD_FAILURE = "LOAD_BOARD_FAILURE";

export const LOAD_BOARDS_REQUEST = "LOAD_BOARDS_REQUEST";
export const LOAD_BOARSD_SUCCESS = "LOAD_BOARDS_SUCCESS";
export const LOAD_BOASRD_FAILURE = "LOAD_BOARDS_FAILURE";

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

      case LOAD_BOARD_REQUEST:
        break;
      case LOAD_BOARD_SUCCESS:
        break;
      case LOAD_BOARD_REQUEST:
        break;

      case LOAD_BOARDS_REQUEST:
        break;
      case LOAD_BOARDS_SUCCESS:
        break;
      case LOAD_BOARDS_REQUEST:
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
