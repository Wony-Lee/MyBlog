export const initialState = {
  boardPost: [],
};

export const ADD_BOARD_REQUEST = "ADD_BOARD_REQUEST";
export const ADD_BOARD_SUCCESS = "ADD_BOARD_SUCCESS";
export const ADD_BOARD_FAILURE = "ADD_BOARD_FAILURE";

export const addBoard = (data) => ({
  type: ADD_BOARD_REQUEST,
  data,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_BOARD_REQUEST:
        break;
      case ADD_BOARD_SUCCESS:
        break;
      case ADD_BOARD_REQUEST:
        break;
      default:
        break;
    }
  });

export default reducer;
