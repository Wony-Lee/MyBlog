import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducer/index";

const loggerMiddleware = ({ dispath, getState }) => (next) => (acticon) => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const middlewares = [];
  const enhencer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhencer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
