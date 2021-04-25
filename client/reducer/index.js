import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import guest from "./guest";
import daily from "./daily";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        guest,
        daily,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
