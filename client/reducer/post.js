import produce from "immer";

const initialState = () => {};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return state;
    }
  });

export default reducer;
