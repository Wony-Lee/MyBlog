import produce from "immer";

export const initialState = {
  logInLoading: false /* 로그인 로딩 */,
  logInDone: false,
  logInError: null,

  logOutLoading: false /* 로그인 로딩 */,
  logOutDone: false,
  logOutError: null,

  user: null,
  singUpDate: {},
  loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

const dummyUser = (data) => ({
  ...data,
  nickname: "Admin",
  id: 1,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.user = dummyUser(action.data);
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.user = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
