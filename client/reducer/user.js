import produce from "immer";

export const initialState = {
  // logInLoading: false /* 로그인 로딩 */,
  // logInDone: false,
  // logInError: null,

  // logOutLoading: false /* 로그인 로딩 */,
  // logOutDone: false,
  // logOutError: null,

  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,
  user: null,
  singUpDate: {},
  loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_REQUEST = "LOG_IN_SUCCESS";
export const LOG_IN_REQUEST = "LOG_IN_FAILURE";

export const LOG_IN_REQUEST = "LOG_OUT_REQUEST";
export const LOG_IN_REQUEST = "LOG_OUT_SUCCESS";
export const LOG_IN_REQUEST = "LOG_OUT_FAILURE";

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        user: action.data,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        user: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        isLoggingOut: true,
      };
    default:
      return state;
  }
};

// const reducer = (state = initialState, action) =>
//   produce(state, (draft) => {
//     switch (action.type) {
//     }
//   });

export default reducer;
