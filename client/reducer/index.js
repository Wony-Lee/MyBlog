import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import guest from "./guest";
import daily from "./daily";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return {
          ...state,
          ...state.payload,
        };
      default:
        return state;
    }
  },
  user,
  guest,
  daily,

  //   switch (action.type) {
  //     case "HYDRATE":
  //       console.log("HYDRATE", action);
  //       return action.payload;
  //     default: {
  //       const combineReducer = combineReducers({});
  //       return combineReducer(state, action);
  //     }
  //   }
});

export default rootReducer;
