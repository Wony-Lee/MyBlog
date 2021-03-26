import produce from "immer";

export const initialState = {
  // logInLoading: false /* 로그인 로딩 */,
  // logInDone: false,
  // logInError: null,

  // logOutLoading: false /* 로그인 로딩 */,
  // logOutDone: false,
  // logOutError: null,

  isLoggedIn: false,
  user: null,
  singUpDate: {},
  loginData: {},
};

// export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
// export const LOG_IN_REQUEST = "LOG_IN_SUCCESS";
// export const LOG_IN_REQUEST = "LOG_IN_FAILURE";

// export const LOG_IN_REQUEST = "LOG_OUT_REQUEST";
// export const LOG_IN_REQUEST = "LOG_OUT_SUCCESS";
// export const LOG_IN_REQUEST = "LOG_OUT_FAILURE";

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
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
