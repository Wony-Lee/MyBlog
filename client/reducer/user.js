import produce from "immer";

export const initialState = {
  logInLoading: false /* 로그인 로딩 */,
  logInDone: false,
  logInError: null,

  logOutLoading: false /* 로그인 로딩 */,
  logOutDone: false,
  logOutError: null,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_REQUEST = "LOG_IN_SUCCESS";
export const LOG_IN_REQUEST = "LOG_IN_FAILURE";

export const LOG_IN_REQUEST = "LOG_OUT_REQUEST";
export const LOG_IN_REQUEST = "LOG_OUT_SUCCESS";
export const LOG_IN_REQUEST = "LOG_OUT_FAILURE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });

export default reducer;
