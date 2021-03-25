import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer/index";

const loggerMiddleware = ({ dispath, getState }) => (next) => (acticon) => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
