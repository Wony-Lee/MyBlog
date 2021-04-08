import produce from "immer";

export const initialState = {
  dailyPost: [
    {
      id: 1,
      User: {
        id: 1,
        name: "Wony",
      },
      subtitle: "Hello",
      content: "Hi",
    },
  ],
  dailyPostLoading: false,
  dailyPostDone: false,
  dailyPostError: null,
};

export const DAILY_POST_REQUEST = "DAILY_POST_REQUEST";
export const DAILY_POST_SUCCESS = "DAILY_POST_SUCCESS";
export const DAILY_POST_FAILURE = "DAILY_POST_FAILURE";

export const addDailyPost = (data) => ({
  type: DAILY_POST_SUCCESS,
  data,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return state;
    }
  });

export default reducer;
